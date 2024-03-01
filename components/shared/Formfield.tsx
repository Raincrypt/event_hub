import React, { ReactNode } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";

interface IFormfield {
  form: UseFormReturn;
  name: string;
  children: ReactNode;
}

const Formfield = ({ form, name, children }: IFormfield) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            {children}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Formfield;
