import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Toast, ToastProvider } from "@/components/ui/toast";
import { InputForm } from "./form";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="max-w-md mx-auto mt-10">
          <ToastProvider>
            <InputForm />
          </ToastProvider>
        </div>
      </div>
    </main>
  );
}
