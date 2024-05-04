"use client";

import { LandingPage } from "@/components/home/main";
import { SparklesText } from "@/components/particles";

export default function Home() {
  return (
    <main className="py-8" >
      <LandingPage />
      <SparklesText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </main>
  );
}
