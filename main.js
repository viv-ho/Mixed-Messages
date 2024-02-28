let garmentType = () => {
    let garmentTypeList = ['jumper', 'cardigan'];
    let rand = Math.floor(Math.random() * 2);
    return garmentTypeList[rand]
}

let finalMessage = () => {
    let garment = garmentType();
    return 'I would like to knit a ' + garment;
}

console.log(finalMessage())