export const addHeroe = name => {
  return {
    type: 'ADD_HEROE',
    id: Date.now(),
    name
  }
};