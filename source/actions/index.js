export const addHero = name => {
  return {
    type: 'ADD_HEROE',
    id: Date.now(),
    name
  }
};