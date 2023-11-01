import { Image } from "@fluentui/react-components";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@fluentui/react-components";
// import { AccordionTitle, AccordionContent } from "@fluentui/react-components";
import {
    makeStyles,
    shorthands,
} from "@fluentui/react-components";
import {
    Card,
    CardPreview,
} from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "1024px",
        maxWidth: "100%",
        height:"100%",
    },
});

function Community() {
    const styles = useStyles();
    const faqData = [
        {
            question: "What photo quality is required to upload?",
            answer:
                `<p>When selecting a photo, you should consider a few factors. The example photos in the actual Harmony calculator meet all of these criteria. You can bypass these considerations if you’d like, but your results may not be accurate.</p>
                <ol>
                <li><p>Photo distortion: Being too close to your camera can warp your features and drastically alter your score, usually for the worse. A 26mm camera lens (minimum on most phones) should be fine assuming you stand back about 3-6 feet and use a self-timer. I would generally caution against using selfies.</p>
                
                <p>The best camera lenses to ensure maximum accuracy are about 85mm or above, but it does not make that much of a difference. Usually zooming into a mirror with your phone's back camera and taking a photo or using the self timer erases over 90% of lens distortion.</p></li>
                
                <li><p>Photo quality: The photo quality is important because we don’t want to make the landmark detection harder than it has to be. Blurry photos can lead to imprecise landmark placement which will throw off your score. </p>
                
                <p>Generally anything with normal to high resolution, as well as images that are not too small will be fine. The better the image quality the more accurate the results – although the difference will be negligible if the image is at least of decent quality.</p></li>
                
                <li><p>Head position: The positioning of your face will affect your score. The two things to account for are quite simple. The first is to make sure your face is turned fully to the front and side for each respective profile. In other words, your front photo should not be turned slightly to the side. Your side profile should not be slightly turned to the front. Your front photo should be facing completely forward and your side photo should be facing completely to the side.</p>
                
                <p>The next point is to make sure your face is not tilted up or down. In other words, your face should not be pointed at the ceiling or the floor. To remember these two, just think of your head position as four dimensions or directions: left, right, up, down. Your head should be neutrally positioned.</p></li>
                </ol>`,
        },
        {
            question: "What does my harmony score mean?",
            answer: `<p>Your harmony score is a summary of how pleasantly positioned your features are. Attractive faces have more mathematically normalized proportions, angles, and features; this is because abnormal features usually signal unideal facial growth patterns.</p>
            
            <p>You can think of your harmony score as a rating of your face’s baseline, or foundation. It is how attractive the blank canvas of your face is; it mainly assesses your bone structure, but also your soft tissue to some degree as well (e.g., lips).</p>
            
            <p>Your harmony score does not factor in things like your skin color, hair color, blemishes, acne, or anything superficial. Those features sit on top of your face’s baseline and they certainly do affect facial attractiveness; Harmony does not factor those in for now. An example would be if you submitted a photo with long hair vs. short hair – your harmony score should be the exact same if the photo is taken under the same conditions. However, you may look better with longer hair. </p>
            
            <p>Usually your harmony score will be tightly correlated to your overall facial attractiveness, but this may not always be the case. For example, if you have severe acne or lacking eyebrows, your perceived attractiveness may be lower than your harmony score.</p>
            
            <p>Your harmony score follows a normal distribution of rarity – you will find an associated rarity with each score. Getting above a 90% is exceedingly rare and most people lie between a 35-65% harmony score. This rarity is not entirely accurate, but it serves as a general guide to grasp what an 80% harmony score means. Without this reference, the score becomes arbitrary unless you compare faces yourself.</p>
            `,
        },
        {
            question: "How will the information in the Harmony report help me?",
            answer: `<p>Whether the information in the harmony report will be helpful or not is entirely dependent on the user. If you want to see a detailed breakdown of your face for fun, the information may not provide as much utility. That is still a perfectly viable way to use Harmony.</p>

            <p>However, this information can also be helpful in a clinical setting. You or your cosmetic surgeon can alter features through Photoshop; you may then compare the harmony score before and after to see if a given operation will yield an overall positive result to your appearance. Remember that changing one feature does not always affect your face in isolation; making your nose smaller can throw off your overall facial balance in ways you may not anticipate. This is where Harmony comes in. </p>
            
            <p>You can use the information in your report to help plan the best course of action for your facial cosmetic operation. This would require the paid version of Harmony to be able to identify which facial assessments are changing and to what degree. The professional subscription will provide the most value for users planning to get facial cosmetic surgery.</p>
            `,
        },
    ];
    return (
        <div style={{ width: "100%"}}>
            <Card className={styles.card}>
                <CardPreview style={{ padding: "20px" }}>
                    <div style={{backgroundColor: "white" }}>
                        <h1 style={{ textAlign: "center", fontSize: "72px", color: "darkslategrey" }}><b>FAQs</b></h1>
                        <Accordion single>
                            {faqData.map((faq, index) => (
                                <AccordionItem key={index} value={`faq${index}`}>
                                    <AccordionHeader as="h2">
                                        <div style={{ color: "darkslategrey", fontSize: "16px" }}>
                                            <b>{faq.question}</b>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionPanel>
                                        <div style={{ color: "darkslategrey", fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    </AccordionPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </CardPreview>
            </Card>
        </div>
    );
}

export default Community;