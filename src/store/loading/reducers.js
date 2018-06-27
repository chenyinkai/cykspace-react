export const loading = (state = { isShow: true }, action = {}) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, ...{ isShow: action.isShow } }
    case 'HIDE':
      return { ...state, ...{ isShow: action.isShow } }
    case 'CHANGESTATE':
      return { ...state, ...{ isShow: action.isShow } }
    default:
      return state
  }
}
