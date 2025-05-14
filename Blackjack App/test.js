let player1Time = 102;
let player2time =107;
 function getFasterRaceTime (){
    if(player1Time <player2time){
        return player1Time
    }else if( player2time < player1Time){
        return player2time
    }else{
        return player1Time
    }
 }
 const fasterPlayer = getFasterRaceTime();
 console.log(fasterPlayer)
 function totalRaceTime(){
    return player1Time+player2time;

 }
 let totalRace = totalRaceTime();
 console.log(totalRace)

  function rollDice (){
    return Math.floor(Math.random()*6) +1
  }
  console.log(rollDice());