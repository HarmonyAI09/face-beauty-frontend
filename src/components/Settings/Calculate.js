import { ScoreAlert } from "../MarkShowDialog";
import Segment from "../Segment";
import "./Calculate.css";

const Calculator = () => {
  let calculatorList = ["Total", "Front", "Side"];
  return (
    <Segment title="Calculator">
      <div className="calculator_container">
        {calculatorList.map((calculator, index) => (
          <ScoreAlert key={index} title={calculator} />
        ))}
      </div>
    </Segment>
  );
};

export default Calculator;
