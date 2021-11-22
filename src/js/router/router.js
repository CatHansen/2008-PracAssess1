import homePage from "./../pages/home";
import toDoPage from "../pages/todo/todo";
import pageNotFound from "./../pages/notfound";
import deletePage from "../pages/delete";
import editPage from "../pages/edit";
import addPage from "../pages/add"

const routes = {
    "/": homePage,
    "/todo": toDoPage,
    "/delete": deletePage,
    "/edit": editPage,
    "/add": addPage,
    "/*":pageNotFound,
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

    if(isValidRoute === undefined || isValidRoute ===''){
        app.appendChild(pageNotFound())
    }else{
        app.appendChild(routes[isValidRoute](params))
    }

}

export { Router}
