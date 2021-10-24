

const dataFetcher = async function(url=null){

    const response = await fetch(url);
    //console.log(response)
    const jsonData = await response.json();
    return jsonData
}

// const test = async function () {
    
//     const itemData = await dataFetcher('toDo.json');
//     console.log(itemData)
// }

export {dataFetcher}
