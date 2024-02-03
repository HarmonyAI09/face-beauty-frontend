import { Radio, RadioGroup } from "@fluentui/react-components";
import Segment from "../Segment";
import { useContext } from "react";
import { UserContext } from "../../pages/home";

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
  const { oneProfile, setOneProfile } =useContext(UserContext);
  const handleEthnicityChange = (index) => {
    setEthnicity(raceList[index]);
    oneProfile.race = raceList[index];
    setOneProfile(oneProfile);
  };
  return (
    <Segment title="Ethnicity/Race">
      <RadioGroup>
        {raceList.map((ethnicity, index) => (
          <Radio
            key={index}
            label={ethnicity}
            onChange={() => handleEthnicityChange(index)}
          />
        ))}
      </RadioGroup>
    </Segment>
  );
};

export default Ethnicity;
