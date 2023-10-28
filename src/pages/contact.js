import Header from "../components/Header";
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { Text, Image } from "@fluentui/react-components";
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    shorthands,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    Divider,
    Input,
    Textarea
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "1024px",
        maxWidth: "100%",
    },
});

function Contact() {
    const styles = useStyles();
    return (
        <div style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px" }}>
            <Card className={styles.card}>
                <CardHeader
                    image={
                        <img
                            src={resolveAsset("avatar_elvia.svg")}
                            alt="Elvia Atkins avatar picture"
                        />
                    }
                    header={
                        <Body1>
                            <b>Contact US</b>
                        </Body1>
                    }
                    description={<Caption1>5h ago · Upgraded</Caption1>}
                ></CardHeader>

                <CardPreview style={{ padding: "20px" }}>
                    <div>
                        <div style={{ display: "flex"}}>
                            <Input placeholder="Name" />
                            <Input placeholder="Email *" type="email" />
                        </div>
                        <Input placeholder="Phone Number" />
                        <Textarea placeholder="Comment"></Textarea>
                    </div>
                </CardPreview>
            </Card>
        </div>
    );
}

export default Contact;