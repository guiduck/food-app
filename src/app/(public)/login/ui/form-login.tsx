"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginAndSetSession } from "@/actions/login";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const schema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function FormLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await loginAndSetSession(data.email, data.password);
    if (res?.errorUserMessage) {
      toast.error(res.errorUserMessage ?? "Falha no login");
      return;
    }

    toast.success("Login realizado com sucesso!");
    router.push("/");
  };

  return (
    <div className="bg-card border border-border rounded-m p-l space-y-l mt-xl">
      <div className="flex justify-end mb-4">
        <ThemeToggle small />
      </div>

      <div className="text-center space-y-s">
        <h2 className="text-xl font-bold text-text-primary">
          Entrar na sua conta
        </h2>
        <p className="text-s text-text-secondary">
          Entre com seus dados para acessar o app
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-m">
        <div className="space-y-xs">
          <Label
            htmlFor="email"
            className="text-s font-medium text-text-primary"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="h-12 text-s"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-xxs flex items-center gap-xxs">
              <span className="text-destructive">⚠</span>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-xs">
          <Label
            htmlFor="password"
            className="text-s font-medium text-text-primary"
          >
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="h-12 text-s"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-destructive mt-xxs flex items-center gap-xxs">
              <span className="text-destructive">⚠</span>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="text-right">
          <a
            href="#"
            className="text-xs text-primary hover:text-primary-dark transition-colors"
          >
            Esqueceu a senha?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-s font-medium bg-primary hover:bg-primary-dark text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-xs">
              <span className="animate-spin">⏳</span>
              Entrando...
            </span>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </div>
  );
}
