import * as React from "react"
import { Link } from "react-router-dom"
// import links from "../../routes"
import { hexToRGB } from "../../lib/colors"
const styles = require("./header.scss")


interface IHeaderState {
    opacity: number
    animationDistance: number
    didAddWindowListener: boolean
}

interface IHeaderProps {
    shouldAnimate?: boolean
    toggleSidebar?(): void
}

interface IShowSidebarButtonProps {
    onPress?(): void
}

const ShowSidebarButton = ({ onPress }: IShowSidebarButtonProps) => {
    return (
        <button onClick={onPress} className = {styles.showSidebarButtonContainer}>
            <i className={`fas fa-bars ${styles.showSidebarButton}`} />
        </button>
    )
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    public static defaultProps = {
        shouldAnimate: false
    }

    constructor(props: IHeaderProps) {
        super(props)
        this.state = {
            animationDistance: 300,
            didAddWindowListener: false,
            opacity: this.props.shouldAnimate ? 0 : 1,
        }
    }
    public componentDidMount() {
        window.addEventListener("scroll", event => this.handleScroll())
        this.setState({ didAddWindowListener: true })
    }

    public componentWillUnmount() {
        if (this.state.didAddWindowListener) {
            window.removeEventListener("scroll", event => this.handleScroll())
            this.setState({ didAddWindowListener: false })
        }
    }

    public componentWillReceiveProps(nextProps: IHeaderProps) {
        if (nextProps.shouldAnimate) {
            const opacity = this.calculateOpacityFromScrollPosition()
            console.log("opacity: %f", opacity)
            this.setState({
                opacity
            })
        }

        else {
            this.setState({
                opacity: 1
            })
        }
    }

    public shouldComponentUpdate(nextProps: IHeaderProps) {
        // changed whether it should animate or not
        if (nextProps.shouldAnimate !== this.props.shouldAnimate) {
            return true;
        }

        if (!this.props.shouldAnimate) {
            return false
        }
        if (window.scrollY > 2 * this.state.animationDistance) {
            return false;
        }
        return true;
    }

    public render() {
        const { opacity } = this.state
        const color = Object.values(hexToRGB(styles.mainColor)).join()
        return (
            <div className={styles.container} style={{ backgroundColor: `rgba(${color}, ${opacity}` }}>
                <ShowSidebarButton onPress={this.props.toggleSidebar} />
                <Link to="/" className={styles.title}>
                    Northview Science Olympiad
                </Link>
                <div className={styles.spacer} />
                <ul className={styles.links}>
                    {/*
                        links.slice(1).map((link, index) => (
                            <ul className={styles.link} key={index}>
                                <Link to={link.url}> {link.name} </Link>
                            </ul>
                        ))
                    */}
                </ul>
            </div>
        )
    }

    public handleScroll = () => {
        
        // fade in the header from opacity 0 at 0px to opacity 1 at 300px from the top
        
        const opacity = this.calculateOpacityFromScrollPosition()
        this.setState({ opacity })
    }

    private calculateOpacityFromScrollPosition () {
        const scrollTop = window.scrollY
        const { animationDistance } = this.state
        const opacity = (scrollTop >= animationDistance) ? 1 : scrollTop / animationDistance
        return opacity
    }
}


export default Header;
