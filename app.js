let briefP1Amounts = {
   briefcase1: {
        briefcasevalue:30000,
        banner:"",
    },
    briefcase2: {
        briefcasevalue:140000,
        banner:"",
    },
    briefcase3: {
        briefcasevalue:100000,
        banner:"",
    },
    briefcase4: {
        briefcasevalue:60000,
        banner:"",
    },
    briefcase5: {
        briefcasevalue:10000,
        banner:"",
    },
    briefcase6: {
        briefcasevalue:180000,
        banner:"",
    },
    briefcase7: {
        briefcasevalue:150000,
        banner:"",
    },
    briefcase8: {
        briefcasevalue:40000,
        banner:"",
    },
    briefcase9: {
        briefcasevalue:80000,
        banner:"",
    },
    briefcase10: {
        briefcasevalue:20000,
        banner:"",
    },
    briefcase11: {
        briefcasevalue:200000,
        banner:"",
    },
    briefcase12: {
        briefcasevalue:50000,
        banner:"",
    },
    briefcase13: {
        briefcasevalue:160000,
        banner:"",
    },
    briefcase14: {
        briefcasevalue:110000,
        banner:"",
    },
    briefcase15: {
        briefcasevalue:90000,
        banner:"",
    },
    briefcase16: {
        briefcasevalue:130000,
        banner:"",
    },
    briefcase17: {
        briefcasevalue:190000,
        banner:"",
    },
    briefcase18: {
        briefcasevalue:70000,
        banner:"",
    },
    briefcase19: {
        briefcasevalue:170000,
        banner:"",
    },
    briefcase20: {
        briefcasevalue:120000,
        banner:"",
    },
}

let briefP2Amounts = {
    briefcase1: {
        briefcasevalue:10000,
        banner:"",
    },
    briefcase2: {
        briefcasevalue:100000,
        banner:"",
    },
    briefcase3: {
        briefcasevalue:140000,
        banner:"",
    },
    briefcase4: {
        briefcasevalue:30000,
        banner:"",
    },
    briefcase5: {
        briefcasevalue:60000,
        banner:"",
    },
    briefcase6: {
        briefcasevalue:20000,
        banner:"",
    },
    briefcase7: {
        briefcasevalue:180000,
        banner:"",
    },
    briefcase8: {
        briefcasevalue:80000,
        banner:"",
    },
    briefcase9: {
        briefcasevalue:40000,
        banner:"",
    },
    briefcase10: {
        briefcasevalue:150000,
        banner:"",
    },
    briefcase11: {
        briefcasevalue:190000,
        banner:"",
    },
    briefcase12: {
        briefcasevalue:50000,
        banner:"",
    },
    briefcase13: {
        briefcasevalue:160000,
        banner:"",
    },
    briefcase14: {
        briefcasevalue:130000,
        banner:"",
    },
    briefcase15: {
        briefcasevalue:110000,
        banner:"",
    },
   briefcase16: {
        briefcasevalue:200000,
        banner:"",
    },
    briefcase17: {
        briefcasevalue:90000,
        banner:"",
    },
    briefcase18: {
        briefcasevalue:70000,
        banner:"",
    },
    briefcase19: {
        briefcasevalue:170000,
        banner:"",
    },
    briefcase20: {
        briefcasevalue:120000,
        banner:"",
    },
    }
let p1Overall = {
    value: 2100000,
    turn: true,
}
let p2Overall = {
    value:2100000,
    turn: true,
}
const showScore = () =>{
    let player1Score = document.querySelector('.score1')
    player1Score.innerHTML = p1Overall.value
    let player2Score = document.querySelector('.score2')
    player2Score.innerHTML = p2Overall.value
}
showScore()

const startGame = () =>{
    showScore()
}

const player1Turn = () =>{
    if(briefP1Amounts.length() === 20 && p1Overall.turn === true){
        p1Overall.value -= briefP1Amounts.briefcase1.briefcasevalue;
        showScore()
    }
}

const p1briefCaseChoice1 = () => {
    p1Overall.value -= briefP1Amounts.briefcase1.briefcasevalue;
    let removebanner1 = document.querySelector('#bc1');
    removebanner1.parentElement.removeChild(removebanner1)
        showScore()
}
showScore()

const p1briefCaseChoice2 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase2.briefcasevalue;
    let removebanner2 = document.querySelector('#bc2');
    removebanner2.parentElement.removeChild(removebanner1)
        showScore()
}
showScore()

const p1briefCaseChoice3 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase3.briefcasevalue;
    let removebanner3 = document.querySelector('#bc3');
    removebanner3.parentElement.removeChild(removebanner3)
        showScore()
}
showScore()

const p1briefCaseChoice4 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase4.briefcasevalue;
    let removebanner4 = document.querySelector('#bc4');
    removebanner4.parentElement.removeChild(removebanner4)
        showScore()
}
showScore()

const p1briefCaseChoice5 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase5.briefcasevalue;
    let removebanner5 = document.querySelector('#bc5');
    removebanner5.parentElement.removeChild(removebanner15)
        showScore()
}
showScore()

const p1briefCaseChoice6 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase6.briefcasevalue;
    let removebanner6 = document.querySelector('#bc6');
    removebanner6.parentElement.removeChild(removebanner6)
        showScore()
}
showScore()

const p1briefCaseChoice7 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase7.briefcasevalue;
    let removebanner7 = document.querySelector('#bc7');
    removebanner7.parentElement.removeChild(removebanner7)
        showScore()
}
showScore()

const p1briefCaseChoice8 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase8.briefcasevalue;
    let removebanner8 = document.querySelector('#bc8');
    removebanner8.parentElement.removeChild(removebanner8)
        showScore()
}
showScore()

const p1briefCaseChoice9 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase9.briefcasevalue;
    let removebanner9 = document.querySelector('#bc9');
    removebanner9.parentElement.removeChild(removebanner9)
        showScore()
}
showScore()

const p1briefCaseChoice10 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase10.briefcasevalue;
    let removebanner10 = document.querySelector('#bc10');
    removebanner10.parentElement.removeChild(removebanner10)
        showScore()
}
showScore()

const p1briefCaseChoice11 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase11.briefcasevalue;
    let removebanner11 = document.querySelector('#bc11');
    removebanner11.parentElement.removeChild(removebanner11)
        showScore()
}
showScore()

const p1briefCaseChoice12 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase12.briefcasevalue;
    let removebanner12 = document.querySelector('#bc1');
    removebanner12.parentElement.removeChild(removebanner12)
        showScore()
}
showScore()

const p1briefCaseChoice13 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase13.briefcasevalue;
    let removebanner13 = document.querySelector('#bc13');
    removebanner13.parentElement.removeChild(removebanner13)
        showScore()
}
showScore()

const p1briefCaseChoice14 = () =>{
    p1Score -= briefP1Amounts.briefcase14.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
showScore()

const p1briefCaseChoice15 = () =>{
    p1Score -= briefP1Amounts.briefcase15.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice16 = () =>{
    p1Score -= briefP1Amounts.briefcase16.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice17 = () =>{
    p1Score -= briefP1Amounts.briefcase17.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice18 = () =>{
    p1Score -= briefP1Amounts.briefcase18.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice19 = () =>{
    p1Score -= briefP1Amounts.briefcase19.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice20 = () =>{
    p1Score -= briefP1Amounts.briefcase20.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p2briefCaseChoice1 = () =>{
    p2Score -= briefP2Amounts.briefcase1.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice2 = () =>{
    p2Score -= briefP2Amounts.briefcase2.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice3 = () =>{
    p2Score -= briefP2Amounts.briefcase3.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice4 = () =>{
    p2Score -= briefP2Amounts.briefcase4.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice5 = () =>{
    p2Score -= briefP2Amounts.briefcase5.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice6 = () =>{
    p2Score -= briefP2Amounts.briefcase6.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice7 = () =>{
    p2Score -= briefP2Amounts.briefcase7.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice8 = () =>{
    p2Score -= briefP2Amounts.briefcase8.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice9 = () =>{
    p2Score -= briefP2Amounts.briefcase9.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice10 = () =>{
    p2Score -= briefP2Amounts.briefcase10.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice11 = () =>{
    p2Score -= briefP2Amounts.briefcase11.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice12 = () =>{
    p2Score -= briefP2Amounts.briefcase12.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice13 = () =>{
    p2Score -= briefP2Amounts.briefcase13.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice14 = () =>{
    p2Score -= briefP2Amounts.briefcase14.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice15 = () =>{
    p2Score -= briefP2Amounts.briefcase15.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice16 = () =>{
    p2Score -= briefP2Amounts.briefcase16.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice17 = () =>{
    p2Score -= briefP2Amounts.briefcase17.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice18 = () =>{
    p2Score -= briefP2Amounts.briefcase18.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice19 = () =>{
    p2Score -= briefP2Amounts.briefcase19.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const p2briefCaseChoice20 = () =>{
    p2Score -= briefP2Amounts.briefcase20.briefcasevalue = p2Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p2Score()

const gameOver = () =>{
    if(p1Score > p2Score){
        alert("Player 1 has won the game, good luck next time Player 2.")
    }else{
        alert("Player 2 has won the game, good luck next time Player 1.")
    }
}