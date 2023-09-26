import { Switch, Radio, RadioGroup, Divider } from "@fluentui/react-components";

function Setting() {
    return (
        <>
            <div style={{width:"100%"}}>
                <div style={{ height: "30px", width: "100%", backgroundColor: "#4e224a", color: "#9e4595", fontSize: "16px", display: "flex", alignItems: "center", paddingLeft: "10px" }}>Setting</div>
                <Divider style={{ padding: "8px", color: "purple" }}>Gender</Divider>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Female
                    <Switch style={{}}></Switch>
                    Male
                </div>
                <Divider style={{ padding: "8px", color: "purple" }}>Ethnicities / Racial</Divider>
                <div>
                    <RadioGroup style={{ display: "contents" }}>
                        <Radio value="his&latino" label="Hispanic, Latino American" />
                        <Radio value="white" label="White" />
                        <Radio value="american indian" label="American Indian" />
                        <Radio value="asian american" label="Asian American" />
                        <Radio value="african american" label="African American" />
                        <Radio value="alaska" label="Alaska Native" />
                        <Radio value="american" label="American" />
                        <Radio value="asian" label="Asian" />
                        <Radio value="black" label="Black" />
                        <Radio value="other" label="Other" />
                    </RadioGroup>
                </div>
                <Divider style={{ padding: "8px", color: "purple" }}>Mode</Divider>
                <div>
                    <RadioGroup>
                        <Radio value="manual" label="Input your own measurements." />
                        <Radio value="map" label="Map facial landmarks yourself." />
                        <Radio value="auto" label="Calculate measurements with AI." />
                    </RadioGroup>
                </div>
            </div>
        </>
    );
}

export default Setting;