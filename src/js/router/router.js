import homePage from "./../pages/home";
import toDoPage from "../pages/todo";
import pageNotFound from "./../pages/notfound";

const routes = {
    "/": homePage,
    "/todo": toDoPage
}

const Router = function (pathname){

    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if(isValidRoute === undefined){
        app.appendChild(pageNotFound())
    }else{
        app.appendChild(routes[window.location.pathname]())
    }

}

export { Router}
