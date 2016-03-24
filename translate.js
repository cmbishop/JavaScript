function translate(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (!isAVowel(str[i]) && str[i] !== " ") {
            newStr += str[i] + "o" + str[i];
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

