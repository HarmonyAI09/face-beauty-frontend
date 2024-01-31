import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";
import Storage from "../../utils/storage";

const Ethnicity = () => {
  let ethnicityList = [
    "Caucasian",
    "African",
    "East Asian",
    "South Asian",
    "Hispanic",
    "Middle Eastern",
    "Other",
  ];
  const handleEthnicityChange = (index) => {
    Storage.setItem("ethnicity", ethnicityList[index]);
  };
  return (
    <Segment title="Ethnicity/Race">
      <RadioGroup>
        {ethnicityList.map((ethnicity, index) => (
          <Radio key={index} label={ethnicity} onChange={() => handleEthnicityChange(index)} />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Ethnicity;