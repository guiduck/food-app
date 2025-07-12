import Link from "next/link";

export default function RegisterLink() {
  return (
    <div className="text-center mt-l">
      <p className="text-s text-text-secondary">
        Ainda não tem uma conta?{" "}
        <Link
          href="/register"
          className="text-primary hover:text-primary-dark font-medium transition-colors"
        >
          Criar conta
        </Link>
      </p>
    </div>
  );
}
