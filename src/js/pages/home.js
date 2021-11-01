import dolphin from "./../icons/dolphin";
import title from "../components/header/title";
import link from "./../components/buttons/link";
import makeElement from "./../utils/makeElement";
import tagline from "../components/header/tagline";

const homePage = function() {

    const pageHeader = document.createElement('header')
    const titleLine = document.createElement('div')
    pageHeader.classList.add('page-header')
    titleLine.classList.add('titleDiv')
    titleLine.appendChild(makeElement(dolphin()))
    titleLine.appendChild(makeElement(title('Splash Tasks', 'title')))
    pageHeader.appendChild(titleLine)
    pageHeader.appendChild(makeElement(tagline('Dive in and Make a Splash in Your Life')))
    const linkToDo = link('To Do List App', '/toDoPage')
    pageHeader.append(linkToDo)


    return pageHeader
}

export default homePage