import homePage from "./../pages/home";
import toDoPage from "../pages/todo";
import pageNotFound from "./../pages/notfound";
import deletePage from "../pages/delete";

const routes = {
    "/": homePage,
    "/todo": toDoPage,
    "/delete": deletePage
}

const Router = function (pathname, params=null){
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
        app.appendChild(routes[isValidRoute](params))
    }

}

export { Router}
