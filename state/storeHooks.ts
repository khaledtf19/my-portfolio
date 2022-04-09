import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { RootState } from "./store";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
