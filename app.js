let briefP1Amounts = {
    briefcase1: {
        briefcasevalue:30000,
        url:"",
        banner:"",
    },
    briefcase2: {
        briefcasevalue:140000,
        url:"",
        banner:"",
    },
    briefcase3: {
        briefcasevalue:100000,
        url:"",
        banner:"",
    },
    briefcase4: {
        briefcasevalue:60000,
        url:"",
        banner:"",
    },
    briefcase5: {
        briefcasevalue:10000,
        url:"",
        banner:"",
    },
    briefcase6: {
        briefcasevalue:180000,
        url:"",
        banner:"",
    },
    briefcase7: {
        briefcasevalue:150000,
        url:"",
        banner:"",
    },
    briefcase8: {
        briefcasevalue:40000,
        url:"",
        banner:"",
    },
    briefcase9: {
        briefcasevalue:80000,
        url:"",
        banner:"",
    },
    briefcase10: {
        briefcasevalue:20000,
        url:"",
        banner:"",
    },
    briefcase11: {
        briefcasevalue:200000,
        url:"",
        banner:"",
    },
    briefcase12: {
        briefcasevalue:50000,
        url:"",
        banner:"",
    },
    briefcase13: {
        briefcasevalue:160000,
        url:"",
        banner:"",
    },
    briefcase14: {
        briefcasevalue:110000,
        url:"",
        banner:"",
    },
    briefcase15: {
        briefcasevalue:90000,
        url:"",
        banner:"",
    },
    briefcase16: {
        briefcasevalue:130000,
        url:"",
        banner:"",
    },
    briefcase17: {
        briefcasevalue:190000,
        url:"",
        banner:"",
    },
    briefcase18: {
        briefcasevalue:70000,
        url:"",
        banner:"",
    },
    briefcase19: {
        briefcasevalue:170000,
        url:"",
        banner:"",
    },
    briefcase20: {
        briefcasevalue:120000,
        url:"",
        banner:"",
    },
}

let briefP2Amounts = {
    briefcase1: {
        briefcasevalue:10000,
        url:"",
        banner:"",
    },
    briefcase2: {
        briefcasevalue:100000,
        url:"",
        banner:"",
    },
    briefcase3: {
        briefcasevalue:140000,
        url:"",
        banner:"",
    },
    briefcase4: {
        briefcasevalue:30000,
        url:"",
        banner:"",
    },
    briefcase5: {
        briefcasevalue:60000,
        url:"",
        banner:"",
    },
    briefcase6: {
        briefcasevalue:20000,
        url:"",
        banner:"",
    },
    briefcase7: {
        briefcasevalue:180000,
        url:"",
        banner:"",
    },
    briefcase8: {
        briefcasevalue:80000,
        url:"",
        banner:"",
    },
    briefcase9: {
        briefcasevalue:40000,
        url:"",
        banner:"",
    },
    briefcase10: {
        briefcasevalue:150000,
        url:"",
        banner:"",
    },
    briefcase11: {
        briefcasevalue:190000,
        url:"",
        banner:"",
    },
    briefcase12: {
        briefcasevalue:50000,
        url:"",
        banner:"",
    },
    briefcase13: {
        briefcasevalue:160000,
        url:"",
        banner:"",
    },
    briefcase14: {
        briefcasevalue:130000,
        url:"",
        banner:"",
    },
    briefcase15: {
        briefcasevalue:110000,
        url:"",
        banner:"",
    },
    briefcase16: {
        briefcasevalue:200000,
        url:"",
        banner:"",
    },
    briefcase17: {
        briefcasevalue:90000,
        url:"",
        banner:"",
    },
    briefcase18: {
        briefcasevalue:70000,
        url:"",
        banner:"",
    },
    briefcase19: {
        briefcasevalue:170000,
        url:"",
        banner:"",
    },
    briefcase20: {
        briefcasevalue:120000,
        url:"",
        banner:"",
    },
}
let p1Score = 2100000
let p2Score = 2100000

const showScore = () =>{
    let player1Score = document.querySelector('.score1')
    player1Score.innerHTML = p1Score
    let player2Score = document.querySelector('.score2')
    player2Score.innerHTML = p2Score
}
showScore()

const p1briefCaseChoice = () =>{
    p1briefCaseChoice -= briefP1Amounts.briefcase1
}
const gameOver = () =>{
    if(p1Score > p2Score){
        alert("Player 1 has won the game, good luck next time Player 2.")
    }else{
        alert("Player 2 has won the game, good luck next time Player 1.")
    }
}