import * as React from "react"
const styles = require("./hero-image.scss")

interface IHeroImageProps {
    speed?: number
    children?: React.ReactNode
    imageURL: string
}

interface IHeroImageState {
    offset: number
    didCreateScrollListener: boolean
}
    

class HeroImage extends React.Component<IHeroImageProps, IHeroImageState> {
    public static defaultProps = {
        speed: 0.33
    }
    constructor(props: IHeroImageProps) {
        super(props)
        this.state = {
            didCreateScrollListener: false,
            offset: 0,
        }
    }

    public componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        this.setState({ didCreateScrollListener: true })
    }

    public componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll) 
        this.setState({ didCreateScrollListener: false })
    }

    public render() {
        const {imageURL, children} = this.props
        return (
            <div className = {styles.heroImageContainer} style={{ 
                backgroundImage: `url(${imageURL})`,
                backgroundPositionY: `calc(50% + ${this.state.offset}px)`
            }}>
                { children }
            </div>
            // <div className={styles.heroImageContainer}>
            //     <img className={styles.heroImage} src={imageURL} />
            //     { children }
            // </div>
        )
    }

    private handleScroll = () => {
        const scrollY = window.scrollY
        const offset = scrollY * this.props.speed!
        this.setState({
            offset
        })

    }

}

interface IHeroImageTextProps {
    children?: React.ReactNode
}

export const HeroImageText: React.SFC<IHeroImageTextProps> = ({ children }: IHeroImageTextProps) => {
    return (
        <p className={styles.heroImageText}>
            { children }
        </p>
    )
}

export default HeroImage
