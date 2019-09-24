import * as React from "react"
const styles = require("./colored-button.scss")
interface IColoredButtonProps {
    className?: string
    children?: React.ReactNode
    href?: string
    target?: string
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

const ColoredButton: React.SFC<IColoredButtonProps> = (props: IColoredButtonProps) => {
    return (
        <div className = {`${styles.coloredButtonContainer} ${props.className}`} onClick={props.onClick} >
            <a href={props.href} className={styles.coloredButton} target={ props.target } >
                { props.children }
            </a>
        </div>
    )
}

ColoredButton.defaultProps = {
    children : null, 
    className : "",
    href:"",
    onClick: undefined, 
    target: ""
}

export default ColoredButton