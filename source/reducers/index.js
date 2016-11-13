const HEROES_DEFAULT = [
  {
    id: 1,
    name: 'Sergey'
  },
  {
    id: 2,
    name: 'Dmitry'
  },
  {
    id: 3,
    name: 'Sasha'
  },
  {
    id: 4,
    name: 'Alex'
  },
  {
    id: 5,
    name: 'Evgen'
  }
];

export default function heroes(state = HEROES_DEFAULT, action) {
  switch (action.type) {
    case 'ADD_HERO': {
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    }

    case 'EDIT_HERO': {
      const {id, target} = action;
      const newHeroes = [...state];

      newHeroes.forEach(item => {
        if (item.id === id) {
          item.name = target.target.value;
        }
      });


      return newHeroes;
    }

    default: {
      return state;
    }
  }
}