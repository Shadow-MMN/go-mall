// app/loading.js (or in a specific route like app/contact/loading.js)

export default function Loading() {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  