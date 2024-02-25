import React from "react";
import CategoryFilter from "./shared/CategoryFilter";
import Collection from "./shared/Collection";
import Search from "./shared/Search";

const EventsSection = () => {
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">
        Trust by <br /> Thousands of Events
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Search />
        <CategoryFilter />
      </div>

      <Collection />
    </section>
  );
};

export default EventsSection;
