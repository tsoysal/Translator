const inputEl = document.getElementById('inputElement');
const btnEl = document.getElementById('btnElement')
const listEl = document.getElementById('listElement');

let sentence = '';
let words = [];

const meanings = {
    sunday: "Pazar günü",
    is: "dır/dir",
    my: "benim",
    birthday: "doğum günü",
    name: "isim",
    surname: "soyad",
    you: "sen/siz",
    me: "beni",
    do: "yapmak/geniş zaman eki",
    love: "sevmek",
    yes: "evet",
    no: "hayır",
    i: "ben",
    not: "olumsuzluk eki",
    hi: "selam",
    everyone: "herkes",
    this: "bu",
    my: "benim",
    app: "uygulama",
    translate: "çevirmek",
    translator: "çeviri"
}

function getSentence() {
    sentence = inputEl.value;
}

function getWords() {
    words = sentence.split(/\W+/).filter(word => word.length);
    words = words.map(word => word.toLowerCase());
}

function displayWords() {
    listEl.innerHTML = '';
    words.map(word => {
        listEl.innerHTML += `<li><span class="bold">${word} :</span> ${meanings[word] ? meanings[word] : "Not Found"}</li>`;
    })
}

function translate() {
        getSentence();
        getWords();
        displayWords();
}

btnEl.addEventListener('click', translate);