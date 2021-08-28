//Random Sentence Generator

const nouns = ['dog', 'cat', 'house', 'tree', 'fish'];
const articles = ['a', 'the'];
const pastVerb = ['ran', 'took', 'asked', 'offered', 'wanted'];
const conj = ['for', 'and', 'but', 'or', 'nor'];
const nounObject = ['apple', 'toothbrush', 'iPhone', 'computer', 'pencil'];

const generateNoun = (nouns) => {
    let noun1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for(let i = 0; i < nouns.length; i++) {
        noun1 = noun[rand];
    }
    return noun1;
}

const generateArticles = (articles) => {
    let art1 = 0;
    var rand = Math.floor(Math.random() * 2);
    for (let i = 0; i < articles.length; i++) {
        art1 = articles[rand];
    }
    return art1;
}

const generatePastVerbs = (pastVerb) => {
    let pastVerb1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < pastVerb.length;i++) {
        pastVerb1 = pastVerb[rand];
    }
    return pastVerb1;
}

const generateConjunction = (conj) => {
    let conj1 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < conj.length; i++) {
        conj1 = conj[rand];
    }
    return conj1;
}

const generateNounObj = (nounObject) => {
    noun2 = 0;
    var rand = Math.floor(Math.random() * 5);
    for (let i = 0; i < nounObject.length; i++) {
        noun2 = nounObject[rand];
    }
    return noun2;
}

function generateSentence() {
    n1 = generateNoun(nouns);
    a1 = generateArticles(articles);
    n2 = generateNounObj(nounObject);
    c1 = generateConjunction(conj);
    v1 = generatePastVerbs(pastVerb);
    console.log(a1 + " " + n1 + " " + v1 + " " + a1 + " " + n2 + " .");
}
