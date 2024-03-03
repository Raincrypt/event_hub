import EventForm from "@/components/shared/EventForm";
import Heading from "@/components/shared/Heading";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  return (
    <>
      <Heading heading="Update Event" />

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          userId={userId}
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
