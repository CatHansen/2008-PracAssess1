import deadFish from "./../icons/deadFish";
import title from "../components/header/title";
import tagline from "../components/header/tagline";
import button from "./../components/buttons/button";
import makeElement from "./../utils/makeElement";
import link from "./../components/buttons/link";

const pageNotFound = function(){
    const pageHeader = document.createElement('header')
    const linkHome = link('take me back', '/')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(deadFish()))
    pageHeader.appendChild(makeElement(title('404 Error')))
    pageHeader.appendChild(makeElement(tagline('Page Not Found')))
    pageHeader.append(linkHome)

    return pageHeader
}

export default pageNotFound
