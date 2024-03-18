import { MobileHeader } from "@/components/MobileHeader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  Home,
  LogOut,
  Pizza,
  Store,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export function DefaultLeyout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="">
      <header className="hidden lg:flex justify-between items-center py-2 px-4 xl:w-[90%] 2xl:w-[70%] m-auto">
        <nav className="flex gap-4 items-center">
          <Pizza />

          <span className="border-r h-5" />

          <Link
            to="/"
            data-pathname={pathname === "/"}
            className="flex gap-1 items-center text-muted-foreground data-[pathname=true]:text-accent-foreground hover:text-accent-foreground"
          >
            <Home className="w-4 h-4" /> Início
          </Link>

          <Link
            to="/orders"
            data-pathname={pathname === "/orders"}
            className="flex gap-1 items-center text-muted-foreground data-[pathname=true]:text-accent-foreground hover:text-accent-foreground"
          >
            <UtensilsCrossed className="w-4 h-4" /> Pedidos
          </Link>
        </nav>

        <nav className="flex gap-2">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="shadow-sm">
              <Button variant="outline">
                pizza.shop <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="">
              <DropdownMenuLabel>pizza.shop</DropdownMenuLabel>
              <DropdownMenuLabel className="flex justify-start items-center">
                <User className="mr-2 h-4 w-4" />
                <span>
                  <p>Gabriel Augusto</p>
                  <p className="text-xs">gabriel.augusto@pizzashop.com</p>
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem></DropdownMenuItem>
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
          </DropdownMenu>
        </nav>
      </header>

      <MobileHeader />

      <Separator className="border-b" />

      <main className="py-8 px-4 xl:w-[90%] 2xl:w-[70%] m-auto">
        <Outlet />
      </main>
    </div>
  );
}
