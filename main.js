//Random Sentence Generator

const nouns = ['dog', 'cat', 'house', 'tree', 'fish'];
const articles = ['a', 'the'];
const pastVerb = ['ran', 'took', 'asked', 'offered', 'wanted'];
const conj = ['for', 'and', 'but', 'or', 'nor'];
const nounObject = ['apple', 'toothbrush', 'iPhone', 'computer', 'pencil'];

function generateNoun(nouns) {
    let noun1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for(let i = 0; i < nouns.length; i++) {
        noun1 = noun[rand];
    }
    return noun1;
}

function generateArticles(articles) {
    let art1 = 0;
    var rand = Math.floor(Math.random() * 2);
    for (let i = 0; i < articles.length; i++) {
        art1 = articles[rand];
    }
    return art1;
}

function generatePastVerbs(pastVerb) {
    let pastVerb1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < pastVerb.length;i++) {
        pastVerb1 = pastVerb[rand];
    }
    return pastVerb1;
}

function generateConjunction(conj) {
    let conj1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < conj.length; i++) {
        conj1 = conj[rand];
    }
    return conj1;
}

function generateNounObj(nounObject) {
    noun2 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < nounObject.length; i++) {
        noun2 = nounObject[rand];
    }
    return noun2;
}

