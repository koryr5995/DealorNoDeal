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
let P1boxSelected = 0;
let P2boxSelected = 0;

const gameOver = () =>{
    if((p1Overall.value > p2Overall.value) && (P1boxSelected && P2boxSelected === 11)){
        alert("Player 1 has won the game, good luck next time Player 2.")
    }elseif((p2Overall.value > p1Overall.value) && (P1boxSelected && P2boxSelected === 11))
        alert("Player 2 has won the game, good luck next time Player 1.")
    
}
gameOver()

const showScore = () =>{
    let player1Score = document.querySelector('.score1')
    player1Score.innerHTML = p1Overall.value
    let player2Score = document.querySelector('.score2')
    player2Score.innerHTML = p2Overall.value
}
showScore()


const showCounter = () =>{
    let Pl1boxSelected = document.querySelector('.BoxCounter1')
    Pl1boxSelected.innerHTML = P1boxSelected
    let Pl2boxSelected = document.querySelector('.BoxCounter2')
    Pl2boxSelected.innerHTML = P2boxSelected;
}
showCounter()


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
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase1.briefcasevalue;
    let removebanner1 = document.querySelector('#bc1')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter()
    removebanner1.parentElement.removeChild(removebanner1)
        showScore()
        P1boxSelected++;
        gameOver()
}
showScore()
showCounter()

const p1briefCaseChoice2 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase2.briefcasevalue;
    let removebanner2 = document.querySelector('#bc2')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner2.parentElement.removeChild(removebanner1)
        showScore()
        gameOver()
}
showScore()
showCounter()

const p1briefCaseChoice3 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase3.briefcasevalue;
    let removebanner3 = document.querySelector('#bc3')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner3.parentElement.removeChild(removebanner3)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice4 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase4.briefcasevalue;
    let removebanner4 = document.querySelector('#bc4')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner4.parentElement.removeChild(removebanner4)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice5 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase5.briefcasevalue;
    let removebanner5 = document.querySelector('#bc5')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter()
    removebanner5.parentElement.removeChild(removebanner15)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice6 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase6.briefcasevalue
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    let removebanner6 = document.querySelector('#bc6');
    removebanner6.parentElement.removeChild(removebanner6)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice7 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase7.briefcasevalue;
    let removebanner7 = document.querySelector('#bc7')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner7.parentElement.removeChild(removebanner7)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice8 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase8.briefcasevalue;
    let removebanner8 = document.querySelector('#bc8')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner8.parentElement.removeChild(removebanner8)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice9 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase9.briefcasevalue;
    let removebanner9 = document.querySelector('#bc9')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner9.parentElement.removeChild(removebanner9)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice10 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase10.briefcasevalue;
    let removebanner10 = document.querySelector('#bc10')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner10.parentElement.removeChild(removebanner10)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice11 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase11.briefcasevalue;
    let removebanner11 = document.querySelector('#bc11')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner11.parentElement.removeChild(removebanner11)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice12 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase12.briefcasevalue;
    let removebanner12 = document.querySelector('#bc1')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner12.parentElement.removeChild(removebanner12)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice13 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase13.briefcasevalue;
    let removebanner13 = document.querySelector('#bc13')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner13.parentElement.removeChild(removebanner13)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice14 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase14.briefcasevalue;
    let removebanner14 = document.querySelector('#bc14')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner14.parentElement.removeChild(removebanner14)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice15 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase15.briefcasevalue;
    let removebanner15 = document.querySelector('#bc1')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner15.parentElement.removeChild(removebanner15)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice16 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase16.briefcasevalue;
    let removebanner16 = document.querySelector('#bc16')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner16.parentElement.removeChild(removebanner16)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice17 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase17.briefcasevalue;
    let removebanner17 = document.querySelector('#bc17')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner17.parentElement.removeChild(removebanner17)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice18 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase18.briefcasevalue;
    let removebanner18 = document.querySelector('#bc18')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner18.parentElement.removeChild(removebanner18)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice19 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected >= 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase19.briefcasevalue;
    let removebanner19 = document.querySelector('#bc19')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner19.parentElement.removeChild(removebanner19)
        showScore()
        gameOver()
}
showScore()

const p1briefCaseChoice20 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P1boxSelected > 11){
        return
    }
    p1Overall.value -= briefP1Amounts.briefcase20.briefcasevalue;
    let removebanner20 = document.querySelector('#bc20')
    P1boxSelected.innerHTML = P1boxSelected++;
    showCounter();
    removebanner20.parentElement.removeChild(removebanner20)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice1 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner1b = document.querySelector('#bd1')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner1b.parentElement.removeChild(removebanner1b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice2 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner2b = document.querySelector('#bd2')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner2b.parentElement.removeChild(removebanner2b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice3 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase3.briefcasevalue;
    let removebanner3b = document.querySelector('#bd3')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner3b.parentElement.removeChild(removebanner3b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice4 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase4.briefcasevalue;
    let removebanner4b = document.querySelector('#bd4')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner4b.parentElement.removeChild(removebanner4b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice5 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase5.briefcasevalue;
    let removebanner5b = document.querySelector('#bd5')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner5b.parentElement.removeChild(removebanner5b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice6 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase6.briefcasevalue;
    let removebanner6b = document.querySelector('#bd6')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner6b.parentElement.removeChild(removebanner6b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice7 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase7.briefcasevalue;
    let removebanner7b = document.querySelector('#bd7')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner7b.parentElement.removeChild(removebanner7b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice8 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase8.briefcasevalue;
    let removebanner8b = document.querySelector('#bd8')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner8b.parentElement.removeChild(removebanner8b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice9 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase9.briefcasevalue;
    let removebanner9b = document.querySelector('#bd9')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner9b.parentElement.removeChild(removebanner9b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice10 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase10.briefcasevalue;
    let removebanner10b = document.querySelector('#bd10')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner10b.parentElement.removeChild(removebanner10b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice11 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase11.briefcasevalue;
    let removebanner11b = document.querySelector('#bd11')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner11b.parentElement.removeChild(removebanner11b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice12 = () =>{
    if(P1boxSelected >= P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected > 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase12.briefcasevalue;
    let removebanner12b = document.querySelector('#bd12')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner12b.parentElement.removeChild(removebanner12b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice13 = () =>{
    if(P1boxSelected >= P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected > 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase13.briefcasevalue;
    let removebanner13b = document.querySelector('#bd13')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner13b.parentElement.removeChild(removebanner13b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice14 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase14.briefcasevalue;
    let removebanner14b = document.querySelector('#bd14')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner14b.parentElement.removeChild(removebanner14b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice15 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase15.briefcasevalue;
    let removebanner15b = document.querySelector('#bd15')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner15b.parentElement.removeChild(removebanner15b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice16 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase16.briefcasevalue;
    let removebanner16b = document.querySelector('#bd16')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner16b.parentElement.removeChild(removebanner16b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice17 = () =>{
    if(P1boxSelected >= P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase1.briefcasevalue;
    let removebanner17b = document.querySelector('#bd17')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner17b.parentElement.removeChild(removebanner17b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice18 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase18.briefcasevalue;
    let removebanner18b = document.querySelector('#bd18')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner18b.parentElement.removeChild(removebanner18b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice19 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase19.briefcasevalue;
    let removebanner19b = document.querySelector('#bd19')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner19b.parentElement.removeChild(removebanner19b)
        showScore()
        gameOver()
}
showScore()

const p2briefCaseChoice20 = () =>{
    if(P1boxSelected > P2boxSelected){
        player2Turn()
    }
    if (P2boxSelected >= 11){
        return
    }
    p2Overall.value -= briefP2Amounts.briefcase20.briefcasevalue;
    let removebanner20b = document.querySelector('#bd20')
    P2boxSelected.innerHTML = P2boxSelected++;
    showCounter();
    removebanner20b.parentElement.removeChild(removebanner20b)
        showScore()
        gameOver()
}
showScore()
gameOver()

