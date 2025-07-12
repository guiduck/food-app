export default function CredentialsInfo() {
  return (
    <div className="bg-teal-background border border-teal/20 rounded-s p-s mt-l">
      <div className="space-y-xs">
        <p className="text-xs text-teal-text text-center font-medium">
          🎯 Credenciais de Teste
        </p>
        <div className="space-y-xxs text-xs text-teal-text">
          <div className="flex justify-between items-center">
            <span className="font-medium">Loja:</span>
            <span className="font-mono">store@food.com / 123456</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Cliente:</span>
            <span className="font-mono">user@food.com / 123456</span>
          </div>
        </div>
        <div className="pt-xxs border-t border-teal/20">
          <p className="text-xs text-teal-text text-center opacity-80">
            Ou use qualquer email válido com senha de 6+ caracteres
          </p>
        </div>
      </div>
    </div>
  );
}
