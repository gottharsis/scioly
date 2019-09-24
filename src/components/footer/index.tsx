import * as React from "react"
import { Link } from "react-router-dom"
const styles = require("./footer.scss")

const Footer: React.SFC = () => {
    return (
        <footer className={styles.container}>
            <Link to="/" > Northview Science Olympiad </Link>
        </footer>
    )
}

export default Footer;