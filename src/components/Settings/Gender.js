import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";
import { useContext } from "react";
import { UserContext } from "../../pages/home";

const Gender = () => {
  let genderList = ["Female", "Male"];
  const { setGender } = useContext(UserContext);
  const { oneProfile, setOneProfile } = useContext(UserContext);
  const handleGenderChange = (index) => {
    setGender(genderList[index]);
    setOneProfile({...oneProfile, gender: genderList[index]});
  };
  return (
    <Segment title="Gender">
      <RadioGroup>
        {genderList.map((gender, index) => (
          <Radio
            key={index}
            label={gender}
            onChange={() => handleGenderChange(index)}
          />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Gender;
