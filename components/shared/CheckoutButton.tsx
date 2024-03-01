import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  return (
    <div className="flex items-center gap-3">
      <Button asChild className="button rounded-full" size="lg">
        <Link href="/sign-in">Get Tickets</Link>
      </Button>
    </div>
  );
};

export default CheckoutButton;
