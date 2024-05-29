const programs = [
  { id: 1, user_id: 1, name: '9D1/2/3 - Rings Chin-up', description: 'Full ROM', pattern: 'PULL' },
  { id: 2, user_id: 1, name: '9D1/2/3 - Dips', description: 'Tempo as long as possible', pattern: 'PUSH' },
  { id: 3, user_id: 1, name: '6D6 - Bench', description: 'Tempo as long as possible', is_completed: 1, pattern: 'PUSH' },
  { id: 4, user_id: 1, name: '10D1 - OHP', description: 'As clean as possible', is_completed: 1, pattern: 'PUSH' },
  { id: 5, user_id: 1, name: '9D1/2/3 - Squat', description: 'Full ROM with High Bar', is_completed: 1, pattern: 'LEGS' },
  { id: 13, user_id: 1, name: '9D2/3/5 - Squat', description: 'High Bar - Full ROM - tempo comp', is_completed: 0, pattern: 'LEGS' },
  { id: 14, user_id: 1, name: '9D2/3/5 - Deadlift', description: 'Start with High ROM and tempo', is_completed: 0, pattern: 'LEGS' },

  { id: 6, user_id: 2, name: '10D1 - Pull-up', description: 'High Pull-up', pattern: 'PULL' },
  { id: 7, user_id: 2, name: '9D1/2/3 - Dips', pattern: 'PUSH' },
  { id: 8, user_id: 2, name: '10D - Pull-up', description: 'Start with 10D4 and try to 10D6 clean', is_completed: 1, pattern: 'PULL' },
  { id: 9, user_id: 2, name: '12D2/3/4 - Pull-up', pattern: 'PULL' },
  { id: 10, user_id: 2, name: '6D6 - Bench', description: 'Tempo as long as possible', is_completed: 1, pattern: 'PUSH' },
  { id: 11, user_id: 2, name: '9D1/2/3 - Bench', description: 'Tempo as long as possible', is_completed: 1, pattern: 'PUSH' },
  { id: 12, user_id: 2, name: '9D1/2/3 - Squat', description: 'No equipment', is_completed: 1, pattern: 'LEGS' },
]

module.exports = programs;