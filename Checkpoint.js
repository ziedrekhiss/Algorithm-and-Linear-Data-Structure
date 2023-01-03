// FIRST TASK

var sent
let word = 0
let vow = 0
do {
    var sent = prompt ("enter a sentence")
} while (sent[sent.length-1] !== ".")

let x=sent.toLowerCase()
for (let i = 0; i < sent.length; i++) {
    if (sent[i]==" ") {
        word++;
    }
    if (sent[i]==" " && sent[i+1] ==" ") {
        word=word-1;
    }
    if (x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u') {
        vow++;
    }
}

if (sent[sent.length-2] !== " ") {
    word=word + 1
}

console.log(x)
console.log("The number of words in the sentence is ", word)
console.log("The number of vowels in the sentence is ", vow)

// SECOND TASK

let set1 = new Array;
let set2 = new Array;
nbInSet1=4;
nbInSet2=5;
var test = true;
let sum = 0

for (let i = 0; i < nbInSet1; i++) {
    set1.push(+prompt('Enter set1 grade ' + (i+1) + ': '));
}

for (let i = 0; i < nbInSet2; i++) {
    set2.push(+prompt('Enter set2 grade ' + (i+1) + ': '));
}

console.log(set1)
console.log(set2)

for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) { 
        if (set1[i]==set2[j]) {
            test = false
            break
        }    
    }
    if (test==true) {
        sum = sum + set1[i]
    }else{
        test = true
    }
}

for (let i = 0; i < set2.length; i++) {
    for (let j = 0; j < set1.length; j++) { 
        if (set2[i]==set1[j]) {
            test = false
            break
        }    
    }
    if (test==true) {
        sum = sum + set2[i]
    }else{
        test = true
    }
}

console.log("the sum of distinct elements is ",sum)
