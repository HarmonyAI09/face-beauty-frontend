import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";
import { useContext } from "react";
import { UserContext } from "../../pages/home";
import { OneProfile } from "../../class/Profile";

const Gender = () => {
  let genderList = ["Female", "Male"];
  const { setGender } = useContext(UserContext);
  const { oneProfile, setOneProfile } = useContext(UserContext);
  const handleGenderChange = (index) => {
    setGender(genderList[index]);
    const tempProfile = new OneProfile();
    tempProfile.copy(oneProfile);
    tempProfile.gender = genderList[index];
    setOneProfile(tempProfile);
  };
  return (
    <Segment title="Gender">
      <RadioGroup>
        {genderList.map((gender, index) => (
          <Radio
            key={index}
            label={gender}
            checked={oneProfile.gender === gender}
            onChange={() => handleGenderChange(index)}
            disabled={!oneProfile.isNew}
          />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Gender;
