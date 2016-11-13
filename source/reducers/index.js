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
    case 'NEW_HERO': {
      const lastHeroId = state[state.length - 1].id;
      const newHeroId = lastHeroId + 1;

      return [
        ...state,
        {
          id: newHeroId,
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

    case 'HERO_DELETE': {
      if (!confirm('Вы действительно хотите удалить юзера?')) return state;

      return state.filter(item => item.id != action.id);
    }

    default: {
      return state;
    }
  }
}