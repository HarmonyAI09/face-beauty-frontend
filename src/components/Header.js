import { Image } from "@fluentui/react-components";

const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#6e2a65",
    color: "white",
    minWidth:"546px",
};

function Header() {
    return (
        <>
            <div style={wrapperStyle}>
                <Image src="images/left.jpg" height={100}></Image>
                <Image src="images/middle.jpg" height={100}></Image>
                <Image src="images/right.jpg" height={100}></Image>
            </div>
        </>
    );
}

export default Header;