import Router from "./router/router";

Router(window.location.pathname)

// = function (){

// //toDoList()
// app.appendChild(homePage())

// }

// export default Router


// app.insertAdjacentHTML("afterend", header('small header'), 'ui-small-header')
// app.insertAdjacentHTML("afterend", button('My Button'), 'ui-button')

/*
Method 1    
templating Strings of Markup (valid):
    means you are not going to make the content interactive....
    if you want to make it interactive ... 
        -add to the DOM, Read Back out of the DOM, add your listeners, insert back in....

    inject the template literal string
        use one of 2 meathods:
        - innerHTML  (dont use this because it causes a re-render for the whole page)
        - insertAdjacentHTML()
            -only rendes the element that HTML is injected into..
            -Options:
            beforeend, afterend

METHOD 2
templating using Elements Node (render)
    button    template string ====> element node using the #document frag
    li interactive ----> element node -----> add interactivity
*/


/*
    app is where we are goin gto inject our views
    - home page - js
    - todo page - js
    
    - Navigate between pages a(anchor) element
    |Routing is a way to navigate between js files....
    |Build a simple router.
*/

/*
Create a UI Button
    Paramaters
    Title
    Style
*/