import {
  ChevronDown,
  Home,
  LogOut,
  Menu,
  Pizza,
  Store,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "recharts";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function MobileHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex lg:hidden justify-between items-center py-2 px-4 xl:w-[90%] 2xl:w-[60%] m-auto">
      <nav className="flex gap-4 items-center">
        <Pizza />

        <span className="border-r h-5" />
      </nav>

      <nav className="flex items-center gap-2">
        <ModeToggle />

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild className="shadow-sm">
            <Button variant="outline">
              pizza.shop <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel>pizza.shop</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex justify-start cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>
                  <p>Gabriel Augusto</p>
                  <p className="text-xs">gabriel.augusto@pizzashop.com</p>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Store className="mr-2 h-4 w-4" />
                <span>Perfil da loja</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/home")}
                className="cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu> */}

        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>

          <SheetContent className="flex flex-col gap-6">
            <SheetHeader className="text-start">
              <SheetTitle>Navegação</SheetTitle>
              <SheetDescription>Páginas pizza.shop</SheetDescription>

              <div className="flex gap-8">
                <Link
                  to="/"
                  data-pathname={pathname === "/"}
                  className="flex gap-1 items-center text-muted-foreground data-[pathname=true]:text-accent-foreground hover:text-accent-foreground"
                >
                  <Home className="w-4 h-4" /> Inicio
                </Link>

                <Link
                  to="/orders"
                  data-pathname={pathname === "/orders"}
                  className="flex gap-1 items-center text-muted-foreground data-[pathname=true]:text-accent-foreground hover:text-accent-foreground"
                >
                  <UtensilsCrossed className="w-4 h-4" /> Pedidos
                </Link>
              </div>
            </SheetHeader>

            <Separator className="border-b" />

            <SheetHeader className="text-start">
              <SheetTitle>Meu perfil</SheetTitle>
              <SheetDescription>Informações e detalhes</SheetDescription>

              <div className="">
                <p>Gabriel Augusto</p>
                <p className="text-muted-foreground text-sm">
                  gabriel.augusto@pizzashop.com
                </p>
              </div>
            </SheetHeader>

            <Separator className="border-b" />

            <SheetHeader className="text-start">
              <SheetTitle>Perfil da loja</SheetTitle>
              <SheetDescription>Informações e detalhes</SheetDescription>
              <div>
                <Button>Ver perfil da loja</Button>
              </div>
            </SheetHeader>

            <Separator className="border-b" />

            <SheetFooter>
              <div className="text-end">
                <Button type="submit" onClick={() => navigate("/home")}>
                  Sair
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
