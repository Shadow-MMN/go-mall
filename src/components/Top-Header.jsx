import Link from 'next/link';



export default function TopHeader() {
    return (
        <>
            <div className='bg-black text-white'>
                <div>
                    <p >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
                    <Link href="/" >ShopNow</Link>
                </div>
                <div>
                    <select name="" id="" >
                        <option value="">USD</option>
                        <option value="">CAD</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                    </select>
                </div>
            </div>    
        </>
    )
}