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
let P1boxSelected = 0
let P2boxSelected = 0

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
if(p1Overall.value === 2100000 & p2Overall === 2100000){
    document.boxes2.style.backgroundColor = "red"
}
}

const player2Turn = () =>{
    if(p1Overall.value === 2100000 & p2Overall === 2100000){
        document.boxes2.style.backgroundColor = "blue"
    }
    }

const p1briefCaseChoice1 = () => {
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if ((P1boxSelected > 11) && (p1Overall.value ===p2Overall.value)){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase1.briefcasevalue;
    let removebanner1 = document.querySelector('#bc1');
    removebanner1.parentElement.removeChild(removebanner1)
        showScore()
        P1boxSelected ++;

}
showScore()

const p1briefCaseChoice2 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if ((P1boxSelected > 11) && (p1Overall.value ===p2Overall.value)){
        return
    }
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
    p1Overall.value -= briefP1Amounts.briefcase14.briefcasevalue;
    let removebanner14 = document.querySelector('#bc14');
    removebanner14.parentElement.removeChild(removebanner14)
        showScore()
}
showScore()

const p1briefCaseChoice15 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase15.briefcasevalue;
    let removebanner15 = document.querySelector('#bc1');
    removebanner15.parentElement.removeChild(removebanner15)
        showScore()
}
showScore()

const p1briefCaseChoice16 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase16.briefcasevalue;
    let removebanner16 = document.querySelector('#bc16');
    removebanner16.parentElement.removeChild(removebanner16)
        showScore()
}
showScore()

const p1briefCaseChoice17 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase17.briefcasevalue;
    let removebanner17 = document.querySelector('#bc17');
    removebanner17.parentElement.removeChild(removebanner17)
        showScore()
}
showScore()

const p1briefCaseChoice18 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase18.briefcasevalue;
    let removebanner18 = document.querySelector('#bc18');
    removebanner18.parentElement.removeChild(removebanner18)
        showScore()
}
showScore()

const p1briefCaseChoice19 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase19.briefcasevalue;
    let removebanner19 = document.querySelector('#bc19');
    removebanner19.parentElement.removeChild(removebanner19)
        showScore()
}
showScore()

const p1briefCaseChoice20 = () =>{
    p1Overall.value -= briefP1Amounts.briefcase20.briefcasevalue;
    let removebanner20 = document.querySelector('#bc20');
    removebanner20.parentElement.removeChild(removebanner20)
        showScore()
}
showScore()

const p2briefCaseChoice1 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner1b = document.querySelector('#bd1');
    removebanner1b.parentElement.removeChild(removebanner1b)
        showScore()
}
showScore()

const p2briefCaseChoice2 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner2b = document.querySelector('#bd2');
    removebanner2b.parentElement.removeChild(removebanner2b)
        showScore()
}
showScore()

const p2briefCaseChoice3 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase3.briefcasevalue;
    let removebanner3b = document.querySelector('#bd3');
    removebanner3b.parentElement.removeChild(removebanner3b)
        showScore()
}
showScore()

const p2briefCaseChoice4 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase4.briefcasevalue;
    let removebanner4b = document.querySelector('#bd4');
    removebanner4b.parentElement.removeChild(removebanner4b)
        showScore()
}
showScore()

const p2briefCaseChoice5 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase5.briefcasevalue;
    let removebanner5b = document.querySelector('#bd5');
    removebanner5b.parentElement.removeChild(removebanner5b)
        showScore()
}
showScore()

const p2briefCaseChoice6 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase6.briefcasevalue;
    let removebanner6b = document.querySelector('#bd6');
    removebanner6b.parentElement.removeChild(removebanner6b)
        showScore()
}
showScore()

const p2briefCaseChoice7 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase7.briefcasevalue;
    let removebanner7b = document.querySelector('#bd7');
    removebanner7b.parentElement.removeChild(removebanner7b)
        showScore()
}
showScore()

const p2briefCaseChoice8 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase8.briefcasevalue;
    let removebanner8b = document.querySelector('#bd8');
    removebanner8b.parentElement.removeChild(removebanner8b)
        showScore()
}
showScore()

const p2briefCaseChoice9 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase9.briefcasevalue;
    let removebanner9b = document.querySelector('#bd9');
    removebanner9b.parentElement.removeChild(removebanner9b)
        showScore()
}
showScore()

const p2briefCaseChoice10 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase10.briefcasevalue;
    let removebanner10b = document.querySelector('#bd10');
    removebanner10b.parentElement.removeChild(removebanner10b)
        showScore()
}
showScore()

const p2briefCaseChoice11 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase11.briefcasevalue;
    let removebanner11b = document.querySelector('#bd11');
    removebanner11b.parentElement.removeChild(removebanner11b)
        showScore()
}
showScore()

const p2briefCaseChoice12 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase12.briefcasevalue;
    let removebanner12b = document.querySelector('#bd12');
    removebanner12b.parentElement.removeChild(removebanner12b)
        showScore()
}
showScore()

const p2briefCaseChoice13 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase13.briefcasevalue;
    let removebanner13b = document.querySelector('#bd13');
    removebanner13b.parentElement.removeChild(removebanner13b)
        showScore()
}
showScore()

const p2briefCaseChoice14 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase14.briefcasevalue;
    let removebanner14b = document.querySelector('#bd14');
    removebanner14b.parentElement.removeChild(removebanner14b)
        showScore()
}
showScore()

const p2briefCaseChoice15 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase15.briefcasevalue;
    let removebanner15b = document.querySelector('#bd15');
    removebanner15b.parentElement.removeChild(removebanner15b)
        showScore()
}
showScore()

const p2briefCaseChoice16 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase16.briefcasevalue;
    let removebanner16b = document.querySelector('#bd16');
    removebanner16b.parentElement.removeChild(removebanner16b)
        showScore()
}
showScore()

const p2briefCaseChoice17 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner17b = document.querySelector('#bd17');
    removebanner17b.parentElement.removeChild(removebanner17b)
        showScore()
}
showScore()

const p2briefCaseChoice18 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase18.briefcasevalue;
    let removebanner18b = document.querySelector('#bd18');
    removebanner18b.parentElement.removeChild(removebanner18b)
        showScore()
}
showScore()

const p2briefCaseChoice19 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase19.briefcasevalue;
    let removebanner19b = document.querySelector('#bd19');
    removebanner19b.parentElement.removeChild(removebanner19b)
        showScore()
}
showScore()

const p2briefCaseChoice20 = () =>{
    p2Overall.value -= briefP2Amounts.briefcase20.briefcasevalue;
    let removebanner20b = document.querySelector('#bd20');
    removebanner20b.parentElement.removeChild(removebanner20b)
        showScore()
}
showScore()

const gameOver = () =>{
    if(p1Overall.value > p2Overall.value){
        alert("Player 1 has won the game, good luck next time Player 2.")
    }else{
        alert("Player 2 has won the game, good luck next time Player 1.")
    }
}