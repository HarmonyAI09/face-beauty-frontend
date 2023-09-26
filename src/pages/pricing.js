import Header from "../components/Header";
import { Label, Divider, Image, CompoundButton } from "@fluentui/react-components";
import "./pricing.css";

function Pricing() {
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems:"center" }}>
                <div style={{ width: "400px", position: "relative", height: "100%", backgroundColor: "white", margin: "30px" }}>
                    <div style={{ backgroundColor: "white", height: "600px", border: "2px solid purple" }}>
                        <div style={{ height: "30px", backgroundColor: "#4e224a", color: "#d8b5d5", width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>BASIC</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "24px", color: "purple" }}>Default(free)</div>
                        <Divider style={{ paddingLeft: "30px", paddingRight: "30px" }}></Divider>
                        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Full harmony score</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Access to our community</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Best and worst feature breakdown</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Celebrity score match</Label>
                                <Divider></Divider>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", bottom: "40px", left: "40px" }}>
                            <Image width={300} src="./images/usingmark.png"></Image>
                        </div>
                    </div>
                </div>
                <div style={{ width: "400px", position: "relative", height: "100%", backgroundColor: "white", margin: "30px" }}>
                    
                    <div style={{ backgroundColor: "white", height: "600px", border: "2px solid purple" }}>
                        <div style={{ height: "30px", backgroundColor: "#4e224a", color: "#d8b5d5", width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>Premium</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "24px", color: "purple" }}>$24.99/Month</div>
                        <Divider style={{ paddingLeft: "30px", paddingRight: "30px" }}></Divider>
                        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Full harmony score</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Full 50+ pages auto-generated report on your face</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>(over $200 of value in a single report)</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>45+ facial assessments</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Explanation</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Advice where applicable</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Access to our community</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Celebrity score match</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Up to 5 saved reports at a time</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Cross-platform access to subscription</Label>
                            </div>
                        </div>
                        <Divider style={{ paddingLeft: "30px", paddingRight: "30px" }}></Divider>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "24px", color: "purple" }}>OR 30% off</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "32px", color: "purple" }}>$99.99/Year</div>
                    </div>
                    <Image src="./images/bookmark.png" width={40} style={{position:"absolute", right:"0px", top:"-13px"}}></Image>
                </div>
                <div style={{ width: "400px", height: "100%", backgroundColor: "white", margin: "30px" }}>
                    <div style={{ backgroundColor: "white", height: "700px", border: "2px solid purple" }}>
                        <div style={{ height: "30px", backgroundColor: "#4e224a", color: "#d8b5d5", width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>Professional</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "24px", color: "purple" }}>$35.99/Month</div>
                        <Divider style={{ paddingLeft: "30px", paddingRight: "30px" }}></Divider>
                        <div style={{ marginLeft: "40px", marginRight: "40px" }}>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Full harmony score</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Full 50+ pages auto-generated report on your face</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>(over $200 of value in a single report)</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>45+ facial assessments</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Explanation</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "white", padding: "10px" }}> </i>
                                <i className="fa-solid fa-check" style={{ color: "purple", paddingRight: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Advice where applicable</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Access to our community</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Celebrity score match</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Up to 5 saved reports at a time</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Cross-platform access to subscription</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>"Idealize" : AI-gen beauty simulation</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>"Professional" : profile badge</Label>
                                <Divider></Divider>
                            </div>
                            <div>
                                <i className="fa-solid fa-check" style={{ color: "purple", padding: "10px" }}> </i>
                                <Label size="small" style={{ color: "purple" }}>Early access to newly developed features</Label>
                            </div>
                        </div>
                        <Divider style={{ paddingLeft: "30px", paddingRight: "30px" }}></Divider>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "24px", color: "purple" }}>OR 35% off</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "60px", fontSize: "32px", color: "purple" }}>$124.99/Year</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;