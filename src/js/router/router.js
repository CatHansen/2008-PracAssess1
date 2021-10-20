import homePage from "./../pages/home";
import toDoPage from "./../pages/toDoPage";
import pageNotFound from "./../pages/pageNotFound";


const Router = function (pathname){
    
    const routes = {
        "/": homePage(),
        "/pageNotFound": pageNotFound(),
        "/toDoPage": toDoPage()
    }

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])
}

export default Router
