//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';
function iForAnI(sen) {
    var out = ''
    for (var i = 0; i < sen.length; i++) { 
        var char = sen[i];
        var nextChar = sen[i + 1]
        var prevChar = sen[i - 1]
        if(char == 'i'){
            if(prevChar == ' ' && nextChar == ' '){
                out += 'I'
            }
        }
        if(char != 'i'){ //Realized could replace this 'if' with a continue. Change later. 
            out += char  // Also include other special chars.
        }
    }
    return out
}
//console.log(iForAnI(sentence))
//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';
function allAs(sen){
    var out = 0
    for (var i = 0; i < sen.length; i++) {
        var char = sen[i];
        if(char == 'a' || char == 'A'){ //could also use .toLowerCase() to make it easier and look nicer.
            out++
        }
        
    }
    return out
}
//console.log(allAs(jsHistory))
//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var screaming = 'I scream, you scream, we all scream for icecream';
function scream(sen){
    var out = ''
    for (var i = 0; i < sen.length; i++) {
        //var char = sen[i];
        if(sen[i] == 's'){
             if(sen[i + 1] == 'c' 
             && sen[i + 2] == 'r' 
             && sen[i + 3] == 'e' 
             && sen[i + 4] == 'a' 
             && sen[i + 5] == 'm') {
            out += 'SCREAM'
            i+=6
             }
        }
        out += sen[i]
    }
    return out
}
//console.log(scream(screaming)) //I'm sure there is a better way but logic works. Come back later