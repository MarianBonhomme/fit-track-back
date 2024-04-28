const trainings = [
  { program_id: 1, date: '2024-03-20', weight: 20, is_validate: 1, difficulty: 1 },
  { program_id: 1, date: '2024-03-23', weight: 22.5, is_validate: 1, difficulty: 2 },
  { program_id: 1, date: '2024-03-27', weight: 25, is_validate: 1, difficulty: 2 },
  { program_id: 1, date: '2024-03-30', weight: 27.5, is_validate: 1, difficulty: 2 },
  { program_id: 1, date: '2024-04-03', weight: 30, is_validate: 1, difficulty: 3 },
  { program_id: 1, date: '2024-04-06', weight: 31.25, is_validate: 1, difficulty: 3 },
  { program_id: 1, date: '2024-04-09', weight: 32.5, is_validate: 1, difficulty: 3 },
  { program_id: 1, date: '2024-04-13', weight: 33.75, is_validate: 1, difficulty: 4 },
  { program_id: 1, date: '2024-04-15', weight: 35, is_validate: 1, difficulty: 4, comment: 'Fatigué' },
  { program_id: 1, date: '2024-04-18', weight: 36.25, is_validate: 1, difficulty: 3, comment: 'Facile' },
  { program_id: 1, date: '2024-04-21', weight: 37.5, is_validate: 1, difficulty: 4, comment: 'Kipping 2ème tour' },
  { program_id: 1, date: '2024-04-23', weight: 38.75, is_validate: 1, difficulty: 5 },
  { program_id: 1, date: '2024-04-27', weight: 40, is_validate: 1, difficulty: 5, comment: 'Kipping 2ème tour' },

  { program_id: 2, date: '2024-03-26', weight: 40, is_validate: 1, difficulty: 1, comment: 'tempo' },
  { program_id: 2, date: '2024-03-28', weight: 42.5, is_validate: 1, difficulty: 1, comment: 'tempo' },
  { program_id: 2, date: '2024-03-30', weight: 45, is_validate: 1, difficulty: 2, comment: 'tempo' },
  { program_id: 2, date: '2024-04-03', weight: 47.5, is_validate: 1, difficulty: 2, comment: 'tempo' },
  { program_id: 2, date: '2024-04-07', weight: 50, is_validate: 1, difficulty: 3, comment: 'tempo' },
  { program_id: 2, date: '2024-04-10', weight: 52.5, is_validate: 1, difficulty: 3, comment: 'tempo' },
  { program_id: 2, date: '2024-04-13', weight: 55, is_validate: 1, difficulty: 3, comment: 'tempo' },
  { program_id: 2, date: '2024-04-16', weight: 57.5, is_validate: 1, difficulty: 4, comment: 'Reprise du comp' },
  { program_id: 2, date: '2024-04-19', weight: 60, is_validate: 1, difficulty: 4, comment: 'Fatigué mais bien' },
  { program_id: 2, date: '2024-04-22', weight: 61.25, is_validate: 1, difficulty: 4 },
  { program_id: 2, date: '2024-04-25', weight: 62.5, is_validate: 1, difficulty: 5 },
  { program_id: 2, date: '2024-04-28', weight: 63.75, is_validate: 1, difficulty: 5, comment: 'Lendemain tacos' },

  { program_id: 13, date: '2024-04-24', weight: 40, is_validate: 1, difficulty: 1 },
  { program_id: 13, date: '2024-04-27', weight: 42.5, is_validate: 1, difficulty: 1 },

  { program_id: 14, date: '2024-04-24', weight: 63.75, is_validate: 1, difficulty: 1 },

  { program_id: 3, date: '2024-03-20', weight: 50, is_validate: 1, difficulty: 2 },
  { program_id: 3, date: '2024-03-23', weight: 52.5, is_validate: 1, difficulty: 2 },
  { program_id: 3, date: '2024-03-26', weight: 55, is_validate: 1, difficulty: 3 },
  { program_id: 3, date: '2024-03-28', weight: 57.5, is_validate: 1, difficulty: 3 },
  { program_id: 3, date: '2024-03-30', weight: 60, is_validate: 1, difficulty: 4 },
  { program_id: 3, date: '2024-04-03', weight: 62.5, is_validate: 1, difficulty: 5 },
  { program_id: 3, date: '2024-04-07', weight: 65, is_validate: 1, difficulty: 5, comment: 'Dur de tempo' },

  { program_id: 4, date: '2024-03-26', weight: 50, is_validate: 1, difficulty: 1 },
  { program_id: 4, date: '2024-03-28', weight: 52.5, is_validate: 1, difficulty: 1 },
  { program_id: 4, date: '2024-03-30', weight: 55, is_validate: 1, difficulty: 1 },
  { program_id: 4, date: '2024-03-03', weight: 57.5, is_validate: 1, difficulty: 1 },
  { program_id: 4, date: '2024-04-07', weight: 60, is_validate: 0, difficulty: 1, comment: 'Trop lourd' },

  { program_id: 5, date: '2024-04-08', weight: 60, is_validate: 1, difficulty: 2 },
  { program_id: 5, date: '2024-04-11', weight: 62.5, is_validate: 1, difficulty: 3 },
  { program_id: 5, date: '2024-04-15', weight: 65, is_validate: 1, difficulty: 3 },
  { program_id: 5, date: '2024-04-19', weight: 67.5, is_validate: 1, difficulty: 4, comment: 'Bonnes sensations' },

  { program_id: 6, date: '2024-03-24', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-03-26', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-03-28', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-01', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-03', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-06', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-09', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-11', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-13', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-16', weight: 0, is_validate: 1, difficulty: 1 },
  { program_id: 6, date: '2024-04-18', weight: 0, is_validate: 1, difficulty: 1 },

  { program_id: 7, date: '2024-03-24', weight: 5, is_validate: 1, difficulty: 1 },
  { program_id: 7, date: '2024-03-26', weight: 7.5, is_validate: 1, difficulty: 1 },
  { program_id: 7, date: '2024-03-28', weight: 10, is_validate: 1, difficulty: 1 },
  { program_id: 7, date: '2024-04-01', weight: 12.5, is_validate: 1, difficulty: 2 },
  { program_id: 7, date: '2024-04-03', weight: 15, is_validate: 1, difficulty: 2 },
  { program_id: 7, date: '2024-04-06', weight: 17.5, is_validate: 1, difficulty: 3 },
  { program_id: 7, date: '2024-04-09', weight: 18.75, is_validate: 1, difficulty: 3 },
  { program_id: 7, date: '2024-04-11', weight: 20, is_validate: 1, difficulty: 4 },
  { program_id: 7, date: '2024-04-13', weight: 21.5, is_validate: 1, difficulty: 4 },
  { program_id: 7, date: '2024-04-16', weight: 22.5, is_validate: 1, difficulty: 4 },
  { program_id: 7, date: '2024-04-19', weight: 23.75, is_validate: 1, difficulty: 4 },

  { program_id: 8, date: '2024-03-24', weight: 0, is_validate: 1, difficulty: 3, comment: '10D4'},
  { program_id: 8, date: '2024-03-26', weight: 0, is_validate: 1, difficulty: 4, comment: '5D5 + 5D4'},
  { program_id: 8, date: '2024-03-28', weight: 0, is_validate: 1, difficulty: 4, comment: '10D5' },
  { program_id: 8, date: '2024-04-01', weight: 0, is_validate: 1, difficulty: 5, comment: '3D6 + 7D5'},
  { program_id: 8, date: '2024-04-03', weight: 0, is_validate: 1, difficulty: 5, comment: '5D6 + 5D5'},
  { program_id: 8, date: '2024-04-06', weight: 0, is_validate: 0, difficulty: 5, comment: '7D6 + 3D5'},
  { program_id: 8, date: '2024-04-09', weight: 0, is_validate: 1, difficulty: 5, comment: '7D6 + 3D5'},
  { program_id: 8, date: '2024-04-11', weight: 0, is_validate: 0, difficulty: 5, comment: '10D6'},
  { program_id: 8, date: '2024-04-13', weight: 0, is_validate: 1, difficulty: 5, comment: '10D6'},

  { program_id: 9, date: '2024-04-16', weight: 2.5, is_validate: 1, difficulty: 1 },
  { program_id: 9, date: '2024-04-19', weight: 5, is_validate: 1, difficulty: 2 },

  { program_id: 10, date: '2024-03-24', weight: 30, is_validate: 1, difficulty: 2 },
  { program_id: 10, date: '2024-03-28', weight: 35, is_validate: 1, difficulty: 2 },
  { program_id: 10, date: '2024-04-01', weight: 37.5, is_validate: 1, difficulty: 2  },
  { program_id: 10, date: '2024-04-03', weight: 40, is_validate: 1, difficulty: 3 },
  { program_id: 10, date: '2024-04-06', weight: 41, is_validate: 1, difficulty: 4 },
  { program_id: 10, date: '2024-04-09', weight: 42.5, is_validate: 0, difficulty: 5, comment: "Trop lourd" },
  
  { program_id: 11, date: '2024-04-11', weight: 40, is_validate: 1, difficulty: 3 },
  { program_id: 11, date: '2024-04-13', weight: 42.5, is_validate: 1, difficulty: 3 },

  { program_id: 12, date: '2024-03-26', weight: 60, is_validate: 1, difficulty: 1 },
  { program_id: 12, date: '2024-03-29', weight: 65, is_validate: 1, difficulty: 1 },
  { program_id: 12, date: '2024-04-02', weight: 67.5, is_validate: 1, difficulty: 1 },
  { program_id: 12, date: '2024-04-04', weight: 70, is_validate: 1, difficulty: 2 },
  { program_id: 12, date: '2024-04-07', weight: 72.5, is_validate: 1, difficulty: 2 },
  { program_id: 12, date: '2024-04-09', weight: 75, is_validate: 1, difficulty: 2 },
  { program_id: 12, date: '2024-04-10', weight: 77.5, is_validate: 1, difficulty: 3 },
  { program_id: 12, date: '2024-04-13', weight: 80, is_validate: 1, difficulty: 3 },
  { program_id: 12, date: '2024-04-16', weight: 82.5, is_validate: 1, difficulty: 4, comment: "Douleur genoux" },
]

module.exports = trainings;