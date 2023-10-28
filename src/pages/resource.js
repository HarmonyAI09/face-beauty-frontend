import * as React from "react";
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
    Divider
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

    return `${ASSET_URL}${asset}`;
};

const resourceList = [
    "https://e-aaps.org/journal/view.php?number=646",
    "https://www.sciencedirect.com/science/article/pii/S1015958416301798",
    "http://entclinic.al/the-perfect-nose-to-women/",
    "https://journals.lww.com/plasreconsurg/Abstract/2012/03000/Defining_the_Ideal_Nasolabial_Angle.38.aspx",
    "http://idnps.com/clinical/beauty-aesthetics-ii-breaking-stereotypes/3-3-facial-profile-analysis/",
    "https://www.therhinoplastycenter.com/rhinoplasty-education/the-ideal-nose",
    "https://pubmed.ncbi.nlm.nih.gov/792431/",
    "https://www.mdedge.com/node/148479/path_term/51947",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5952987/",
    "https://www.researchgate.net/publication/291384320_The_ideal_male_jaw_angle_-_An_Internet_survey",
    "https://exploreplasticsurgery.com/basic-concepts-in-jaw-angle-implant-surgery-1-introduction-and-aesthetic-considerations/",
    "https://www.sciencedirect.com/science/article/pii/S1015958416301798",
    "https://journals.sagepub.com/doi/pdf/10.5005/jp-journals-10021-1021",
    "https://e-aaps.org/journal/view.php?number=646",
    "https://core.ac.uk/download/pdf/233076383.pdf",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296611/",
    "https://www.semanticscholar.org/paper/The-ideal-male-jaw-angle--An-Internet-survey.-Mommaerts/7da4a071a3cee778557afeed227000bcdf6132dc",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6614668/",
    "https://pubmed.ncbi.nlm.nih.gov/16052142/",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0245557",
    "https://academic.oup.com/ejo/article/29/6/648/626093",
    "https://pubmed.ncbi.nlm.nih.gov/20709723/",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296611/",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6290027/",
    "https://www.orangecountyfacialplasticsurgery.com",
    "http://www.femininebeauty.info/medial-canthal-tilt",
    "https://pubmed.ncbi.nlm.nih.gov/17237692/",
    "http://www.neildodgson.com/pubs/EI5291A-05.pdf",
    "https://pubmed.ncbi.nlm.nih.gov/17973684/",
    "https://pocketdentistry.com/2-dentofacial-assessment/",
    "https://www.frontiersin.org/articles/10.3389/fgene.2018.00462/full#B2",
    "https://orca.cardiff.ac.uk/144386/1/JGalloway_Final%20Corrected%20PhD%20Thesis.pdf",
    "https://cbc.org.br/wp-content/uploads/2013/07/01122012APS.pdf",
    "https://www.researchgate.net/publication/283728214_Multiracial_Facial_Golden_Ratio_and_Evaluation_of_Facial_Appearance/download",
    "https://ecommons.cornell.edu/bitstream/handle/1813/45192/hek34.pdf?sequence=1&isAllowed=y",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0132726",
    "https://pubmed.ncbi.nlm.nih.gov/30127193/",
    "https://www.researchgate.net/publication/317672273_Relationship_between_maximum_bite_force_and_the_gonial_angle_in_crossbite",
    "https://journals.lww.com/jcma/Fulltext/2021/03000/A_digital_photograph_study_evaluating_facial.14.aspx",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5083688/",
    "https://www.mysurgerywebsite.co.uk/website/IGP580/files/facial_aesthetics2.pdf",
    "https://www.dentaldecks.com/wp-content/public/docs/Ortho%2021%20back%20for%20web.pdf",
    "https://link.springer.com/chapter/10.1007/978-3-319-18035-9_23",
    "https://academic.oup.com/asj/article/38/3/231/3897131",
    "https://repository.up.ac.za/bitstream/handle/2263/27557/dissertation.pdf?sequence=1",
    "https://sci.bban.top/pdf/10.1177/074880688600300304.pdf#view=FitH",
    "https://sci.bban.top/pdf/10.1007/s00266-011-9793-x.pdf#view=FitH",
    "http://www.neildodgson.com/pubs/EI5291A-05.pdf",
    "https://ecommons.cornell.edu/bitstream/handle/1813/45192/hek34.pdf?sequence=1&isAllowed=yy",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0132726",
    "https://cbc.org.br/wp-content/uploads/2013/07/01122012APS.pdf",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5777898/",
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4114322/",
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0053285",
    "https://sci.bban.top/pdf/10.2307/3033782.pdf#view=FitH",
    "https://plasticsurgerykey.com/facial-proportions-and-aesthetic-ideals-in-rhinoplasty/",
    "https://sci.bban.top/pdf/10.1177/1948550615599829.pdf#view=FitH",
    "https://www.scielo.br/j/dpjo/a/KZxDdPRN7xbm9hRvZ7nHX8Q/abstract/?lang=en#",
]

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "1024px",
        maxWidth: "100%",
    },
});
function Resource() {
    const styles = useStyles();

    const resourceTableList = resourceList.map((resource, index) => {
        return (
            <div style={{overflowX:"auto"}}>
                <div>{resource}</div>
                <Divider></Divider>
            </div>
        );
    });

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
                            <b>Resources</b> {" & "} <b>Readings</b>
                        </Body1>
                    }
                    description={<Caption1>5h ago · Upgraded</Caption1>}
                ></CardHeader>

                <CardPreview style={{padding:"20px"}}>
                    <b>{"During the development of Harmony, we considered the findings of the following scientific literature. We want to provide you with the resources to do your own research and verify the legitimacy of our methods. Keep in mind, Harmony only consluted this data; our methods are not exclusively based on scientific literature."}</b>
                    <Divider></Divider>
                    <div style={{}}>
                        {resourceTableList}
                    </div>
                </CardPreview>
            </Card>
        </div>
    );

}

export default Resource;