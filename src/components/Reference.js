import "@fortawesome/fontawesome-free/css/all.css";
import GroupContainer from "./GroupContainer";
import Requirements from "./Reference/Requirements";
import Notes from "./Reference/Notes";

function Reference() {
  return (
    <GroupContainer title={"Reference"}>
        <Requirements/>
        <Notes/>
    </GroupContainer>
  );
}

export default Reference;