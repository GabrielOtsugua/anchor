export interface User {
  userName: string;
}

export interface Order {
  id: string;
  finishedAt: number;
  status: string;
  clientName: string;
  total: number;
}
