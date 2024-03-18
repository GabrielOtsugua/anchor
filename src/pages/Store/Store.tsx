import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import pizza from "../../assets/pizza.jpg";

export function Store() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[70%] grid grid-cols-2 p-16 bg-background rounded-3xl">
        <div className="flex flex-col justify-center pr-8">
          <h1 className="text-4xl font-bold mb-4">Pizza Shop</h1>
          <p className="text-muted-foreground mb-4">
            Na nossa pizzaria, cada fatia é uma experiência, e cada mordida é um
            pedacinho do céu! Venha saborear a autêntica paixão italiana em cada
            pedaço.
          </p>

          <p className="text-muted-foreground mb-8">
            Aqui na Pizza Shop, cada pizza é uma obra de arte e cada cliente é
            um amigo. Delicie-se conosco e descubra o verdadeiro sabor da
            tradição!
          </p>

          <Button
            variant={"secondary"}
            onClick={() => navigate("/")}
            className="w-52"
          >
            Voltar para o Dashboard
          </Button>
        </div>

        <div className="flex justify-center">
          <figure className="w-96 h-96 border rounded-3xl bg-secondary">
            <img
              src={pizza}
              alt=""
              className="w-96 h-96 border rounded-3xl translate-x-8 translate-y-8 shadow-xl p-8 bg-white"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
