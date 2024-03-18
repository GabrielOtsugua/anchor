import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { DataDialog } from "./components/DataDialog";
import { CancellationDialog } from "./components/CancellationDialog";
import { ApprovalDialog } from "./components/ApprovalDialog";

export function Orders() {
  const orders = [
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Pendente",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Entregue",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Cancelado",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Pendente",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Entregue",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: 15,
      status: "Cancelado",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
  ];

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
        <Input placeholder="Nome do cliente" className="shadow-sm" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
      >
        <Table className="">
          <TableCaption>Pedidos feitos recentemente.</TableCaption>

          <TableHeader>
            <TableRow className="text-sm">
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
            {orders.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <DataDialog order={item} />
                </TableCell>
                <TableCell className="font-medium">
                  {item.id.slice(0, 9)}
                </TableCell>
                <TableCell>{`há ${item.finishedAt} minutos`}</TableCell>
                <TableCell className="flex items-center">
                  <Dot
                    data-status={item.status}
                    className="h-8 w-8 text-muted-foreground text-yellow-500 data-[status='Entregue']:text-sky-500 data-[status='Cancelado']:text-rose-500"
                  />
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
      </motion.div>
    </div>
  );
}
