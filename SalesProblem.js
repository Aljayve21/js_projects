function topProduct(ProfitArray) {
    if (ProfitArray.length == 0) {
        return "Array is empty";
    }
    let max = Number(Object.values(ProductProfitArray[0]));
    let top = String(Object.keys(ProductProfitArray[0]));
    for (let obj of ProfitArray) {
        let m = Number(Object.values(obj));
        if (m > max) {
            max = m;
            top = String(Object.keys(obj));
        }
    }
    return top;
}

function bottomProduct(productProfitArray) {
    if (ProductProfitArray.length == 0) {
        return "Array is empty";
    }
    let low = Number(Object.values(ProductProfitArray[0]));
    let bottom = String(Object.keys(ProductProfitArray[0]));
    for (let obj of ProductProfitArray) {
        let c = Number(Object.values(obj));
        if (c < low) {
            low = c;
            bottom = String(Object.keys(obj));
        }
    }
    return bottom;
}

function zeroProfitProduct(productProfitArray) {
    if (ProductProfitArray == 0) {
        return "Array is empty";
    }
    let low = Math.abs(Number(Object.values(ProductProfitArray[0])));
    let bottom = String(Object.keys(ProductProfitArray[0]));
    for (let obj of ProductProfitArray) {
        let d = Number(Object.values(obj));
        let diff = Math.abs(d);
        if (diff < low) {
            low = diff;
            bottom = String(Object.keys(obj));
        } else if (diff == low) {
            if(d > 0) {
                bottom = String(Object.keys(obj));
            }
        }
    }
    return bottom;
    
}
var ProductProfitArray = [{ "Product A": -75 }, { "Product B": -70}, { "Product C": 98 }, { "Product D": 5 }, { "Product E": -88 }, { "Product F": 29 },];
let topProductValue = topProduct(ProductProfitArray);
let bottomProductValue = bottomProduct(ProductProfitArray);
let zeroProfitProductValue = zeroProfitProduct(ProductProfitArray);

console.log("Top profitable product: " + topProductValue);
console.log("Lowest profitable product: " + bottomProductValue);
console.log("Closet to zero profitable product: " + zeroProfitProductValue);
