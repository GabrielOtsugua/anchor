import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

export function NotFound() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page" className=" h-screen flex justify-center items-center">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl mb-4">Oops!</h1>
        <p className="text-xl">Desculpe, ocorreu um erro inesperado.</p>
        <p className="text-muted-foreground">
          <i>{error.statusText || error.message}</i>
        </p>

        <Button onClick={() => navigate("/")}>
          Voltar para a página inicial
        </Button>
      </main>
    </div>
  );
}
