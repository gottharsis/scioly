import * as React from "react"
const styles = require("./obfuscator.scss")

interface IObfuscatorProps {
    onClick?: () => void
    shouldShow: boolean
}

const Obfuscator = ({ onClick, shouldShow }: IObfuscatorProps) => {
    return (
        shouldShow ? <div className={styles.obfuscator} onClick={onClick} /> : null
    )
}

export default Obfuscator