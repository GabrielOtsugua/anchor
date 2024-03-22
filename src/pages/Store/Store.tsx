import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import pizza from "../../assets/pizza.jpg";

//

export function Store() {
  const navigate = useNavigate();

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 p-4 animate-fade">
      <div className="flex justify-center items-center">
        <figure className="w-52 h-5w-52 md:w-72 md:h-72 border rounded-3xl bg-secondary">
          <img
            src={pizza}
            alt=""
            className="border rounded-3xl shadow-xl p-8 bg-white translate-x-8 translate-y-8"
          />
        </figure>
      </div>

      <div className="flex flex-col justify-center md:justify-start lg:justify-center items-center gap-4">
        <h1 className="text-center text-4xl font-bold">Pizza Shop</h1>

        <p className="text-muted-foreground md:w-[500px]">
          Na nossa pizzaria, cada fatia é uma experiência, e cada mordida é um
          pedacinho do céu! Venha saborear a autêntica paixão italiana em cada
          pedaço.
        </p>

        <p className="text-muted-foreground md:w-[500px]">
          Aqui na Pizza Shop, cada pizza é uma obra de arte e cada cliente é um
          amigo. Delicie-se conosco e descubra o verdadeiro sabor da tradição!
        </p>

        <Button
          variant={"secondary"}
          onClick={() => navigate("/dashboard")}
          className="w-52"
        >
          Voltar para o Dashboard
        </Button>
      </div>
    </div>
  );
}
