import CalculatorIcon from "../assets/img/icon-calculator.svg";
import KarmaIcon from "../assets/img/icon-karma.svg";
import SupervisorIcon from "../assets/img/icon-supervisor.svg";
import TeamBuilderIcon from "../assets/img/icon-team-builder.svg";

type CardProps = {
  className: string;
  title: string;
  description: string;
};

const Card = ({ className, title, description }: CardProps) => {
  const getIcon = () => {
    switch (title) {
      case "Team Builder":
        return <img src={TeamBuilderIcon} alt={title} />;
      case "Karma":
        return <img src={KarmaIcon} alt={title} />;
      case "Calculator":
        return <img src={CalculatorIcon} alt={title} />;
      default:
        return <img src={SupervisorIcon} alt={title} />;
    }
  };

  const getColor = () => {
    switch (title) {
      case "Team Builder":
        return "border-t-clay";
      case "Karma":
        return "border-t-yellow";
      case "Calculator":
        return "border-t-blue";
      default:
        return "border-t-cyan";
    }
  };

  return (
    <section
      className={`${className} shadow-lg rounded-xl text-left overflow-hidden hover:scale-105 duration-150`}
    >
      <div className={`flex flex-col p-8  gap-3 border-t-4 ${getColor()}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-normal text-grey">{description}</p>
        <span className="ml-auto mt-7">{getIcon()}</span>
      </div>
    </section>
  );
};

export default Card;
