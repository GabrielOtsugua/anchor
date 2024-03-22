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
import { userContext } from "@/contexts/UserContext";
import { Order } from "@/interfaces";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";

interface ApprovalDialogProps {
  order: Order;
}

export function ApprovalDialog({ order }: ApprovalDialogProps) {
  const { orderStatusChange } = useContext(userContext);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          disabled={order.status !== "Pendente"}
          className="text-xs py-1 px-2 h-auto flex"
        >
          <ArrowRight className="w-2 h-2 mr-1" /> Aprovar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[91.5%]">
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação tornará o status do pedido como "Entregue".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Sair</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => orderStatusChange(order.id, "Entregue")}
          >
            Prosseguir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
