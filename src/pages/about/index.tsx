import * as React from "react"
const styles = require("../pages.scss")
// import Header from "../../components/header"

// TODO: implement About page
const AboutPage: React.SFC = () => {
    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <p>
                <strong>Our Sponsor:</strong> Megan Gloede
            </p>
            <p>
                Contact us at <a href="mailto:scienceolympiadnorthview@gmail.com">scienceolympiadnorthview@gmail.com</a>
            </p>
            <h2> Our Officers (2018-19) </h2>
            <p>
                <strong> President: </strong> Christine Jeong and Athrey Gonella<br />
                <strong> Vice-President: </strong> Mohit Singh<br />
                <strong> Director of Communications: </strong> <span style={{ fontSize: 20 }}>Ayush Nene</span><br />
                <strong> Director of Construction: </strong> <span style={{ fontSize: 20 }}>Aditya Munagapati</span><br />
                <strong> Secretary: </strong> Aniruddha Gupta<br />
                <strong> Study-Event Manager: </strong> Abhay Siripirapu<br />
                <strong> Study-Event Assistants: </strong> Nithya Mahakala, Boidik Chandra, Arnav Gonella<br />
            </p>
        </div>
    )
}

export default AboutPage
