import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
  <div className="container container-2xl h-screen flex items-center justify-center">
    <SignUp path="/sign-up" />;
  </div>
  )
}