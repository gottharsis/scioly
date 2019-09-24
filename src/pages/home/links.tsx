import * as React from "react"
const styles = require("./homepage.scss")
const Fade = require("react-reveal/Fade")

class ImportantLinks extends React.Component {
    private static links = [
        { text: "Rules Manual (2017-2018)", url: "http://docs.wixstatic.com/ugd/e7a3e2_8d36de4d93a144c68a36e57360a0dc5f.pdf" },
        { text: "National Website", url: "https://www.soinc.org/" },
        { text: "2018 Events", url: "https://www.soinc.org/events/2018-event-table" },
        { text: "Event Descriptions", url: "https://www.soinc.org/learn/c-event-short-descriptions" },
        { text: "Georgia SO website", url: "http://www.gascioly.org/" },
        { text: "Wiki", url: "https://scioly.org/wiki/index.php/Main_Page" },
        { text: "Event Briefing", url: "https://scioly.org/wiki/index.php/Division_C" },
        
    ]

    public render() {
        return (
            <div className={styles.linksContainer}>
                <h1>Helpful Links</h1>
                <Fade bottom={true} cascade={true} >
                    <ul className={styles.linkList}>
                        {
                            ImportantLinks.links.map(({ text, url }, index) => (
                                <li key={index} className={styles.linkContainer} >
                                    <a href={url} target={"_blank"}> 
                                        {text} 
                                    </a>
                                </li>
                                
                            ))
                        }
                    </ul>
                </Fade>
            </div>
        )
    }
}

const TestDBLink: React.SFC = () => {
    const links = [
        { text: "Test Exchange (Archived Tests)", url: "https://scioly.org/wiki/index.php/2017_Test_Exchange" },
        { url: "https://drive.google.com/drive/folders/0ByzFrrItShuVY1JCQTFTVFdtUnc", text: "Northview Test Database" },
        { url: "http://scioly.mit.edu/archive/", text: "MIT Invitational Tests" },
        { url: "https://scioly.princeton.edu/past-tests", text: "Princeton Invitational Tests" },
    ]
    return (
        <div className={styles.testDatabaseContainer}>
            <h1>Practice Tests</h1>
            <Fade cascade bottom>
                <ul className={styles.linkList}>
                    {
                        links.map(({ text, url }, index) => (
                            // <li key={index} className={styles.linkContainer}><a  href={url} target="_blank" key={index}> { text } </a></li>
                            
                            <li key={index} className={styles.linkContainer} >
                            <a href={url} target={"_blank"}> 
                                {text} 
                            </a>
                        </li>
                            
                        ))
                    }
                </ul>
            </Fade>
        </div>
    )
}

const OrderFormLink = () => {
    return (
        <div className = {styles.orderFormLinkContainer}>
            <h1>Buy Supplies</h1>
            <Fade bottom={true} cascade={true}>
                <ul className={styles.linkList}>
                    <li className={styles.linkContainer}>                
                        <a  href={"https://goo.gl/forms/QzxEf2Yw931lJphq1"} target="_blank">
                            Order Form
                        </a>
                    </li>
                </ul>
            </Fade>
        </div>
    )
}

const HomeLinks: React.SFC = () => (
    <div className={styles.homepage} >
        <ImportantLinks />
        <TestDBLink />
        <OrderFormLink />
    </div>
)

export default HomeLinks
