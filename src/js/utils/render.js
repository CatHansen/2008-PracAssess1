import makeElement from "./makeElement";

/*
    usually passed 2 parameters: template & data
    template - function userTemplate
    data - single user

    return template literal (to markup)
*/

const render = function (template, data){
    const templateStringLiteral = template(data)

    //convert the template literal to markup
    // if template is for display only add to the view using the insertAdjacentHTML
    console.log(templateStringLiteral)
    const markup = makeElement(templateStringLiteral)
    
    return markup
}


export default render