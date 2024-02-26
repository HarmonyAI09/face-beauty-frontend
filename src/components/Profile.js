import { ArrowUploadFilled } from "@fluentui/react-icons";
import { Image, CompoundButton } from "@fluentui/react-components";
import { useState, useRef } from "react";

function Profile() {
    const frontfileInput = useRef(null);
    const sidefileInput = useRef(null);
    const [selectedFrontImage, setSelectedFrontImage] = useState(null);
    const [selectedSideImage, setSelectedSideImage] = useState(null);
    const [lock, setLock] = useState(false);


    const handleFrontImageSelect = (event) => {
        setSelectedFrontImage(event.target.files[0]);
    };

    const handleSideImageSelect = (event) => {
        setSelectedSideImage(event.target.files[0]);
    };

    const handleFrontUploadButtonClick = () => {
        frontfileInput.current.click();
    };

    const handleSideUploadButtonClick = () => {
        sidefileInput.current.click();
    };

    function startMarquee1() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[0];
        marqueeContent.classList.add('marquee');
    }

    function stopMarquee1() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[0];
        marqueeContent.classList.remove('marquee');
    }

    function startMarquee2() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[1];
        marqueeContent.classList.add('marquee');
    }

    function stopMarquee2() {
        const marqueeContent = document.querySelectorAll('.marquee-content')[1];
        marqueeContent.classList.remove('marquee');
    }

    const unavailableAreaInHandle = () => {
        setLock(true);
    };

    const unavailableAreaOutHandle = () => {
        setLock(false);
    };


    return (
        <>
            <div style={{ width:"100%", backgroundColor: "#ebd9e9", justifyContent: "space-between", display: "flex", flexDirection: "column", minWidth: "1270px" }}>
                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ display: "flex", width: "50%", justifyContent: "space-between" }}>
                        <div style={{ border: "solid 1px #1565c0", width: "300px" }}>
                            <div style={{ height: "30px", backgroundColor: "#7e3777", color: "#d8b5d5", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                Front Profile
                            </div>
                            <div className="custom-scroll" style={{ padding: "7px", color: "#1565c0" }}>
                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Eye Separation Ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name" style={{ width: "130px" }}>&nbsp;&nbsp;Facial Thirds :&nbsp;</div>
                                    <input type="text" class="badge-input" />&nbsp;
                                    <input type="text" class="badge-input" />&nbsp;
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Cheekbone height:&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Bigonial width :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Neck width :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Bitemporal width :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-percent"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Lower third proportion :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;%
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Deviation of IAA & JFA :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Eyebrow tilt :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Ipsilateral alar angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Medial canthal angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Lateral Canthal Tilt :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Jaw frontal angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Facial W-H ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Total facial W-H ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Chin to Philtrum ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;MouthW - NoseW ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Midface ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Eyebrow position ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Eye spacing ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Eye aspect ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;LowerLip - UpperLip ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>


                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: "310px", height: "310px", margin: "5px", border: "solid 1px #1565c0" }}>
                                <Image width={300} height={300} style={{ margin: "5px" }} src="./images/front.jpg"></Image>
                            </div>
                            <div style={{ position: "relative", width: "310px", height: "310px", margin: "5px", border: "solid 1px #1565c0" }}>
                                <input type="file" ref={frontfileInput} accept="image/*" onChange={handleFrontImageSelect} style={{ display: 'none' }} />
                                <CompoundButton icon={<ArrowUploadFilled />} style={{
                                    position: "absolute",
                                    top: "1%",
                                    right: "1%",
                                    color: "#1565c0",
                                }} onClick={handleFrontUploadButtonClick}>
                                </CompoundButton>
                                {selectedFrontImage && (<Image width={300} height={300} style={{ margin: "5px" }} src={URL.createObjectURL(selectedFrontImage)}></Image>)}
                                {!selectedFrontImage && (<Image width={300} height={300} style={{ margin: "5px" }} src={"./images/front_blank.jpg"}></Image>)}
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "relative", display: "flex", width: "50%", justifyContent: "space-between" }} onMouseOver={unavailableAreaInHandle} onMouseOut={unavailableAreaOutHandle}>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: "310px", height: "310px", margin: "5px", border: "solid 1px #1565c0" }}>
                                <Image width={300} height={300} style={{ margin: "5px" }} src="./images/side.jpg"></Image>
                            </div>
                            <div style={{ position: "relative", width: "310px", height: "310px", margin: "5px", border: "solid 1px #1565c0" }}>
                                <input type="file" ref={sidefileInput} accept="image/*" onChange={handleSideImageSelect} style={{ display: 'none' }} />
                                {selectedSideImage && (<Image width={300} height={300} style={{ margin: "5px" }} src={URL.createObjectURL(selectedSideImage)}></Image>)}
                                {!selectedSideImage && (<Image width={300} height={300} style={{ margin: "5px" }} src={"./images/side_blank.jpg"}></Image>)}
                                <CompoundButton icon={<ArrowUploadFilled />} style={{
                                    position: "absolute",
                                    top: "1%",
                                    right: "1%",
                                    color: "#1565c0",
                                }} onClick={handleSideUploadButtonClick}>
                                </CompoundButton>
                            </div>
                        </div>
                        <div style={{ border: "solid 1px #1565c0", width: "300px" }}>
                            <div style={{ height: "30px", backgroundColor: "#7e3777", color: "#d8b5d5", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>Side Profile</div>
                            <div className="custom-scroll" style={{ padding: "7px", color: "#1565c0" }}>
                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Gonial angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasofrontal angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Mandibular plane angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Facial convexity ( glabella ) :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Submental cervical angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasofacial angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasolabial angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Total facial convexity :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Mentolabial angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Facial convexity ( nasion ) :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasomental angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Browridge inclination angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-rotate-right"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasal tip angle :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;&deg;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Ramus to Mandible ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasal projection :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-compass-drafting"></i>
                                    <div className="measurement-name">&nbsp;&nbsp;Nasal W-H ratio :&nbsp;</div>
                                    <input type="text" class="badge-input" />
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Orbital vector :&nbsp;</div>
                                    <div class="badge-dropdown">
                                        <select>
                                            <option value="option1">Positive</option>
                                            <option value="option2">Slightly Positive</option>
                                            <option value="option3">Neutral</option>
                                            <option value="option4">Slightly Negative</option>
                                            <option value="option5">Negative</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Ricketts' E line :&nbsp;</div>
                                    <div class="badge-dropdown">
                                        <select>
                                            <option value="option1">Ideal</option>
                                            <option value="option2">Near ideal</option>
                                            <option value="option3">Unideal</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Holdaway H line :&nbsp;</div>
                                    <div class="badge-dropdown">
                                        <select>
                                            <option value="option1">Ideal</option>
                                            <option value="option2">Near ideal</option>
                                            <option value="option3">Unideal</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Steiner S line :&nbsp;</div>
                                    <div class="badge-dropdown">
                                        <select>
                                            <option value="option1">Ideal</option>
                                            <option value="option2">Near ideal</option>
                                            <option value="option3">Unideal</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <div className="measurement-name" style={{ width: "150px" }}>&nbsp;&nbsp;Burstone line :&nbsp;</div>
                                    <div class="badge-dropdown">
                                        <select>
                                            <option value="option1">Ideal</option>
                                            <option value="option2">Near ideal</option>
                                            <option value="option3">Unideal</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    &nbsp;&nbsp;
                                    <div class="marquee-container" onMouseOver={startMarquee1} onMouseOut={stopMarquee1}>
                                        <div class="marquee-content">
                                            Gonion to mouth relationship
                                        </div>
                                    </div>
                                    &nbsp;:&nbsp;
                                    <div class="badge-dropdown" style={{ width: "100px" }}>
                                        <select>
                                            <option value="option1">Below</option>
                                            <option value="option2">In line</option>
                                            <option value="option3">Above</option>
                                            <option value="option4">Notably above</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>

                                <div className="measurement-div">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    &nbsp;&nbsp;
                                    <div class="marquee-container" onMouseOver={startMarquee2} onMouseOut={stopMarquee2}>
                                        <div class="marquee-content">
                                            Recession relative to frankfort plane
                                        </div>
                                    </div>
                                    &nbsp;:&nbsp;
                                    <div class="badge-dropdown" style={{ width: "100px" }}>
                                        <select>
                                            <option value="option1">None</option>
                                            <option value="option2">Slight</option>
                                            <option value="option3">Moderate</option>
                                            <option value="option4">Extreme</option>
                                        </select>
                                    </div>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        {/* {lock && (<div className="lock-div" style={{ position: "absolute", top: "0%", right: "0%", color: "#1565c0", height: "100%" }}>
                                <div style={{ margin: "10px", border: "dashed 2px #1565c0", height: "630px", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image src="./images/lock.png"></Image>
                                </div>
                            </div>
                            )} */}
                        <div className={`lock-div ${lock ? 'show' : ''}`} style={{ position: "absolute", top: "0%", right: "0%", color: "#1565c0", height: "100%" }}>
                            <div style={{ margin: "10px", border: "dashed 2px #1565c0", height: "630px", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image src="./images/lock.png"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;