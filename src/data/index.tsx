import { v4 as uuidv4 } from "uuid";

export const defaultOrders = [
  {
    id: uuidv4(),
    finishedAt: 10,
    status: "Pendente",
    clientName: "Gabriel Augusto Moraes de Aguiar",
    total: 250.0,
  },
  {
    id: uuidv4(),
    finishedAt: 10,
    status: "Entregue",
    clientName: "Gabriel Augusto Moraes de Aguiar",
    total: 250.0,
  },
  {
    id: uuidv4(),
    finishedAt: 10,
    status: "Cancelado",
    clientName: "Gabriel Augusto Moraes de Aguiar",
    total: 250.0,
  },
  {
    id: uuidv4(),
    finishedAt: 15,
    status: "Pendente",
    clientName: "Mario Sergio Cortella",
    total: 250.0,
  },
  {
    id: uuidv4(),
    finishedAt: 15,
    status: "Entregue",
    clientName: "Mario Sergio Cortella",
    total: 250.0,
  },
  {
    id: uuidv4(),
    finishedAt: 15,
    status: "Cancelado",
    clientName: "Mario Sergio Cortella",
    total: 250.0,
  },
];
