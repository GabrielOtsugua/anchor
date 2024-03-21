import { toast } from "@/components/ui/use-toast";
import { defaultOrders } from "@/data";
import { Order, User } from "@/interfaces";
import { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextProps {
  userFormData: User | undefined;
  orders: Order[];
  setUserFormData: React.Dispatch<React.SetStateAction<User | undefined>>;
  onSubmitHome: (data: User, navigate: any) => void;
  logOut: (navigate: any) => void;
  orderStatusChange: (orderId: string, newStatus: string) => void;
}

export const userContext = createContext({} as UserContextProps);

interface ChildrenType {
  children: ReactNode;
}

export function UserContextProvider({ children }: ChildrenType) {
  const [userFormData, setUserFormData] = useState<User>();
  const [orders, setOrders] = useState(defaultOrders);

  const onSubmitHome = (data: User, navigate: any) => {
    setUserFormData(data);
    localStorage.setItem("userName", data.userName);

    navigate("/dashboard");
  };

  const logOut = (navigate: any) => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  const orderStatusChange = (orderId: string, newStatus: string) => {
    const newOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    console.log(newOrders);

    setOrders(newOrders);

    toast({
      description: `Status do pedido alterado para "${newStatus}"`,
    });
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    userName && setUserFormData({ userName });
  }, []);

  return (
    <userContext.Provider
      value={{
        userFormData,
        orders,
        setUserFormData,
        onSubmitHome,
        logOut,
        orderStatusChange,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
