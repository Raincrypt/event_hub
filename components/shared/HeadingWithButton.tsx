import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface IHeadingWithButton {
  heading: string;
  buttonText: string;
}

const HeadingWithButton = ({ heading, buttonText }: IHeadingWithButton) => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <div className="wrapper flex items-center justify-center sm:justify-between">
        <h3 className="h3-bold text-center sm:text-left">{heading}</h3>
        <Button asChild size="lg" className="button hidden sm:flex">
          <Link href="/#events">{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeadingWithButton;
