function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    
    }
  }
 

  console.log(gameObject());
  
function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].points;
      }
    }
   }
   return null;
}
function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].shoe;
      }
    }
  }
  return null;
}

function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  return null;
}

function teamNames() {
  const game = gameObject();
  const teamNames = [];
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      teamNames.push(game[team].teamName);
    }
  }
  return teamNames;
}
  
function playerNumbers(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team) && game[team].teamName === teamName) {
      const jerseyNumbers = [];
      const players = game[team].players;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          jerseyNumbers.push(players[player].number);
        }
      }
      return jerseyNumbers;
    }
  }
}
 
function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    for (const player in players) {
      if (players[player].playerName === playerName) {
        return players[player];
      }
    }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = -Infinity;
  let playerWithLargestShoeSize;

  // Find the player with the largest shoe size
  for (team in game) {
    let teamObj = game[team];
    for (player in teamObj.players) {
      let playerObj = teamObj.players[player];
      if (playerObj.shoe > largestShoeSize) {
        largestShoeSize = playerObj.shoe;
        playerWithLargestShoeSize = playerObj;
      }
    }
  }

  // Return that player's number of rebounds
  return playerWithLargestShoeSize.rebounds;
}

function mostPointsScored() {
  let game = gameObject();
  let mostPoints = -Infinity;
  let playerWithMostPoints;

  // Find the player with the most points
  for (team in game) {
    let teamObj = game[team];
    for (player in teamObj.players) {
      let playerObj = teamObj.players[player];
      if (playerObj.points > mostPoints) {
        mostPoints = playerObj.points;
        playerWithMostPoints = playerObj;
      }
    }
  }

  // Return that player's name
  return playerWithMostPoints.playerName;
}

function winningTeam() {
  let game = gameObject();
  let highestScore = -Infinity;
  let teamWithHighestScore;
 // Find the team with the highest score
 for (team in game) {
  let teamObj = game[team];
  let teamScore = 0;
  for (player in teamObj.players) {
    let playerObj = teamObj.players[player];
    teamScore += playerObj.points;
  }
  if (teamScore > highestScore) {
    highestScore = teamScore;
    teamWithHighestScore = teamObj.teamName;
  }
}

// Return that team's name
return teamWithHighestScore;
}

function playerWithLongestName() {
let game = gameObject();
let longestNameLength = -Infinity;
let playerWithLongestName;
// Find the player with the longest name
for (team in game) {
  let teamObj = game[team];
  for (player in teamObj.players) {
    let playerNameLength = teamObj.players[player].playerName.length;
    if (playerNameLength > longestNameLength) {
      longestNameLength = playerNameLength;
      playerWithLongestName = teamObj.players[player].playerName;
    }
  }
}

// Return that player's name
return playerWithLongestName;
}

function doesLongNameStealATon() {
  let game = gameObject();
  let longNamePlayer = '';
  let mostSteals = 0;
  
  // Find player with longest name
  for (team in game) {
    let teamObj = game[team];
    for (playerName in teamObj.players) {
      let player = teamObj.players[playerName];
      if (playerName.length > longNamePlayer.length) {
        longNamePlayer = playerName;
      }
    }
  }
  
  // Check if player with longest name had most steals
  for (team in game) {
    let teamObj = game[team];
    for (playerName in teamObj.players) {
      let player = teamObj.players[playerName];
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
        if (playerName === longNamePlayer) {
          return true;
        }
      }
    }
  }
  
  return false; // If the player with longest name did not have the most steals
}