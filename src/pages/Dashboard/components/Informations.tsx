import { DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Informations() {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div className="border rounded-md p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Receita total (mês)</p>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 1,248.60</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+2%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-md p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Receita total (mês)</p>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 1,248.60</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+2%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-md p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Receita total (mês)</p>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 1,248.60</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+2%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>

      <div className="border rounded-md p-6 flex flex-col gap-2 shadow">
        <header className="flex items-center justify-between">
          <p className="font-semibold ">Receita total (mês)</p>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </header>
        <main>
          <h1 className="text-2xl font-bold">R$ 1,248.60</h1>
          <p className="text-muted-foreground text-xs">
            <span className="text-emerald-500">+2%</span> em relação ao mês
            passado
          </p>
        </main>
      </div>
    </motion.section>
  );
}
