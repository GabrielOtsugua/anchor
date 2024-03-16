import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { Dot } from "lucide-react";
import { motion } from "framer-motion";

const data2 = [
  { name: "Portuguesa", value: 30 },
  { name: "Marguerita", value: 26 },
  { name: "Lombo Canadense", value: 19 },
  { name: "Geleia de Pimenta", value: 11 },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const RADIAN = Math.PI / 180;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PizzaGrafic extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={400} height={400}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="value"
            className="fill-primary stroke-secondary text-xs"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

// OUTRA PARTE

export function Grafics() {
  const data1 = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  const data2 = [
    {
      order: "Portuguesa",
      amount: 50,
    },
    {
      order: "Marguerita",
      amount: 44,
    },
    {
      order: "Lombo canadense",
      amount: 38,
    },
    {
      order: "Geleia de pimenta",
      amount: 32,
    },
    {
      order: "Costela bovina",
      amount: 26,
    },
    {
      order: "Quatro queijos",
      amount: 20,
    },
    {
      order: "Albrasata",
      amount: 14,
    },
    {
      order: "Escarola",
      amount: 8,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <motion.section
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="col-span-1 lg:col-span-2 border shadow rounded-md p-4"
      >
        <p className="pl-4 font-semibold">Gráfico de receita</p>
        <p className="pl-4 mb-6 text-sm text-muted-foreground">Receita anual</p>

        <ResponsiveContainer
          width="100%"
          height={300}
          className="-translate-x-2"
        >
          <BarChart data={data1}>
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
        className="col-span-1 lg:col-span-1 border shadow rounded-md py-4 px-8 animate-move_left"
      >
        <p className="font-semibold">Pedidos populares</p>
        <p className="mb-4 text-sm text-muted-foreground">
          Mais pedidos do mês
        </p>

        <ol className="grid gap-2 text-sm mb-4">
          {data2.map((item, i) => (
            <li className="flex items-center">
              <span className="text-muted-foreground">{i + 1}. </span>{" "}
              <span className="ml-1 text-muted-foreground">{item.order}</span>{" "}
              <Dot /> {item.amount} pedidos
            </li>
          ))}
        </ol>

        {/* <PizzaGrafic /> */}
      </motion.section>
    </div>
  );
}
