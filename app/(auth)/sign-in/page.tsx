import AuthForm from "@/components/AuthForm";
import { BackgroundBeams } from "@/components/ui/background-lines";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* AuthForm with a higher z-index to stay above the background */}
      <AuthForm type="sign-in" className="relative z-10" />

      {/* BackgroundBeams component with pointer-events:none to allow interaction with the form */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default page;
