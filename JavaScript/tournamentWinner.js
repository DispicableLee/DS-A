const c = [["html", "c#"],["c#", "Python"],["Python", "html"]]
const results = [0,0,1]

console.log(c[0])

const HOME_TEAM_WON = 1

function tournamentWinner(c, r) {
  //instantiate empty currentBestTeam string
  let currentBestTeam = ''

  //instantiate a scores object with the currentBestTeam's value/score equal to 0
  const scores = {[currentBestTeam]: 0}

  //loop through the competition array
  for(let idx = 0; idx <c.length;idx++){

    //set a result constant as each element in the results array
    const result = r[idx]

    //set an array depicting both homeTeam and awayTeam as each element in the competition array
    const [homeTeam, awayteam] = c[idx]

    //set the winningTeam variable depending on whether or not the result constant (the element in the results array) is equal to 1
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayteam

    //HELPER FUNCTION
    updateScores(winningTeam, 3, scores)
    
    //if the score of the winningTeam is greater than the score of the currentBestTeam, set the currentBestTeam to winningTeam
    if(scores[winningTeam] > scores[currentBestTeam]){
      currentBestTeam = winningTeam
    }
  }
  return currentBestTeam
}
//HELPER FUNCTION that checks whether or not the team argument is in the scores object.
// if it is not, add it into the scores array and set it's value to zero, then add it by three.
// if it is, ad the team value by three
function updateScores(team, points, scores){
  if(!(team in scores)) scores[team] = 0
  scores[team] += points
}

console.log(tournamentWinner(c,results))