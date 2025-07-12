"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerAndLogin } from "@/actions/auth";

const schema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  role: z.enum(["store", "customer"]),
});

type FormData = z.infer<typeof schema>;

export default function FormRegister() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      role: "customer",
    },
  });

  const onSubmit = async (data: FormData) => {
    const res = await registerAndLogin(data);
    if (res?.error) {
      toast.error(res.errorUserMessage ?? "Erro no cadastro");
      return;
    }

    toast.success("Conta criada com sucesso! Bem-vindo!");
    router.push("/");
  };

  return (
    <div className="bg-card border border-border rounded-m p-l space-y-l mt-l">
      <div className="text-center space-y-s">
        <h2 className="text-xl font-bold text-text-primary">
          Criar nova conta
        </h2>
        <p className="text-s text-text-secondary">
          Preencha os dados para se cadastrar
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
            placeholder="joao@email.com"
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

        <div className="space-y-xs">
          <Label className="text-s font-medium text-text-primary">
            Tipo de conta
          </Label>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="space-y-s"
              >
                <div className="flex items-center gap-xs p-s border border-border rounded-s hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value="customer" id="customer" />
                  <div className="flex-1">
                    <Label
                      htmlFor="customer"
                      className="text-s font-medium text-text-primary"
                    >
                      Cliente
                    </Label>
                    <p className="text-xs text-text-secondary mt-xxs">
                      Fazer pedidos e avaliar restaurantes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-xs p-s border border-border rounded-s hover:bg-secondary/50 transition-colors">
                  <RadioGroupItem value="store" id="store" />
                  <div className="flex-1">
                    <Label
                      htmlFor="store"
                      className="text-s font-medium text-text-primary"
                    >
                      Loja/Restaurante
                    </Label>
                    <p className="text-xs text-text-secondary mt-xxs">
                      Gerenciar cardápio e pedidos do restaurante
                    </p>
                  </div>
                </div>
              </RadioGroup>
            )}
          />
          {errors.role && (
            <p className="text-xs text-destructive mt-xxs flex items-center gap-xxs">
              <span className="text-destructive">⚠</span>
              {errors.role.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-s font-medium bg-primary hover:bg-primary-dark text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-xs">
              <span className="animate-spin">⏳</span>
              Criando conta...
            </span>
          ) : (
            "Criar conta"
          )}
        </Button>
      </form>
    </div>
  );
}
