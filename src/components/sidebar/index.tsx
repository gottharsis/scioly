import * as React from "react"
import { NavLink } from "react-router-dom";
import links from "../../routes"
const styles = require("./sidebar.scss")
import { RouteComponentProps, withRouter } from "react-router"

interface ISidebarProps extends RouteComponentProps<any> {
    shouldShow: boolean
    onNavigate?: () => void
}

class Sidebar extends React.Component<ISidebarProps> {
    public render() {
        if (!this.props.shouldShow) {
            return null
        }

        return (
            <div className={styles.container}>
                {
                    links.map((link, index) => (
                        <NavLink to={link.url} className={styles.inactiveLink} activeClassName={styles.activeLink} exact={true} onClick={this.props.onNavigate} > 
                            {link.name}
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(Sidebar)