import deadFish from "./../icons/deadFish";
import title from "../components/header/title";
import button from "./../components/buttons/button";
import makeElement from "./../utils/makeElement";
import link from "./../components/buttons/link";

const pageNotFound = function(){
    const pageHeader = document.createElement('header')
    const linkHome = link('Home', '/')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(deadFish()))
    pageHeader.appendChild(makeElement(title('Page not Found')))
    pageHeader.append(linkHome)

    return pageHeader
}

export default pageNotFound
