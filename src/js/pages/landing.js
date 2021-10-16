import logo from "./../icons/logo";
import header from "./../components/header/index";
import button from "./../components/buttons/button";
import makeElement from "./../utils/makeElement";

const landingPage = function (params) {

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('Dive In and Do')))
    pageHeader.appendChild(makeElement(button('To Do List App')))

    // const img = logo();
    // const head = header();
    // const markup = img + head;


    return pageHeader
}

export default landingPage