import { MobileHeader } from "@/pages/_layouts/MobileHeader";
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
import { userContext } from "@/contexts/UserContext";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Anchor,
  ChevronDown,
  Home,
  LogOut,
  Store,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DefaultLeyout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userFormData, logOut } = useContext(userContext);

  return (
    <div className="">
      <header className="hidden lg:flex justify-between items-center py-2 px-4 xl:w-[90%] 2xl:w-[70%] m-auto">
        <nav className="flex gap-4 items-center">
          <Anchor className="text-primary" />

          <span className="border-r h-5" />

          <Link
            to="/dashboard"
            data-pathname={pathname === "/dashboard"}
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

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>pizza.shop</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <div className="flex items-center px-2">
                <Avatar className="mr-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span>
                  <p className="font-light">
                    {userFormData?.userName[0]
                      .toUpperCase()
                      .concat(userFormData?.userName.slice(1))}
                  </p>
                  <p className="text-xs mb-3 font-light">
                    {userFormData?.userName.toLowerCase()}@pizzashop.com
                  </p>
                </span>
              </div>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer"
                >
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <p>Perfil</p>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => navigate("store")}
                  className="cursor-pointer"
                >
                  <Store className="mr-2 h-4 w-4 text-primary" />
                  <span>Hero da loja</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => logOut(navigate)}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4 text-primary" />
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
