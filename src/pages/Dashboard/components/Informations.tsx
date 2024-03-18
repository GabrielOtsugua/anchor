import { DollarSign, NotepadText, Utensils, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export function Informations() {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Receita total</p>
          <Wallet className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 1.200.000,00</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+10%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Pedidos (mês)</p>
          <Utensils className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">600</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+4%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Faturamento (mês)</p>
          <NotepadText className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">60.000,00</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+6%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-xl p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Lucro/Prejuízo (mês)</p>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 40.000,00</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+6%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>
    </motion.section>
  );
}
