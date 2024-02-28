let garmentType = () => {
    let garmentTypeList = ['jumper', 'cardigan'];
    let rand = Math.floor(Math.random() * garmentTypeList.length);
    return garmentTypeList[rand];
}

let stitchType = () => {
    let stitchTypeList = ['lace', 'moss stitch', 'seed stitch', 'cable', 'stockinette', 'reverse stockinette', 'rib']
    let rand = Math.floor(Math.random() * stitchTypeList.length);
    return stitchTypeList[rand];
}

let sleeveLength = () => {
    let sleeveLengthList = ['no sleeves', 'short sleeves', 'long sleeves', '3/4-length sleeves'];
    let rand = Math.floor(Math.random() * ( sleeveLengthList.length));
    return sleeveLengthList[rand];
}

let neckType = () => {
    let neckTypeList = ['round neck', 'v-neck'];
    let rand = Math.floor(Math.random() * neckTypeList.length);
    return neckTypeList[rand];
}

let finalMessage = () => {
    let garment = garmentType();
    let stitch = stitchType();
    let sleeves = sleeveLength();
    let neck = neckType();
    return 'I would like to knit a ' + stitch + ' ' + garment + ' with ' + sleeves + ' and a ' + neck + '.';
}

console.log(finalMessage())