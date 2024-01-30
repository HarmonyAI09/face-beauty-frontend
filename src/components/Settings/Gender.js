import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";

const Gender = () => {
  let genderList = ["Female", "Male"];
  const handleGenderChange = (index) => {
    sessionStorage.setItem("gender", genderList[index]);
  };
  return (
    <Segment title="Gender">
      <RadioGroup>
        {genderList.map((gender, index) => (
          <Radio key={index} label={gender} onChange={() => handleGenderChange(index)} />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Gender;