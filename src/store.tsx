import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';

const initialState: any = {
    leftPanelWidth: 110,
    boxWidth: 100,
    boxHeight: 50,
    gapEdge: 80,
    gapStep: 110,
    boxBorderColor: '#18aebf',
    edgeLineColor: '#18aebf',
    edgePointColor: '#18aebf',
    stepLineWidth: 1,
    stepLineColor: '#18aebf',
};

export const Context = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const Store: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};
