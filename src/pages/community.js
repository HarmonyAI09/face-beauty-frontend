import { Image } from "@fluentui/react-components";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@fluentui/react-components";
// import { AccordionTitle, AccordionContent } from "@fluentui/react-components";

function Community() {
    const faqData = [
        {
            question: "What's the difference between 32-bit and 64-bit versions of Windows?",
            answer:
                "The terms 32-bit and 64-bit refer to the way a computer's processor (also called a CPU) handles information. The 64-bit version of Windows handles large amounts of random access memory (RAM) more effectively than a 32-bit system. Not all devices can run the 64-bit versions of Windows.",
        },
        {
            question: "Question 2",
            answer: "Answer 2",
        },
        {
            question: "Question 3",
            answer: "Answer 3",
        },
        {
            question: "Question 3",
            answer: "Answer 3",
        },
        {
            question: "Question 3",
            answer: "Answer 3",
        },
        {
            question: "Question 3",
            answer: "Answer 3",
        },
        {
            question: "Question 3",
            answer: "Answer 3",
        },
    ];
    return (
        <div>
            <Image src="./images/community.png" />
            <div style={{ padding: "20px", backgroundColor: "white" }}>
                <h1>Frequently asked questions about Windows</h1>
                <Accordion single>
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`faq${index}`}>
                            <AccordionHeader as="h2">
                                <div>
                                    <b>{faq.question}</b>
                                </div>
                            </AccordionHeader>
                            <AccordionPanel>
                                <p>{faq.answer}</p>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default Community;