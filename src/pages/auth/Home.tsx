import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Pizza } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundPizza from "../../assets/backgrounPizza.jpg";

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex flex-col justify-between border-r p-8">
        <img
          src={backgroundPizza}
          alt=""
          className="-z-10 absolute top-0 left-0 w-[50%] h-screen"
        />

        <div className="max-w-44 flex gap-3 hover:translate-x-4 duration-500 cursor-default bg-muted px-4 py-2 rounded-3xl">
          <Pizza />
          <h1 className="text-xl font-medium">pizza.shop</h1>
        </div>

        <footer>
          <p className="text-sm text-muted-foreground">
            Home &copy; pizza.shop - 2024
          </p>
        </footer>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-6 w-[90%] md:w-[65%] xl:w-[45%]">
          <header className="">
            <h1 className="text-2xl font-semibold text-center">
              Acessar dashboard
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Acesse o dashboard inserindo seu nome
            </p>
          </header>

          <div className="w-full">
            <Label>Seu nome</Label>
            <Input placeholder="Seu nome" />
          </div>

          <Button onClick={() => navigate("/")} className="w-full">
            Acessar
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
