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

export function Dashboard() {
  const initialDialog = localStorage.getItem("initialDialog");

  useEffect(() => {
    localStorage.setItem("initialDialog", "closed");
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Dialog defaultOpen={initialDialog ? false : true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">Atenção usuário</DialogTitle>
            <DialogDescription>
              <p className="mb-4">
                "pizza.shop" é o comércio padrão, com suas devidas informações,
                para apresentação da plataforma.
              </p>
              <p>
                O tema padrão da plataforma está como "Sistema", caso tenha
                interesse em alterar o tema, clique no ícone no canto superior
                direito.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <header>
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold animate-fade">Dashboard</h1>
          <DateRangePicker className="animate-fade" />
        </div>

        <NavigationBar />
      </header>

      <Informations />

      <Grafics />
    </div>
  );
}
