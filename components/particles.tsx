"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ScrollArea } from "./ui/scroll-area";
import { Comic_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

interface SparklesTextProps {
  text: string
  className?: string
  particles?: boolean
}

const comic_neue = Comic_Neue({ subsets: ["latin"], weight: ["400"] })

export function SparklesText(
  {
    text,
    className,
    particles = true
  }: SparklesTextProps
) {
  return (
    <div className={cn("relative bg-blue-800 flex flex-col overflow-hidden rounded-md text-white", className)}>
      <div className="w-full absolute inset-0">
        {particles &&
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFD700"
          />}
      </div>
      <ScrollArea className={cn("h-full text-lg", comic_neue.className)}>
        <div className="p-8">{text}</div>
      </ScrollArea>
    </div>
  );
}
