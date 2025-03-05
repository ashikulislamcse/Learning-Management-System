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
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  // Input Change Handler
  const ChangeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "User Register Successfully..!");
    }
    if (registerError) {
      const errorMessage = registerError?.data?.message || "You are already registered";
      toast.error(errorMessage);
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "User Login Successfully..!");
    }
    if (loginError) {
      const errorMessage = loginError?.data?.message || "Email or Password Not Match";
      toast.error(errorMessage);
    }
  }, [
    loginData,
    registerData,
    registerError,
    registerIsSuccess,
    loginError,
    loginIsSuccess,
  ]);

  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger className="cursor-pointer" value="signup">
            Signup
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="login">
            Login
          </TabsTrigger>
        </TabsList>

        {/* Signup Form */}
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create a new account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  value={signupInput.name}
                  required
                  onChange={(e) => ChangeInputHandler(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInput.email}
                  required
                  onChange={(e) => ChangeInputHandler(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupInput.password}
                  required
                  onChange={(e) => ChangeInputHandler(e, "signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="cursor-pointer"
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Login Form */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Please enter your email and password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginInput.email}
                  required
                  onChange={(e) => ChangeInputHandler(e, "login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginInput.password}
                  required
                  onChange={(e) => ChangeInputHandler(e, "login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="cursor-pointer"
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    Wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
