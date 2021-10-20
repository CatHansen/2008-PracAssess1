import Router from '../../router/router';
import makeElement from '../../utils/makeElement';

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function (label="ui link", path="/", className="ui-link"){
    
    const template = `<button type="button" a href="${path}" class="${className}">${label}</button>`
    
    const buttonLink = makeElement(template)

    buttonLink.addEventListener('click', onRequestPage)
    return buttonLink
}

export default link