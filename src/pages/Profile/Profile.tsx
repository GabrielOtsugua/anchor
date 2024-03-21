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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { userContext } from "@/contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface NewName {
  newName: string;
}

export function Profile() {
  const navigate = useNavigate();

  const { userFormData } = useContext(userContext);
  const { register, handleSubmit, watch } = useForm<NewName>();
  const { changeProfileName } = useContext(userContext);

  return (
    <div className="flex justify-center items-center mt-48">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Tabs defaultValue="profile" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="business">Comércio</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Perfil</CardTitle>
                <CardDescription>
                  Altere seu nome de usuário aqui.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Nome atual</Label>
                  <Input
                    disabled
                    id="name"
                    defaultValue={userFormData?.userName[0]
                      .toUpperCase()
                      .concat(userFormData?.userName.slice(1))}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Novo nome</Label>
                  <Input placeholder="Seu novo nome" {...register("newName")} />
                  <p className="text-muted-foreground text-xs">
                    Deve conter no mínimo 3 letras e ser diferente do anterior.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={
                    watch().newName
                      ? watch().newName.length < 3 ||
                        watch().newName === userFormData?.userName
                      : true
                  }
                  onClick={handleSubmit((data) =>
                    changeProfileName(data.newName, navigate)
                  )}
                >
                  Salvar alterações
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle>Comércio</CardTitle>
                <CardDescription>
                  Disponível apenas aos usuários{" "}
                  <span className="text-primary">Premium</span>.
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
