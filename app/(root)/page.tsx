import EventsSection from "@/components/shared/EventsSection";
import Hero from "@/components/shared/Hero";
import { SearchParamProps } from "@/types";

export default function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  return (
    <>
      <Hero />
      <EventsSection page={page} searchText={searchText} category={category} />
    </>
  );
}
