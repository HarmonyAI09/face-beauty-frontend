import GroupContainer from "./GroupContainer";
import Gender from "./Settings/Gender";
import Ethnicity from "./Settings/Ethnicity";
import Calculator from "./Settings/Calculate";
import Analyze from "./Settings/Report";

function Setting() {
    return (
        <GroupContainer title={"Setting"}>
            <Gender/>
            <Ethnicity/>
            <Calculator/>
            <Analyze/>
        </GroupContainer>
    );
}

export default Setting;