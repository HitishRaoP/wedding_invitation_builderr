'use client';
import { useState, useTransition } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreateRazorpayDetails } from '@/actions/razorpay';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    Razorpay: any;
  }
}

function Payment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const AMOUNT = 250000;
  const [currency, setCurrency] = useState('INR');
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pid: string = searchParams.get('pid') || ''
  const createOrderId = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: AMOUNT
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const orderId: string = await createOrderId();
      const options = {
        key: process.env.key_id,
        currency: currency,
        name: 'Website Wedding invitation',
        description: 'Create modern website wedding invitations in minutes',
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          startTransition(() => {
            CreateRazorpayDetails(pid, data)
              .then((data) => {
                toast.success(data.success)
              })
              .catch((error) =>
                toast.error("An error occurred while creating the project"))
              .finally(() => router.push("/dashboard"))
          })

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          const res = await result.json();
          if (res.isOk) toast.success("payment succeed");
          else {
            toast.error(res.message);
          }
        },
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: '#3399cc',
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <section className="min-h-[94vh] flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36 ">
        <form
          className="flex flex-col gap-6 w-full sm:w-80"
          onSubmit={processPayment}
        >
          <div className="space-y-1">
            <Label>Full name</Label>
            <Input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="user@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Amount</Label>
            <div className="flex gap-2">
              <Input
                type="number"
                disabled
                value={2500}
              />
            </div>
          </div>
          <Button type="submit">Pay</Button>
        </form>
      </section>
    </>
  );
}

export default Payment;