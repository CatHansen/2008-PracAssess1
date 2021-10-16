

const dataFetcher = async function(url=null){
    // const itemData = require('./../data/test.json');
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData
}

// const test = async function () {
    
//     const itemData = await dataFetcher('toDo.json');
//     console.log(itemData)
// }

export {dataFetcher}
