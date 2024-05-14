import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" className="h-8 me-3" alt="Unrealon Logo" width={32} height={32} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Unrealon</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/about-us" className="hover:underline  ">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline  ">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/terms" className="hover:underline">Terms &amp;  Conditions</Link>
                </li>
                <li className="mb-4">
                  <Link href="https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/refund" className="hover:underline">Cancellation & Refund Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/shipping" className="hover:underline">Shipping & Delivery Policy</Link>
                </li>
                <li>
                  <Link href={'/privacy-policy.pdf'} className="hover:underline">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
