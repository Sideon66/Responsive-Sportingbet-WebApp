"use strict";

////ROUND 1
const gamesRound1 = [
  {
    id: 0,
    dateTime: "20.11 18:00",
    game: "Qatar - Ecuador",
    odds: {
      odd1: "3.30",
      oddx: "3.20",
      odd2: "2.30",
    },
  },
  {
    id: 1,
    dateTime: "21.11 15:00",
    game: "England - Iran",
    odds: {
      odd1: "1.32",
      oddx: "5.15",
      odd2: "10.00",
    },
  },
  {
    id: 2,
    dateTime: "21.11 18:00",
    game: "Senegal - Netherlands",
    odds: {
      odd1: "5.25",
      oddx: "3.75",
      odd2: "1.68",
    },
  },
  {
    id: 3,
    dateTime: "21.11 21:00",
    game: "USA - Wales",
    odds: {
      odd1: "2.80",
      oddx: "3.15",
      odd2: "2.65",
    },
  },
  {
    id: 4,
    dateTime: "22.11 12:00",
    game: "Argentina - Saudi Arabia",
    odds: {
      odd1: "1.23",
      oddx: "7.00",
      odd2: "11.00",
    },
  },
  {
    id: 5,
    dateTime: "22.11 15:00",
    game: "Denmark - Tunisia",
    odds: {
      odd1: "1.50",
      oddx: "3.85",
      odd2: "8.00",
    },
  },
  {
    id: 6,
    dateTime: "22.11 18:00",
    game: "Mexico - Poland",
    odds: {
      odd1: "2.60",
      oddx: "3.30",
      odd2: "2.75",
    },
  },
  {
    id: 7,
    dateTime: "22.11 21:00",
    game: "France - Australia",
    odds: {
      odd1: "1.20",
      oddx: "7.25",
      odd2: "13.00",
    },
  },
  {
    id: 8,
    dateTime: "23.11 12:00",
    game: "Morocco - Croatia",
    odds: {
      odd1: "5.00",
      oddx: "3.30",
      odd2: "1.82",
    },
  },
  {
    id: 9,
    dateTime: "23.11 15:00",
    game: "Germany - Japan",
    odds: {
      odd1: "1.35",
      oddx: "5.05",
      odd2: "8.80",
    },
  },
  {
    id: 10,
    dateTime: "23.11 18:00",
    game: "Spain - Costa Rica",
    odds: {
      odd1: "1.27",
      oddx: "5.75",
      odd2: "12.00",
    },
  },
  {
    id: 11,
    dateTime: "23.11 21:00",
    game: "Belgium - Canada",
    odds: {
      odd1: "1.30",
      oddx: "5.40",
      odd2: "10.50",
    },
  },
  {
    id: 12,
    dateTime: "24.11 12:00",
    game: "Switzerland - Cameroon",
    odds: {
      odd1: "1.85",
      oddx: "3.30",
      odd2: "4.85",
    },
  },
  {
    id: 13,
    dateTime: "24.11 15:00",
    game: "Uruguay - South Korea",
    odds: {
      odd1: "1.75",
      oddx: "3.45",
      odd2: "5.25",
    },
  },
  {
    id: 14,
    dateTime: "24.11 18:00",
    game: "Portugal - Ghana",
    odds: {
      odd1: "1.52",
      oddx: "3.95",
      odd2: "7.15",
    },
  },
  {
    id: 15,
    dateTime: "24.11 21:00",
    game: "Brazil - Serbia",
    odds: {
      odd1: "1.50",
      oddx: "4.10",
      odd2: "7.20",
    },
  },
];

////ROUND 2

const gamesRound2 = [
  {
    id: 16,
    dateTime: "25.11 12:00",
    game: "Wales - Iran",
    odds: {
      odd1: "2.13",
      oddx: "3.15",
      odd2: "3.70",
    },
  },
  {
    id: 17,
    dateTime: "25.11 15:00",
    game: "Qatar - Senegal",
    odds: {
      odd1: "3.75",
      oddx: "3.35",
      odd2: "2.01",
    },
  },
  {
    id: 18,
    dateTime: "25.11 18:00",
    game: "Netherlands - Ecuador",
    odds: {
      odd1: "1.65",
      oddx: "3.80",
      odd2: "5.20",
    },
  },
  {
    id: 19,
    dateTime: "25.11 21:00",
    game: "England - USA",
    odds: {
      odd1: "1.67",
      oddx: "3.70",
      odd2: "5.20",
    },
  },
  {
    id: 20,
    dateTime: "26.11 12:00",
    game: "Tunisia - Australia",
    odds: {
      odd1: "2.75",
      oddx: "2.95",
      odd2: "2.80",
    },
  },
  {
    id: 21,
    dateTime: "26.11 15:00",
    game: "Poland - Saudi Arabia",
    odds: {
      odd1: "1.65",
      oddx: "3.75",
      odd2: "5.40",
    },
  },
  {
    id: 22,
    dateTime: "26.11 18:00",
    game: "France - Denmark",
    odds: {
      odd1: "1.88",
      oddx: "3.40",
      odd2: "4.30",
    },
  },
  {
    id: 23,
    dateTime: "26.11 21:00",
    game: "Argentina - Mexico",
    odds: {
      odd1: "1.68",
      oddx: "3.65",
      odd2: "5.20",
    },
  },
  {
    id: 24,
    dateTime: "27.11 12:00",
    game: "Japan - Costa Rica",
    odds: {
      odd1: "2.41",
      oddx: "3.05",
      odd2: "3.15",
    },
  },
  {
    id: 25,
    dateTime: "27.11 15:00",
    game: "Belgium - Morocco",
    odds: {
      odd1: "1.54",
      oddx: "4.10",
      odd2: "5.80",
    },
  },
  {
    id: 26,
    dateTime: "27.11 18:00",
    game: "Croatia - Canada",
    odds: {
      odd1: "1.78",
      oddx: "3.60",
      odd2: "4.50",
    },
  },
  {
    id: 27,
    dateTime: "27.11 21:00",
    game: "Spain - Germany",
    odds: {
      odd1: "2.50",
      oddx: "3.20",
      odd2: "2.85",
    },
  },
  {
    id: 28,
    dateTime: "28.11 12:00",
    game: "Cameroon - Serbia",
    odds: {
      odd1: "3.35",
      oddx: "3.10",
      odd2: "2.30",
    },
  },
  {
    id: 29,
    dateTime: "28.11 15:00",
    game: "South Korea - Ghana",
    odds: {
      odd1: "2.65",
      oddx: "2.90",
      odd2: "2.95",
    },
  },
  {
    id: 30,
    dateTime: "28.11 18:00",
    game: "Brazil - Switzerland",
    odds: {
      odd1: "1.49",
      oddx: "4.20",
      odd2: "6.40",
    },
  },
  {
    id: 31,
    dateTime: "28.11 21:00",
    game: "Portugal - Uruguay",
    odds: {
      odd1: "2.10",
      oddx: "3.30",
      odd2: "3.60",
    },
  },
];

////ROUND 3

const gamesRound3 = [
  {
    id: 32,
    dateTime: "29.11 17:00",
    game: "Ecuador - Senegal",
    odds: {
      odd1: "2.90",
      oddx: "3.20",
      odd2: "2.50",
    },
  },
  {
    id: 33,
    dateTime: "29.11 17:00",
    game: "Netherlands - Qatar",
    odds: {
      odd1: "1.31",
      oddx: "5.40",
      odd2: "10.00",
    },
  },
  {
    id: 34,
    dateTime: "29.11 21:00",
    game: "Iran - Usa",
    odds: {
      odd1: "3.70",
      oddx: "3.30",
      odd2: "2.08",
    },
  },
  {
    id: 35,
    dateTime: "29.11 21:00",
    game: "Wales - England",
    odds: {
      odd1: "6.20",
      oddx: "3.80",
      odd2: "1.53",
    },
  },
  {
    id: 36,
    dateTime: "30.11 17:00",
    game: "Australia - Denmark",
    odds: {
      odd1: "6.00",
      oddx: "4.00",
      odd2: "1.50",
    },
  },
  {
    id: 37,
    dateTime: "30.11 17:00",
    game: "Tunisia - France",
    odds: {
      odd1: "11.00",
      oddx: "6.40",
      odd2: "1.23",
    },
  },
  {
    id: 38,
    dateTime: "30.11 21:00",
    game: "Poland - Argentina",
    odds: {
      odd1: "5.67",
      oddx: "3.40",
      odd2: "1.70",
    },
  },
  {
    id: 39,
    dateTime: "30.11 21:00",
    game: "Saudi Arabia - Mexico",
    odds: {
      odd1: "6.40",
      oddx: "3.75",
      odd2: "1.56",
    },
  },
  {
    id: 40,
    dateTime: "01.11 17:00",
    game: "Canada - Morocco",
    odds: {
      odd1: "3.00",
      oddx: "3.20",
      odd2: "2.40",
    },
  },
  {
    id: 41,
    dateTime: "01.11 17:00",
    game: "Croatia - Belgium",
    odds: {
      odd1: "4.20",
      oddx: "3.45",
      odd2: "1.90",
    },
  },
  {
    id: 42,
    dateTime: "01.11 21:00",
    game: "Costa Rica - Germany",
    odds: {
      odd1: "11.50",
      oddx: "6.40",
      odd2: "1.22",
    },
  },
  {
    id: 43,
    dateTime: "01.11 21:00",
    game: "Japan - Spain",
    odds: {
      odd1: "10.50",
      oddx: "5.40",
      odd2: "1.30",
    },
  },
  {
    id: 44,
    dateTime: "02.11 17:00",
    game: "Ghana - Uruguay",
    odds: {
      odd1: "4.50",
      oddx: "3.40",
      odd2: "1.85",
    },
  },
  {
    id: 45,
    dateTime: "02.11 17:00",
    game: "South Korea - Portugal",
    odds: {
      odd1: "8.00",
      oddx: "4.25",
      odd2: "1.45",
    },
  },
  {
    id: 46,
    dateTime: "02.11 21:00",
    game: "Cameroon - Brazil",
    odds: {
      odd1: "8.80",
      oddx: "5.00",
      odd2: "1.36",
    },
  },
  {
    id: 47,
    dateTime: "02.11 21:00",
    game: "Serbia - Switzerland",
    odds: {
      odd1: "2.90",
      oddx: "3.35",
      odd2: "2.15",
    },
  },
];
