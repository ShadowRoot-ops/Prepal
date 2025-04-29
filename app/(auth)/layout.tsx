import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const Authlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAunthenticated = await isAuthenticated();

  if (!isUserAunthenticated) redirect("/");
  return <div className="auth-layout">{children}</div>;
};

export default Authlayout;
