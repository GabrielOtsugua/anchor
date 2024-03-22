import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export function NavigationBarMobile() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="w-full md:w-auto inline-flex lg:hidden gap-2 bg-secondary p-1 rounded overflow-auto"
    >
      <Button variant={"default"} className="px-3 py-1 h-auto">
        Visão geral
      </Button>

      <Button
        onClick={() =>
          toast({ description: `Disponível apenas aos usuários Premium` })
        }
        variant={"ghost"}
        type="reset"
        className="px-3 py-1 h-auto cursor-default text-muted-foreground"
      >
        Análise
      </Button>

      <Button
        onClick={() =>
          toast({ description: `Disponível apenas aos usuários Premium` })
        }
        variant={"ghost"}
        type="reset"
        className="px-3 py-1 h-auto cursor-default text-muted-foreground"
      >
        Relatórios
      </Button>

      <Button
        onClick={() =>
          toast({ description: `Disponível apenas aos usuários Premium` })
        }
        variant={"ghost"}
        type="reset"
        className="px-3 py-1 h-auto cursor-default text-muted-foreground"
      >
        Notificações
      </Button>
    </motion.div>
  );
}
