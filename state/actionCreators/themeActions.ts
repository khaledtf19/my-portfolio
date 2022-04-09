import * as ActionTypes from "../storeTypes";

export const toDark = () => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.TODARK,
    });
  };
};

export const toLight = () => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.TOLIGHT,
    });
  };
};
