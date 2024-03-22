import { DateRangePicker } from "./components/DateRangePicker";
import { Grafics } from "./components/Grafics";
import { Informations } from "./components/Informations";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NavigationBar } from "./components/NavigationBar";
import { NavigationBarMobile } from "./components/NavigationBarMobile";

export function Dashboard() {
  const initialDialog = localStorage.getItem("initialDialog");

  useEffect(() => {
    localStorage.setItem("initialDialog", "closed");
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Dialog defaultOpen={initialDialog ? false : true}>
        <DialogContent className="w-[91.5%]">
          <DialogHeader>
            <DialogTitle className="mb-4">Atenção usuário</DialogTitle>
            <DialogDescription>
              <p className="mb-4">
                "pizza.shop" é o comércio padrão, com suas devidas informações,
                para apresentação da plataforma.
              </p>
              <p>
                O tema padrão da plataforma é "Sistema", caso tenha interesse em
                alterar o tema, clique no ícone no canto superior direito.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <header>
        <div className="block md:flex justify-between mb-4">
          <h1 className="text-3xl font-bold animate-fade mb-4 lg:mb-0">
            Dashboard
          </h1>
          <DateRangePicker className="animate-fade" />
        </div>

        <NavigationBar />
        <NavigationBarMobile />
      </header>

      <Informations />

      <Grafics />
    </div>
  );
}
