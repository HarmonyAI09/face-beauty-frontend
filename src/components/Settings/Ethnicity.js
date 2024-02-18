import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";
import { useContext } from "react";
import { UserContext } from "../../pages/home";
import { OneProfile } from "../../class/Profile";

const Ethnicity = () => {
  let raceList = [
    "Caucasian",
    "African",
    "East Asian",
    "South Asian",
    "Hispanic",
    "Middle Eastern",
    "Other",
  ];
  const { setEthnicity } = useContext(UserContext);
  const { oneProfile, setOneProfile } = useContext(UserContext);
  const handleEthnicityChange = (index) => {
    setEthnicity(raceList[index]);
    const tempProfile = new OneProfile();
    tempProfile.copy(oneProfile);
    tempProfile.race = raceList[index];
    setOneProfile(tempProfile);
  };
  return (
    <Segment title="Ethnicity/Race">
      <RadioGroup>
        {raceList.map((ethnicity, index) => (
          <Radio
            key={index}
            label={ethnicity}
            checked={oneProfile.race === ethnicity}
            onChange={() => handleEthnicityChange(index)}
            disabled={!oneProfile.isNew}
          />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Ethnicity;
