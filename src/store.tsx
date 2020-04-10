import React, { createContext, useReducer } from 'react';
import { Reducer } from './reducer';

const initialState: any = {
    leftPanelWidth: 110,
    boxWidth: 200,
    boxHeight: 40,
    gapVerticalBox: 80,
    gapHorizontalBox: 110,
    GAP_VERTICAL_BOX: 80,
    GAP_HORIZONTAL_BOX: 210,
    LEFT_PANEL_MARGIN: 11,
    BOX_BORDER_COLOR: '#18aebf',
    EDGE_LINE_COLOR: '#18aebf',
    EDGE_POINT_COLOR: '#18aebf',
    HORIZONTAL_LINE_WIDTH: 1,
    HORIZONTAL_LINE_COLOR: '#18aebf',
};

export const Context = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const Store: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};
