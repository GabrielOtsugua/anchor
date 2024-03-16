import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { ArrowRight, Dot, MoveRight, Search, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export function Orders() {
  const orders = [
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
      status: "Pendente",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
      status: "Entregue",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
      status: "Cancelado",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
      status: "Pendente",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
      status: "Entregue",
      clientName: "Gabriel Augusto Moraes de Aguiar",
      total: 250.0,
    },
    {
      id: uuidv4(),
      finishedAt: "há 15 minutos",
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
        <Table className="border shadow">
          <TableCaption>Pedidos feitos recentemente.</TableCaption>

          <TableHeader>
            <TableRow className="text-sm">
              <TableHead></TableHead>
              <TableHead>Identificador</TableHead>
              <TableHead className="min-w-32">Realizado há</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="min-w-72">Cliente</TableHead>
              <TableHead className="min-w-24">Total</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <Button variant="outline" className="p-2 h-auto">
                    <Search className="w-3 h-3" />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">
                  {item.id.slice(0, 9)}
                </TableCell>
                <TableCell>{item.finishedAt}</TableCell>
                <TableCell className="flex items-center">
                  <Dot
                    data-status={item.status}
                    className="h-8 w-8 text-muted-foreground text-yellow-500 data-[status='Entregue']:text-emerald-500 data-[status='Cancelado']:text-rose-500"
                  />
                  {item.status}
                </TableCell>
                <TableCell>{item.clientName}</TableCell>
                <TableCell>R$ {item.total},00</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="text-xs py-1 px-2 h-auto flex"
                  >
                    <ArrowRight className="w-2 h-2 mr-2" /> Aprovar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="text-xs py-1 px-2 h-auto flex"
                  >
                    <X className="w-2 h-2 mr-1" /> Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
