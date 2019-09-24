import * as React from "react"
const styles = require("../pages.scss")

const NewsPage: React.SFC = () => {
    return (
        <div className={styles.container}>
            <h1> News </h1>
            <h2> Nothing's happened yet this year! </h2>
        </div>
    )
}

export default NewsPage