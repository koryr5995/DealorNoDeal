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

const startGame = () =>{
    let aBriefCase1 = document.querySelector('.ship1')
    aBriefCase1.setAttribute('src',briefP1Amounts.briefcase1.url)
    let aBriefCase1banner = document.querySelector('.ship2')
    aBriefCase1banner.setAttribute('src',briefP1Amounts.briefcase2.banner)
    let aBriefCase2 = document.querySelector('.ship1')
    aBriefCase2.setAttribute('src',briefP1Amounts.briefcase2.url)
    let aBriefCase2banner = document.querySelector('.ship2')
    aBriefCase2banner.setAttribute('src',briefP1Amounts.briefcase2.banner)
    let aBriefCase3 = document.querySelector('.ship1')
    aBriefCase3.setAttribute('src',briefP1Amounts.briefcase3.url)
    let aBriefCase3banner = document.querySelector('.ship2')
    aBriefCase3banner.setAttribute('src',briefP1Amounts.briefcase3.banner)
    let aBriefCase4 = document.querySelector('.ship1')
    aBriefCase4.setAttribute('src',briefP1Amounts.briefcase4.url)
    let aBriefCase4banner = document.querySelector('.ship2')
    aBriefCase4banner.setAttribute('src',briefP1Amounts.briefcase4.banner)
    let aBriefCase5 = document.querySelector('.ship1')
    aBriefCase5.setAttribute('src',briefP1Amounts.briefcase5.url)
    let aBriefCase5banner = document.querySelector('.ship2')
    aBriefCase5banner.setAttribute('src',briefP1Amounts.briefcase5.banner)
    let aBriefCase6 = document.querySelector('.ship1')
    aBriefCase6.setAttribute('src',briefP1Amounts.briefcase6.url)
    let aBriefCase6banner = document.querySelector('.ship2')
    aBriefCase1banner.setAttribute('src',briefP1Amounts.briefcase6.banner)
    let aBriefCase7 = document.querySelector('.ship1')
    aBriefCase7.setAttribute('src',briefP1Amounts.briefcase7.url)
    let aBriefCase7banner = document.querySelector('.ship2')
    aBriefCase7banner.setAttribute('src',briefP1Amounts.briefcase7.banner)
    let aBriefCase8 = document.querySelector('.ship1')
    aBriefCase8.setAttribute('src',briefP1Amounts.briefcase8.url)
    let aBriefCase8banner = document.querySelector('.ship2')
    aBriefCase8banner.setAttribute('src',briefP1Amounts.briefcase8.banner)
    let aBriefCase9 = document.querySelector('.ship1')
    aBriefCase9.setAttribute('src',briefP1Amounts.briefcase9.url)
    let aBriefCase9banner = document.querySelector('.ship2')
    aBriefCase9banner.setAttribute('src',briefP1Amounts.briefcase9.banner)
    let aBriefCase10 = document.querySelector('.ship1')
    aBriefCase10.setAttribute('src',briefP1Amounts.briefcase10.url)
    let aBriefCase10banner = document.querySelector('.ship2')
    aBriefCase10banner.setAttribute('src',briefP1Amounts.briefcase10.banner)
    let aBriefCase11 = document.querySelector('.ship1')
    aBriefCase11.setAttribute('src',briefP1Amounts.briefcase11.url)
    let aBriefCase11banner = document.querySelector('.ship2')
    aBriefCase11banner.setAttribute('src',briefP1Amounts.briefcase11.banner)
    let aBriefCase12 = document.querySelector('.ship1')
    aBriefCase12.setAttribute('src',briefP1Amounts.briefcase12.url)
    let aBriefCase12banner = document.querySelector('.ship2')
    aBriefCase12banner.setAttribute('src',briefP1Amounts.briefcase12.banner)
    let aBriefCase13 = document.querySelector('.ship1')
    aBriefCase13.setAttribute('src',briefP1Amounts.briefcase13.url)
    let aBriefCase13banner = document.querySelector('.ship2')
    aBriefCase13banner.setAttribute('src',briefP1Amounts.briefcase13.banner)
    let aBriefCase14 = document.querySelector('.ship1')
    aBriefCase14.setAttribute('src',briefP1Amounts.briefcase14.url)
    let aBriefCase14banner = document.querySelector('.ship2')
    aBriefCase14banner.setAttribute('src',briefP1Amounts.briefcase14.banner)
    let aBriefCase15 = document.querySelector('.ship1')
    aBriefCase15.setAttribute('src',briefP1Amounts.briefcase15.url)
    let aBriefCase15banner = document.querySelector('.ship2')
    aBriefCase15banner.setAttribute('src',briefP1Amounts.briefcase15.banner)
    let aBriefCase16 = document.querySelector('.ship1')
    aBriefCase16.setAttribute('src',briefP1Amounts.briefcase16.url)
    let aBriefCase16banner = document.querySelector('.ship2')
    aBriefCase16banner.setAttribute('src',briefP1Amounts.briefcase16.banner)
    let aBriefCase17 = document.querySelector('.ship1')
    aBriefCase17.setAttribute('src',briefP1Amounts.briefcase17.url)
    let aBriefCase17banner = document.querySelector('.ship2')
    aBriefCase17banner.setAttribute('src',briefP1Amounts.briefcase17.banner)
    let aBriefCase18 = document.querySelector('.ship1')
    aBriefCase18.setAttribute('src',briefP1Amounts.briefcase18.url)
    let aBriefCase18banner = document.querySelector('.ship2')
    aBriefCase18banner.setAttribute('src',briefP1Amounts.briefcase18.banner)
    let aBriefCase19 = document.querySelector('.ship1')
    aBriefCase19.setAttribute('src',briefP1Amounts.briefcase19.url)
    let aBriefCase19banner = document.querySelector('.ship2')
    aBriefCase19banner.setAttribute('src',briefP1Amounts.briefcase19.banner)
    let aBriefCase20 = document.querySelector('.ship1')
    aBriefCase20.setAttribute('src',briefP1Amounts.briefcase20.url)
    let aBriefCase20banner = document.querySelector('.ship2')
    aBriefCase20banner.setAttribute('src',briefP1Amounts.briefcase20.banner)
    let bBriefCase1 = document.querySelector('.ship1')
    bBriefCase1.setAttribute('src',briefP2Amounts.briefcase1.url)
    let bBriefCase1banner = document.querySelector('.ship2')
    bBriefCase1banner.setAttribute('src',briefP2Amounts.briefcase2.banner)
    let bBriefCase2 = document.querySelector('.ship1')
    bBriefCase2.setAttribute('src',briefP2Amounts.briefcase2.url)
    let bBriefCase2banner = document.querySelector('.ship2')
    bBriefCase2banner.setAttribute('src',briefP2Amounts.briefcase2.banner)
    let bBriefCase3 = document.querySelector('.ship1')
    bBriefCase3.setAttribute('src',briefP2Amounts.briefcase3.url)
    let bBriefCase3banner = document.querySelector('.ship2')
    bBriefCase3banner.setAttribute('src',briefP2Amounts.briefcase3.banner)
    let bBriefCase4 = document.querySelector('.ship1')
    bBriefCase4.setAttribute('src',briefP2Amounts.briefcase4.url)
    let bBriefCase4banner = document.querySelector('.ship2')
    bBriefCase4banner.setAttribute('src',briefP2Amounts.briefcase4.banner)
    let bBriefCase5 = document.querySelector('.ship1')
    bBriefCase5.setAttribute('src',briefP2Amounts.briefcase5.url)
    let bBriefCase5banner = document.querySelector('.ship2')
    bBriefCase5banner.setAttribute('src',briefP2Amounts.briefcase5.banner)
    let bBriefCase6 = document.querySelector('.ship1')
    bBriefCase6.setAttribute('src',briefP2Amounts.briefcase6.url)
    let bBriefCase6banner = document.querySelector('.ship2')
    bBriefCase6banner.setAttribute('src',briefP2Amounts.briefcase6.banner)
    let bBriefCase7 = document.querySelector('.ship1')
    bBriefCase7.setAttribute('src',briefP2Amounts.briefcase7.url)
    let bBriefCase7banner = document.querySelector('.ship2')
    bBriefCase7banner.setAttribute('src',briefP2Amounts.briefcase7.banner)
    let bBriefCase8 = document.querySelector('.ship1')
    bBriefCase8.setAttribute('src',briefP2Amounts.briefcase8.url)
    let bBriefCase8banner = document.querySelector('.ship2')
    bBriefCase8banner.setAttribute('src',briefP2Amounts.briefcase8.banner)
    let bBriefCase9 = document.querySelector('.ship1')
    bBriefCase9.setAttribute('src',briefP2Amounts.briefcase9.url)
    let bBriefCase9banner = document.querySelector('.ship2')
    bBriefCase9banner.setAttribute('src',briefP2Amounts.briefcase9.banner)
    let bBriefCase10 = document.querySelector('.ship1')
    bBriefCase10.setAttribute('src',briefP2Amounts.briefcase10.url)
    let bBriefCase10banner = document.querySelector('.ship2')
    bBriefCase10banner.setAttribute('src',briefP2Amounts.briefcase10.banner)
    let bBriefCase11 = document.querySelector('.ship1')
    bBriefCase11.setAttribute('src',briefP2Amounts.briefcase11.url)
    let bBriefCase11banner = document.querySelector('.ship2')
    bBriefCase11banner.setAttribute('src',briefP2Amounts.briefcase11.banner)
    let bBriefCase12 = document.querySelector('.ship1')
    bBriefCase12.setAttribute('src',briefP2Amounts.briefcase12.url)
    let bBriefCase12banner = document.querySelector('.ship2')
    bBriefCase12banner.setAttribute('src',briefP2Amounts.briefcase12.banner)
    let bBriefCase13 = document.querySelector('.ship1')
    bBriefCase13.setAttribute('src',briefP2Amounts.briefcase13.url)
    let bBriefCase13banner = document.querySelector('.ship2')
    bBriefCase13banner.setAttribute('src',briefP2Amounts.briefcase13.banner)
    let bBriefCase14 = document.querySelector('.ship1')
    bBriefCase14.setAttribute('src',briefP2Amounts.briefcase14.url)
    let bBriefCase14banner = document.querySelector('.ship2')
    bBriefCase14banner.setAttribute('src',briefP2Amounts.briefcase14.banner)
    let bBriefCase15 = document.querySelector('.ship1')
    bBriefCase15.setAttribute('src',briefP2Amounts.briefcase15.url)
    let bBriefCase15banner = document.querySelector('.ship2')
    bBriefCase15banner.setAttribute('src',briefP2Amounts.briefcase15.banner)
    let bBriefCase16 = document.querySelector('.ship1')
    bBriefCase16.setAttribute('src',briefP2Amounts.briefcase16.url)
    let bBriefCase16banner = document.querySelector('.ship2')
    bBriefCase16banner.setAttribute('src',briefP2Amounts.briefcase16.banner)
    let bBriefCase17 = document.querySelector('.ship1')
    bBriefCase17.setAttribute('src',briefP2Amounts.briefcase17.url)
    let bBriefCase17banner = document.querySelector('.ship2')
    aBriefCase17banner.setAttribute('src',briefP2Amounts.briefcase17.banner)
    let bBriefCase18 = document.querySelector('.ship1')
    bBriefCase18.setAttribute('src',briefP2Amounts.briefcase18.url)
    let bBriefCase18banner = document.querySelector('.ship2')
    bBriefCase18banner.setAttribute('src',briefP2Amounts.briefcase18.banner)
    let bBriefCase19 = document.querySelector('.ship1')
    bBriefCase19.setAttribute('src',briefP2Amounts.briefcase19.url)
    let bBriefCase19banner = document.querySelector('.ship2')
    bBriefCase19banner.setAttribute('src',briefP2Amounts.briefcase19.banner)
    let bBriefCase20 = document.querySelector('.ship1')
    bBriefCase20.setAttribute('src',briefP2Amounts.briefcase20.url)
    let bBriefCase20banner = document.querySelector('.ship2')
    bBriefCase20banner.setAttribute('src',briefP2Amounts.briefcase20.banner)
}

const p1briefCaseChoice1 = () =>{
    p1Score -= briefP1Amounts.briefcase1.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice2 = () =>{
    p1Score -= briefP1Amounts.briefcase2.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice3 = () =>{
    p1Score -= briefP1Amounts.briefcase3.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice4 = () =>{
    p1Score -= briefP1Amounts.briefcase4.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice5 = () =>{
    p1Score -= briefP1Amounts.briefcase5.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice6 = () =>{
    p1Score -= briefP1Amounts.briefcase6.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice7 = () =>{
    p1Score -= briefP1Amounts.briefcase7.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice8 = () =>{
    p1Score -= briefP1Amounts.briefcase8.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice9 = () =>{
    p1Score -= briefP1Amounts.briefcase9.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice10 = () =>{
    p1Score -= briefP1Amounts.briefcase10.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice11 = () =>{
    p1Score -= briefP1Amounts.briefcase11.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice12 = () =>{
    p1Score -= briefP1Amounts.briefcase12.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice13 = () =>{
    p1Score -= briefP1Amounts.briefcase13.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

const p1briefCaseChoice14 = () =>{
    p1Score -= briefP1Amounts.briefcase14.briefcasevalue = p1Score();
    document.getElementsByClassName("");
    Element.remove();
    document.getElementsByClassName("");
    Element.remove();
}
p1Score()

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