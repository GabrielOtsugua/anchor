import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pizza } from "lucide-react";

export function Home() {
  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex flex-col justify-between p-8 border-r bg-muted">
        <div className="max-w-36 flex gap-3 hover:translate-x-4 duration-500 cursor-default">
          <Pizza />
          <h1 className="text-xl font-medium">pizza.shop</h1>
        </div>

        <footer>
          <p className="text-sm text-muted-foreground">
            Página inicial &copy; pizza.shop - 2024
          </p>
        </footer>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Card className="w-[95%] md:w-[70%] xl:w-[50%] lg:w-[70%] border-0 shadow-none animate-move_down">
          <CardHeader className="text-center">
            <CardTitle>Acessar dashboard</CardTitle>
            <CardDescription>
              Acesse o dashboard inserindo seu nome
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Acessar</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
