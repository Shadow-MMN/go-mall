'use client';
// app/cart/checkout/CheckoutForm.jsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth

export default function CheckoutForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [couponCode, setCouponCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state
  const [formErrors, setFormErrors] = useState({}); // Add state for validation errors
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: ''
  });
  
  const [saveInfo, setSaveInfo] = useState(true);

  // Check authentication status on component mount
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      
      // If user is authenticated, we can pre-fill some data
      if (user && user.email) {
        setFormData(prevData => ({
          ...prevData,
          emailAddress: user.email || prevData.emailAddress
        }));
      }
    });
    
    // Clean up subscription
    return () => unsubscribe();
  }, []);

  // Load cart and products from localStorage on component mount
  useEffect(() => {
    setIsLoading(true);
    
    try {
      // Get cart data
      const savedCart = localStorage.getItem('fakeStoreCart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      
      // Get available products - in a real app this might come from an API
      // Here we're assuming products are saved in localStorage by your products page
      const productsData = localStorage.getItem('fakeStoreProducts');
      if (productsData) {
        setAvailableProducts(JSON.parse(productsData));
      }
      
      // Load saved billing info if available
      const savedBillingInfo = localStorage.getItem('fakeStoreBillingInfo');
      if (savedBillingInfo && saveInfo) {
        setFormData(JSON.parse(savedBillingInfo));
      }
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get full product details from the product ID
  const getProductDetails = (productId) => {
    return availableProducts.find(product => product.id === productId) || null;
  };

  // Calculate total cost of all items
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = getProductDetails(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'streetAddress', 'townCity', 'phoneNumber', 'emailAddress'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    
    // Additional validation for email format
    if (formData.emailAddress && !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      errors.emailAddress = 'Please enter a valid email address';
    }
    
    // Validate phone number (simple validation, adjust as needed)
    if (formData.phoneNumber && !/^[0-9-+\s()]{7,}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form first
    const isValid = validateForm();
    if (!isValid) {
      // Scroll to the first error element
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      return;
    }
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      alert('Please sign in to complete your order');
      router.push('/login?redirect=/cart/checkout'); // Redirect to login with return URL
      return;
    }
    
    // Save billing info if checkbox is checked
    if (saveInfo) {
      localStorage.setItem('fakeStoreBillingInfo', JSON.stringify(formData));
    }
    
    // In a real app, you would process the order here
    // For demo purposes, just show an alert and clear the cart
    alert('Order placed successfully!');
    localStorage.removeItem('fakeStoreCart');
    router.push('/order-confirmation');
  };

  // Apply coupon
  const applyCoupon = () => {
    if (!couponCode.trim()) return;
    
    // For demo purposes, just show an alert
    alert(`Coupon ${couponCode} applied!`);
    setCouponCode('');
  };

  // Check if all required fields are filled to enable the place order button
  const isFormComplete = () => {
    const requiredFields = ['firstName', 'lastName', 'streetAddress', 'townCity', 'phoneNumber', 'emailAddress'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="mb-4">Your cart is empty. Please add items to your cart before checking out.</p>
        <button 
          onClick={() => router.push('/products')}
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Go to Products
        </button>
      </div>
    );
  }

  // Determine if the Place Order button should be enabled based on form completion and authentication
  const isOrderButtonEnabled = isAuthenticated && isFormComplete();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Billing Details Form */}
      <div className="lg:w-2/3">
        <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm mb-1" htmlFor="firstName">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
                aria-invalid={!!formErrors.firstName}
                aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
              />
              {formErrors.firstName && (
                <p id="firstName-error" className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm mb-1" htmlFor="lastName">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
                aria-invalid={!!formErrors.lastName}
                aria-describedby={formErrors.lastName ? "lastName-error" : undefined}
              />
              {formErrors.lastName && (
                <p id="lastName-error" className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="companyName">
              Company Name (optional)
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded bg-gray-50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="streetAddress">
              Street Address<span className="text-red-500">*</span>
            </label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              required
              value={formData.streetAddress}
              onChange={handleInputChange}
              className={`w-full p-3 border ${formErrors.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
              aria-invalid={!!formErrors.streetAddress}
              aria-describedby={formErrors.streetAddress ? "streetAddress-error" : undefined}
            />
            {formErrors.streetAddress && (
              <p id="streetAddress-error" className="text-red-500 text-sm mt-1">{formErrors.streetAddress}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="apartment">
              Apartment, floor, etc. (optional)
            </label>
            <input
              id="apartment"
              name="apartment"
              type="text"
              value={formData.apartment}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded bg-gray-50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="townCity">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input
              id="townCity"
              name="townCity"
              type="text"
              required
              value={formData.townCity}
              onChange={handleInputChange}
              className={`w-full p-3 border ${formErrors.townCity ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
              aria-invalid={!!formErrors.townCity}
              aria-describedby={formErrors.townCity ? "townCity-error" : undefined}
            />
            {formErrors.townCity && (
              <p id="townCity-error" className="text-red-500 text-sm mt-1">{formErrors.townCity}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="phoneNumber">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`w-full p-3 border ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
              aria-invalid={!!formErrors.phoneNumber}
              aria-describedby={formErrors.phoneNumber ? "phoneNumber-error" : undefined}
            />
            {formErrors.phoneNumber && (
              <p id="phoneNumber-error" className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-sm mb-1" htmlFor="emailAddress">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              required
              value={formData.emailAddress}
              onChange={handleInputChange}
              className={`w-full p-3 border ${formErrors.emailAddress ? 'border-red-500' : 'border-gray-300'} rounded bg-gray-50`}
              aria-invalid={!!formErrors.emailAddress}
              aria-describedby={formErrors.emailAddress ? "emailAddress-error" : undefined}
            />
            {formErrors.emailAddress && (
              <p id="emailAddress-error" className="text-red-500 text-sm mt-1">{formErrors.emailAddress}</p>
            )}
          </div>
          
          <div className="mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={() => setSaveInfo(!saveInfo)}
                className="h-4 w-4 text-red-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm">Save this information for faster check-out next time</span>
            </label>
          </div>
        </form>
      </div>
      
      {/* Order Summary */}
      <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Your Order</h2>
        
        <div className="space-y-4 mb-6">
          {cart.map(item => {
            const product = getProductDetails(item.productId);
            if (!product) return null;
            
            return (
              <div key={item.productId} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image 
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm truncate max-w-xs">{product.title} <span className="font-medium">× {item.quantity}</span></span>
                </div>
                <span className="font-medium">${(product.price * item.quantity).toFixed(2)}</span>
              </div>
            );
          })}
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span className="font-medium">${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-medium text-lg mt-4">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="mb-6">
          <div className="mb-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="h-4 w-4"
              />
              <span>Bank Transfer</span>
            </label>
          </div>
          
          {paymentMethod === 'bank' && (
            <div className="pl-6 mb-4">
              <div className="flex gap-2 mb-2">
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
              </div>
              <p className="text-sm text-gray-600">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              </p>
            </div>
          )}
          
          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
                className="h-4 w-4"
              />
              <span>Cash on delivery</span>
            </label>
          </div>
        </div>
        
        {/* Coupon */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-l"
          />
          <button 
            onClick={applyCoupon}
            className="bg-red-500 text-white px-4 py-2 rounded-r font-medium">
            Apply
          </button>
        </div>
        
        {/* Place Order Button */}
        <button
          onClick={handleSubmit}
          disabled={!isOrderButtonEnabled}
          className={`w-full py-3 rounded font-medium transition-colors ${
            isOrderButtonEnabled 
              ? "bg-red-500 text-white hover:bg-red-600" 
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          {isAuthenticated ? 
            (isFormComplete() ? "Place Order" : "Complete Required Fields") : 
            "Sign in to Place Order"}
        </button>
        
        {/* Form completion notice */}
        {isAuthenticated && !isFormComplete() && (
          <p className="text-sm text-red-500 mt-2 text-center">
            Please fill in all required fields marked with *
          </p>
        )}
        
        {/* Authentication notice */}
        {!isAuthenticated && (
          <p className="text-sm text-gray-600 mt-2 text-center">
            Please <button 
              onClick={() => router.push('/login?redirect=/cart/checkout')}
              className="text-red-500 underline"
            >
              sign in
            </button> to complete your purchase
          </p>
        )}
      </div>
    </div>
  );
}