import React from "react";
import { useState } from "react";
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
import { useAuth } from "@/authProvider";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuth, login } = useAuth();
  const navigate = useNavigate();

  if (isAuth) navigate("/home");

  const [formData, setFormData] = useState({
    data: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    try {
      // const response = await api.post("/auth/login", {
      //   data: formData.data,
      //   password: formData.password,
      // });
      login(formData);
      console.log("Response Data: ", response.data);

      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Log In</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="data">Username or Email</Label>
              <Input
                id="data"
                placeholder="johndoe or john@example.com"
                required
                value={formData.data}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="text-primary text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer border border-zinc-200 bg-zinc-200 text-black transition-colors duration-300 hover:border-zinc-800 hover:bg-zinc-800 hover:text-white active:border-zinc-200 active:bg-zinc-200 active:text-black"
            >
              Log In
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-muted-foreground text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
