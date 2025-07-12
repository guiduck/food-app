import Link from "next/link";

export default function LoginLink() {
  return (
    <div className="text-center mt-l">
      <p className="text-s text-text-secondary">
        Já tem uma conta?{" "}
        <Link
          href="/login"
          className="text-primary hover:text-primary-dark font-medium transition-colors"
        >
          Fazer login
        </Link>
      </p>
    </div>
  );
}
