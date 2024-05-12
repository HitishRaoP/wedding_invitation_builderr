import Link from "next/link";

const footerList = [
  {
    title: 'Feedback',
    link: '/feedback'
  },
  {
    title: 'Terms & Conditions',
    link: 'https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/terms'
  },
  {
    title: 'Cancellation & Refund Policy',
    link: 'https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/refund'
  },
  {
    title: 'Shipping & Delivery Policy',
    link: 'https://merchant.razorpay.com/policy/O3lEReTpPFUKRo/shipping'
  }
]
export function Footer() {
  return (
    <div className="relative bottom-0 right-0 left-0 grid grid-cols-2 gap-6 my-10 md:grid-cols-4 items-center justify-center">
      {
        footerList.map((item, index) => {
          return (
            <Link target="_blank" href={item.link} key={index} className="text-center text-lime-800">
              {item.title}
            </Link>
          )
        })
      }
    </div>
  )
}
