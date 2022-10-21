import React, { createContext, useReducer } from 'react';
import { initialState } from './const';
import { CustomStyleProps } from './types';

export interface ActionProps {
    type: string;
    payload: CustomStyleProps;
}

export enum ActionTypes {
    SET_STYLE = 'SET_STYLE',
}

const reducer = (state: CustomStyleProps, action: ActionProps) => {
    switch (action.type) {
        case ActionTypes.SET_STYLE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const Context = createContext<{
    state: CustomStyleProps;
    dispatch: React.Dispatch<ActionProps>;
}>({ state: initialState, dispatch: () => null });

export const Store = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
