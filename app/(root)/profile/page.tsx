import Collection from "@/components/shared/Collection";
import HeadingWithButton from "@/components/shared/HeadingWithButton";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  return (
    <>
      {/* My Tickets */}
      <HeadingWithButton
        heading="My Tickets"
        buttonText="Explore more Events"
      />

      <section className="wrapper my-8">
        {/* <Collection
          data={orderedEvents}
          totalPages={orders?.totalPages}
          page={ordersPage}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          urlParamName="ordersPage"
        /> */}
      </section>

      {/* Events Organized */}
      <HeadingWithButton
        heading="Events Organized"
        buttonText="Create New Events"
      />

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          page={eventsPage}
          totalPages={organizedEvents?.totalPages}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          urlParamName="eventsPage"
        />
      </section>
    </>
  );
};

export default page;
