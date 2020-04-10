import { CustomStyleProps } from './types';

interface ActionProps {
    type: string;
    payload: CustomStyleProps;
}

export const Reducer = (state: CustomStyleProps, action: ActionProps) => {
    switch (action.type) {
        case 'SET_STYLE':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
