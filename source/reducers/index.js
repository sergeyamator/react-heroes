export default function heroes(state = [], action) {
  switch (action.type) {
    case 'ADD_HEROE': {
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    }

    default: {
      return state;
    }
  }
}