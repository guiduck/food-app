"use client";

import PageHeader from "./ui/page-header";
import FormLogin from "./ui/form-login";
import RegisterLink from "./ui/register-link";
import CredentialsInfo from "./ui/credentials-info";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />

      <div className="flex items-center justify-center p-l">
        <div className="w-full max-w-sm">
          <FormLogin />
          <RegisterLink />
          <CredentialsInfo />
        </div>
      </div>
    </div>
  );
}
