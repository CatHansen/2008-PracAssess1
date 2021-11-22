import dolphin from "./../icons/dolphin";
import title from "../components/header/title";
import { Router } from "../router/router";
import makeElement from "./../utils/makeElement";
import tagline from "../components/header/tagline";
import button from "../components/buttons/button";


const appButton = makeElement(button("To Do List"))

const homePage = function() {

    function cleanUp (){
        appButton.removeEventListener('click', onButtonClick)
    }
    
    function onButtonClick(e){
        cleanUp()
        Router('/todo')
    }

    const pageHeader = document.createElement('header')
    const titleLine = document.createElement('div')
    
    appButton.addEventListener('click', onButtonClick)
    appButton.classList.add('todoNavButton')
    pageHeader.classList.add('page-header')
    titleLine.classList.add('titleDiv')
    titleLine.classList.add('homePage')
    titleLine.appendChild(makeElement(dolphin()))
    titleLine.appendChild(makeElement(title('Splash Tasks', 'title')))
    pageHeader.appendChild(titleLine)
    pageHeader.appendChild(makeElement(tagline('Dive in and Make a Splash in Your Life')))
    pageHeader.appendChild(appButton)
    // const linkToDo = link('To Do List App', '/todo')
    // pageHeader.append(linkToDo)


    return pageHeader
}

export default homePage