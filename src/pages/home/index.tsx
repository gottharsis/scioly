import * as React from "react"
import HeroImage, { HeroImageText } from "../../components/hero-image"
import HomeLinks from "./links"

class HomePage extends React.Component {
    public render() {
        return (
            <div>
                <HeroImage imageURL={"img/hero.jpg"}>
                    <HeroImageText>
                        Northview Science Olympiad
                    </HeroImageText>
                </HeroImage>
                <HomeLinks />
            </div>
        )
    }

}

export default HomePage
