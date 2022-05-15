export const initialState = {
  media: [],
}

export const MediaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEDIA_FILE': {
      return {
        ...state,
        media: [...state.media, action.media],
      }
    }

    case 'REMOVE_MEDIA_FILE': {
      return {
        ...state,
        media: state.media.filter((item) => item !== action.media),
      }
    }

    case 'REMOVE_ALL_MEDIA': {
      return {
        ...state,
        media: [],
      }
    }

    default: {
      return state
    }
  }
}
