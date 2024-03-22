import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";
import { Award, Medal } from "lucide-react";
import { motion } from "framer-motion";

export function Grafics() {
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 50000),
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 50000),
    },
  ];

  const orders = [
    {
      id: 1,
      order: "Portuguesa",
      amount: 120,
      price: 80,
    },
    {
      id: 2,
      order: "Marguerita",
      amount: 114,
      price: 80,
    },
    {
      id: 3,
      order: "Lombo canadense",
      amount: 108,
      price: 90,
    },
    {
      id: 4,
      order: "Geleia de pimenta",
      amount: 102,
      price: 100,
    },
    {
      id: 5,
      order: "Costela bovina",
      amount: 96,
      price: 100,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <motion.section
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="col-span-1 lg:col-span-7 border shadow rounded-xl p-4"
      >
        <p className="pl-4 font-semibold">Gráfico de faturamento</p>
        <p className="pl-4 mb-6 text-sm text-muted-foreground">
          Faturamento durante o ano.
        </p>

        <ResponsiveContainer
          width="100%"
          height={350}
          className="-translate-x-2"
        >
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.section>

      <motion.section
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="col-span-1 lg:col-span-5 border shadow rounded-xl py-4 px-8 animate-move_left"
      >
        <p className="font-semibold">Pedidos populares</p>
        <p className="mb-4 text-sm text-muted-foreground">
          Mais pedidos do mês.
        </p>

        <div className="flex flex-col gap-4">
          {orders.map((item, i) => (
            <div
              key={item.id}
              className="flex justify-between items-center rounded-xl py-2"
            >
              <span className="flex items-center gap-3">
                <figure>
                  {i === 0 ? (
                    <Medal className="w-4 text-primary" />
                  ) : (
                    <Award className="w-4 text-primary" />
                  )}
                </figure>
                <div>
                  <p className="text-sm">{item.order}</p>
                  <p className="text-xs text-muted-foreground">
                    R$ {item.price},00
                  </p>
                </div>
              </span>

              <p className="font-semibold">
                {item.amount}{" "}
                <span className="font-light text-sm text-muted-foreground">
                  pedidos
                </span>
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
