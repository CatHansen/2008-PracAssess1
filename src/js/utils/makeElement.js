

const makeElement = function (templateString){
        const docFrag = document.createRange().createContextualFragment(templateString)
        console.log(templateString)
        //const element = docFrag.children[0]
        
        return docFrag
}

export default makeElement