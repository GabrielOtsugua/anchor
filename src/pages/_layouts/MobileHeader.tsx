import {
  Anchor,
  Home,
  LogOut,
  Menu,
  Store,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ModeToggle } from "../../components/ui/mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { useContext } from "react";
import { userContext } from "@/contexts/UserContext";
import { Separator } from "../../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MobileHeader() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { logOut } = useContext(userContext);
  const { userFormData } = useContext(userContext);

  return (
    <header className="flex lg:hidden justify-between items-center py-2 px-4 xl:w-[90%] 2xl:w-[60%] m-auto">
      <nav className="flex gap-4 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>

          <SheetContent side={"left"} className="rounded-e-lg">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-start">Navegação</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4">
              <SheetClose
                onClick={() => navigate("/dashboard")}
                data-pathname={pathname === "/dashboard"}
                className="flex gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
              >
                <Home className="w-4" />
                <p>Dashboard</p>
              </SheetClose>

              <SheetClose
                onClick={() => navigate("/orders")}
                data-pathname={pathname === "/orders"}
                className="flex gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
              >
                <UtensilsCrossed className="w-4" />
                <p>Pedidos</p>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <span className="border-r h-5" />

        <Anchor className="text-primary" />
      </nav>

      <nav className="flex items-center gap-2">
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <User />
          </SheetTrigger>

          <SheetContent className="rounded-s-lg">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-start">Perfil</SheetTitle>
              <SheetDescription className="text-start text-foreground">
                pizza.shop
              </SheetDescription>
              <SheetDescription className="flex pt-2">
                <Avatar className="mr-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    {userFormData?.userName.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <span>
                  <p className="font-light text-start">
                    {userFormData?.userName[0]
                      .toUpperCase()
                      .concat(userFormData?.userName.slice(1))}
                  </p>
                  <p className="text-xs mb-3 font-light">
                    {userFormData?.userName.toLowerCase()}@pizzashop.com
                  </p>
                </span>
              </SheetDescription>
            </SheetHeader>

            <Separator className="my-4" />

            <div className="flex flex-col gap-4">
              <SheetClose
                onClick={() => navigate("/profile")}
                data-pathname={pathname === "/profile"}
                className="flex gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
              >
                <User className="w-4" />
                <p>Perfil</p>
              </SheetClose>

              <SheetClose
                onClick={() => navigate("/store")}
                data-pathname={pathname === "/store"}
                className="flex gap-2 text-muted-foreground data-[pathname=true]:text-foreground"
              >
                <Store className="w-4" />
                <p>Comércio</p>
              </SheetClose>

              {/* <Separator className="my-4" /> */}

              <SheetClose
                onClick={() => logOut(navigate)}
                className="flex gap-2 text-muted-foreground active:text-foreground"
              >
                <LogOut className="w-4" />
                <p>Sair</p>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
