const buttonTemplate = function({label, path, className}){

    const template = `<button type="button" a href="${path}" class="${className}">${label}</button>`

    return template
}

export default buttonTemplate