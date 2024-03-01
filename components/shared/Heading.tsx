interface IHeading {
  heading: string;
}

const Heading = ({ heading }: IHeading) => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">{heading}</h3>
    </section>
  );
};

export default Heading;
