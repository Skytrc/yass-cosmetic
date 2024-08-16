const CTABanner = (props: {
  title: string;
  description: string;
  highlights: string;
  buttons: React.ReactNode;
}) => (
  <div className="rounded-xl bg-[#00B0A5] px-6 py-10 text-center text-white">
    <h2 className="text-3xl font-bold">{props.title}</h2>

    <p className="mt-2 text-lg font-medium">{props.description}</p>

    <p className="mt-4 text-sm font-semibold">{props.highlights}</p>

    <div className="mt-6">{props.buttons}</div>
  </div>
);

export { CTABanner };
