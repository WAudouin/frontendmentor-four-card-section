import "./App.css";
import Card from "./components/Card";

const cards = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    className: "md:row-span-2 md:col-start-2",
    icon: "magn-glass",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    className: "md:row-span-2 md:col-start-2 md:row-start-3",
    icon: "web-home",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    className: "md:row-span-2 md:col-start-1 md:row-start-2",
    icon: "lighbulb",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    className: "md:row-span-2 md:col-start-3 md:row-start-2",
    icon: "comput-screen",
  },
];

const App = () => {
  return (
    <main className="text-grey w-full flex flex-col gap-16">
      <header className="flex flex-col items-center gap-4">
        <section className="flex flex-col gap-2">
          <h1 className="font-extralight text-4xl">
            Reliable, efficient delivery
          </h1>
          <h2 className="font-semibold text-4xl">Powered by Technology</h2>
        </section>
        <p className="font-sm max-w-[540px]">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="grid  grid-rows-4 grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {cards.map((c) => (
          <Card
            title={c.title}
            description={c.description}
            icon={c.icon}
            className={c.className}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
