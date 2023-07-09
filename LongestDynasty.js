function longestDynasty(dynastyReign){
    if (dynastyReign.length == 0) {
        return "No Data";
    }

    let dynasties = [];
    let years = [];
    for (let i = 0; i < dynastyReign.length; i++) {
        let year = Object.values(dynastyReign[i])[0];
        let name = Object.keys(dynastyReign[i])[0];

        if (convertYear(year).toString() !== "Invalid") {
            dynasties.push(name);
            years.push(year);
        }
    }

    let longest = null;
    let dynasty = null;

    for (let i = 0; i < dynasties.length; i ++) {
        let end = convertYear(years[i]);
        let start = 0;

        if (i == 0) {
            start = convertYear("M");
        } else {
            start = convertYear(years[i - 1]);
        }

        if (i == 0) {
            longest = end - start;
            dynasty = dynasties[i];
        } else {
            if (end - start > longest) {
                longest = end - start;
                dynasty = dynasties[i];
            }
        }
    }
    return dynasty; 
}

function convertYear(year) {
    const romanToIntMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    if (year.length <= 0 || !(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(year))) {
        return "Invalid";
    }

    let number = 0;

    for (let i = 0; i < year.length; i++) {
        let current = romanToIntMap[year[i]];
        let next =romanToIntMap[year[i + 1]];

        if (current < next) {
            number -= current;
        } else {
            number += current;
        }
    }
    if (isNaN(number)) {
        return "Invalid";
    }
    return number;
}

var dynastyReign = [ {"San Dynasty": "MXLI"}, {"Viloria Dynasty": "MCCCIIII"},
{"Tan Dynasty": "MCCCXCVIII"}, {"Bon Dynasty": "MCDXLV"}, {"Maiko Dynasty": "MDCLXIV"},
{"Andre Dynasty": "MMMMXICX"}];
var longest_dynasty = longestDynasty(dynastyReign);
console.log(longest_dynasty);