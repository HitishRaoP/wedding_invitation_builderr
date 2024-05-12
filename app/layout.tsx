import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from '@clerk/nextjs'
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Wedding Invitation",
  description: "Create modern website wedding invitations in minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, "container container-2xl overflow-scroll")}>
          <main>
            {children}
            <Footer />
          </main>
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                error: 'flex items-center gap-2 p-4 rounded-lg text-red-600 bg-red-100',
                success: 'flex items-center gap-2 p-4 rounded-lg text-lime-600 bg-lime-100',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
