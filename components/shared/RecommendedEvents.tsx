import React from "react";
import Collection from "./Collection";
import { IEvent } from "@/lib/database/models/event.model";

interface IRecommendedEvents {
  data: IEvent[];
  page: number | string;
  totalPages?: number;
}

const RecommendedEvents = ({ data, page, totalPages }: IRecommendedEvents) => {
  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Related Events</h2>

      <Collection
        data={data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={3}
        page={page}
        totalPages={totalPages}
      />
    </section>
  );
};

export default RecommendedEvents;
