export const GameSettings = {
  // radios
  players: [
    { label: '2 Players', name: 'playerCount', value: '2 Players' },
    { label: '3 Players', name: 'playerCount', value: '3 Players' },
    { label: '4 Players', name: 'playerCount', value: '4 Players' },
    { label: '5 Players', name: 'playerCount', value: '5 Players' },
    { label: '6 Players', name: 'playerCount', value: '6 Players' },
  ],
  boardStyle: [
    // board layout
    {
      label: 'Monopoly (Round the edge)',
      name: 'boardStyle',
      value: 'Monopoly',
    },
    { label: 'Chess', name: 'boardStyle', value: 'Chess' },
    { label: 'Go', name: 'boardStyle', value: 'Go' },
  ],
  // checkboxes
  cardStyle: [
    // drawable cards
    { label: 'Resources', name: 'cardStyle', value: 'Resources' },
    { label: 'Attack', name: 'cardStyle', value: 'Attack' },
    { label: 'Defence', name: 'cardStyle', value: 'Defence' },
    { label: 'Magic', name: 'cardStyle', value: 'Magic' },
  ],
  playerPiecesStyle: [
    // player pieces
    { label: 'Monopoly', name: 'gpStyle', value: 'Monopoly' },
    { label: 'Chess', name: 'gpStyle', value: 'Chess' },
    { label: 'Go', name: 'gpStyle', value: 'Go' },
  ],
  gamePieceStyle: [
    // distributed pieces
    { label: 'Resources', name: 'gpStyle', value: 'Resources' },
  ],
};
