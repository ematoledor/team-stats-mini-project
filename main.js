const team = {
  _players: [
    {
      firstName: 'Ema',
      lastName: 'Toledo',
      age: 27
    },
    {
      firstName: 'Carlos',
      lastName: 'Suarez',
      age: 13
    },
    {
      firstName: 'Jorge',
      lastName: 'F',
      age: 230
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 33,
      opponentPoints: 22
    },
    {
      opponent: 'Cruz',
      teamPoints: 34,
      opponentPoints: 12
    },
    {
      opponent: 'Aguilas',
      teamPoints: 22,
      opponentPoints: 99
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame (opponentName, teamsPoints, opponentsPoints) {
    let game = {
      opponentName: opponentName,
      teamsPoints: teamsPoints,
      opponentsPoints: opponentsPoints
    };
    this.games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Lobos', 40, 20);
team.addGame('Pericos', 50, 500);
team.addGame('Saca', 20, 600);

console.log(team.players);
console.log(team.games);