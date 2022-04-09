import * as ActionTypes from "../storeTypes";

const reducer = (state = ActionTypes.TODARK, action: ThemeAction) => {
  switch (action.type) {
    case ActionTypes.TODARK:
      return ActionTypes.TODARK;
    case ActionTypes.TOLIGHT:
      return ActionTypes.TOLIGHT;
    default:
      return state;
  }
};

export default reducer;
