import AboutPage from "./pages/about"
import GalleryPage from "./pages/gallery"
import HomePage from "./pages/home"
import NewsPage from "./pages/news"


const routes = [
    { name: "Home", component: HomePage, url: "/", exact: true },
    { name: "About", component: AboutPage, url: "/about", exact: true },
    { name: "News", component: NewsPage, url: "/news", exact: true },
    { name: "Gallery", component: GalleryPage, url: "/gallery", exact: true },
]

export default routes