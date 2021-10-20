import dolphin from "./../icons/dolphin";
import title from "../components/header/title";
import link from "./../components/buttons/link";
import makeElement from "./../utils/makeElement";
import tagline from "../components/header/tagline";

const homePage = function() {

    const pageHeader = document.createElement('header')
    const linkToDo = link('To Do List App', '/toDoPage')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(dolphin()))
    pageHeader.appendChild(makeElement(title('Splash Tasks')))
    pageHeader.appendChild(makeElement(tagline('Dive in and Do it')))
    pageHeader.append(linkToDo)

    // const img = logo();
    // const head = header();
    // const markup = img + head;

    return pageHeader
}

export default homePage