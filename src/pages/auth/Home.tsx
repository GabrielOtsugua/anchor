import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Anchor } from "lucide-react";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { userContext } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { User } from "@/interfaces";

export function Home() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<User>();
  const { onSubmitHome } = useContext(userContext);

  useEffect(() => {
    localStorage.removeItem("userName");
  }, []);

  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex flex-col justify-between border-r p-8 bg-muted dark:bg-neutral-900">
        <div className="flex items-center gap-3 hover:translate-x-4 duration-500 cursor-default">
          <Anchor className="text-primary" />
          <h1 className="text-xl font-medium">Anchor</h1>
        </div>

        <footer>
          <p className="text-xl mb-4">
            <em>
              Com o Anchor, navegue pelas águas do sucesso gastronômico com
              tranquilidade e precisão.
            </em>
          </p>

          <p className="text-sm text-muted-foreground">
            Home &copy; Anchor - 2024
          </p>
        </footer>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="absolute top-8 right-8 font-semibold">Home</p>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-[90%] md:w-[65%] xl:w-[55%] 2xl:w-[45%]"
        >
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-center">
              Entre para o Anchor
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Digite seu nome abaixo para acessar o dashboard
            </p>
          </header>

          <form>
            <div className="w-full mb-2">
              <Label>Nome</Label>
              <Input placeholder="Seu nome" {...register("userName")} />
            </div>

            <Button
              disabled={watch().userName ? watch().userName.length < 3 : true}
              onClick={handleSubmit((data) => onSubmitHome(data, navigate))}
              className="w-full"
            >
              Acessar
            </Button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
