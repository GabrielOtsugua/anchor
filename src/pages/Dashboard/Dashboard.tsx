import { Button } from "@/components/ui/button";
import { DateRangePicker } from "./components/DateRangePicker";
import { Grafics } from "./components/Grafics";
import { Informations } from "./components/Informations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold animate-fade">Dashboard</h1>
          <DateRangePicker className="animate-fade" />
        </div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="inline-flex gap-2 bg-secondary p-1 rounded"
        >
          <Button variant={"default"} className="px-3 py-1 h-auto">
            Visão geral
          </Button>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  type="reset"
                  className="px-3 py-1 h-auto cursor-default text-muted-foreground"
                >
                  Análise
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>
                  Somente para usuários{" "}
                  <span className="text-primary">Premium</span>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  type="reset"
                  className="px-3 py-1 h-auto cursor-default text-muted-foreground"
                >
                  Relatórios
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>
                  Somente para usuários{" "}
                  <span className="text-primary">Premium</span>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  type="reset"
                  className="px-3 py-1 h-auto cursor-default text-muted-foreground"
                >
                  Notificações
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>
                  Somente para usuários{" "}
                  <span className="text-primary">Premium</span>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </header>

      <Informations />

      <Grafics />
    </div>
  );
}
