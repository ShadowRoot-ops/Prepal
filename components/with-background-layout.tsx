"use client";
import { BackgroundBeams } from "@/components/ui/background-lines";

export default function WithBackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <BackgroundBeams />
      <div className="">{children}</div>
    </div>
  );
}
