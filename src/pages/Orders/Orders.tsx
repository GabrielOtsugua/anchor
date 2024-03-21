import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { DataDialog } from "./components/DataDialog";
import { CancellationDialog } from "./components/CancellationDialog";
import { ApprovalDialog } from "./components/ApprovalDialog";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "@/contexts/UserContext";

interface Client {
  clientName: string;
}

export function Orders() {
  const { register, watch } = useForm<Client>();
  const { orders } = useContext(userContext);

  const clientName = watch().clientName || "";

  const filteredOrders = orders.filter((item) =>
    item.clientName.toLowerCase().startsWith(clientName)
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold animate-fade">Pedidos</h1>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="w-64"
      >
        <Label>Filtros</Label>
        <Input
          {...register("clientName")}
          placeholder="Nome do cliente"
          className="shadow-sm"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
      >
        <div className="border rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Identificador</TableHead>
                <TableHead className="min-w-32">Realizado há</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="min-w-48">Cliente</TableHead>
                <TableHead className="min-w-24">Total</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <DataDialog order={item} />
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.id.slice(0, 9)}
                  </TableCell>
                  <TableCell>{`há ${item.finishedAt} minutos`}</TableCell>
                  <TableCell
                    data-isPending={item.status === "Pendente"}
                    className="data-[isPending=true]:text-primary"
                  >
                    {item.status}
                  </TableCell>
                  <TableCell>
                    {`${item.clientName
                      .split(" ")
                      .filter((_, i) => i < 2)
                      .join(" ")}...`}
                  </TableCell>
                  <TableCell>R$ {item.total},00</TableCell>
                  <TableCell>
                    <ApprovalDialog order={item} />
                  </TableCell>
                  <TableCell>
                    <CancellationDialog order={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground w-full text-center mt-4">
          Pedidos realizados recentemente.
        </p>
      </motion.div>
    </div>
  );
}
