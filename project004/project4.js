let person = document.querySelector('.person');
let quote = document.querySelector('.quote');
let btn = document.querySelector('.new');

const qoutes = [{
    quote : `'Punda amechoka, atashusha mzigo'`,
    person : 'Mesh Aquina'
}, {
    quote : `'Once codes are not running, take some coffee'`,
    person : 'Rickson Dev'
}, {
    quote : `'Show me your friend, I tell you who you are'`,
    person : 'Adrian Shaddy'
}, {
    quote : `'Whatever a mind can percive and concieve, it can achieve'`,
    person : 'Japkhim Mus'
}, {
    quote : `'The sky is not my limit, it is my starting point'`,
    person : 'Hellen Japh'
},{
    quote : `'A man is never thought of by any person, stand in for yourself'`,
    person : 'Glady Waylye'
}, {
    quote : `'Nothing should stop a young man who is ambitious to win'`,
    person : 'Joylene Simon'
}, {
    quote : `'I have a dream'`,
    person : 'Martin Luther'
}, {
    quote : `'Together is easy but to get her is not easy'`,
    person : 'Aliyeachwa Man'
}, {
    quote : `'The journey of a millionare starts with small moves'`,
    person : 'Rose Chief'
}, 
];

btn.addEventListener( 'click', () => {

    let random = Math.floor(Math.random() * qoutes.length);

    quote.innerText = qoutes[random].quote;
    person.innerText = qoutes[random].person;
})