import * as React from 'react';
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer"
import Header from "./components/header"
import Obfuscator from "./components/obfuscator"
import Sidebar from "./components/sidebar"
import links from "./routes"
const styles = require("./App.scss")

class App extends React.Component<any, any> {
  

  constructor(props: any) {
    super(props)
    // check if the header should animate
    const shouldHeaderAnimate = props.location.pathname === "/"
    this.state = {
      onClickObfuscator: undefined,
      shouldHeaderAnimate,
      shouldShowObfuscator: false,
      shouldShowSidebar: false,
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    console.log("App received Props")
    this.checkShouldHeaderAnimate(nextProps)
  }

  public render() {
    const { onClickObfuscator, shouldHeaderAnimate, shouldShowObfuscator, shouldShowSidebar } = this.state
    return (
      <div className={styles.App}  >
        <Obfuscator shouldShow={shouldShowObfuscator} onClick={onClickObfuscator} />
        <Sidebar shouldShow={shouldShowSidebar} onNavigate={this.hideSidebar} />
        <Header shouldAnimate={shouldHeaderAnimate} toggleSidebar={this.showSidebar} />
        <div className={styles.content}>
          <Switch>
            {
              links.map((link, index) => (
                <Route path={link.url} key={index} component={link.component} exact={link.exact} />
              ))
            }
          </Switch>
        </div>
        <Footer />

      </div>
    );
  }



  public showSidebar = (): void => {
    this.setState({
      onClickObfuscator: this.hideSidebarOnObfuscatorClick,
      shouldShowObfuscator: true,
      shouldShowSidebar: true,
    })
  }

  public hideSidebar = (): void => {
    this.hideObfuscator()
    this.setState({
      shouldShowSidebar: false
    })
  }

  public toggleSidebar = (): void => {
    if (this.state.shouldShowSidebar) {
      this.hideSidebar()
    }
    else {
      this.showSidebar()
    }
  }


  public checkShouldHeaderAnimate(props = this.props) {
    const shouldHeaderAnimate = props.location.pathname === "/"
    console.log(`pathname: ${props.location.pathname}`)
    this.setState({ shouldHeaderAnimate })
  }

  private hideObfuscator = (): void => {
    this.setState({
      onClickObfuscator: undefined,
      shouldShowObfuscator: false,
    })
  }

  private hideSidebarOnObfuscatorClick = () => {
    this.setState({
      onClickObfuscator: undefined,
      shouldShowObfuscator: false,
      shouldShowSidebar: false,
    })
  }
}

export default withRouter(App)
