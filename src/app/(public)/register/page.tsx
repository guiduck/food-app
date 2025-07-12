"use client";

import PageHeader from "./ui/page-header";
import FormRegister from "./ui/form-register";
import LoginLink from "./ui/login-link";
import SuccessTip from "./ui/success-tip";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />

      <div className="flex items-center justify-center p-l">
        <div className="w-full max-w-sm">
          <FormRegister />
          <LoginLink />
          <SuccessTip />
        </div>
      </div>
    </div>
  );
}
