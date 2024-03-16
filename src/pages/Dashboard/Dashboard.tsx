import { Grafics } from "./components/Grafics";
import { Informations } from "./components/Informations";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold animate-fade">Dashboard</h1>

      <Informations />

      <Grafics />
    </div>
  );
}
