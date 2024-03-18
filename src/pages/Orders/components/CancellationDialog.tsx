import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

interface Order {
  id: string;
  finishedAt: number;
  status: string;
  clientName: string;
  total: number;
}

interface CancellationlDialogProps {
  order: Order;
}

export function CancellationDialog({ order }: CancellationlDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          disabled={order.status !== "Pendente"}
          className="text-xs py-1 px-2 h-auto flex"
        >
          <ArrowRight className="w-2 h-2 mr-1" /> Cancelar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação tornará o status do pedido como "Cancelado".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Sair</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              toast({
                description: `Status do pedido alterado para "Cancelado"`,
              });
            }}
          >
            Prosseguir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
