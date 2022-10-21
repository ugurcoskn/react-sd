import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './store';

export enum ButtonType {
    TOP = 'top',
    BOTTOM = 'bottom',
}
export interface BoxStyle {
    color: string;
}

interface ButtonProps {
    type: ButtonType;
    text: string;
    top?: number;
    style?: BoxStyle;
}

const StyledBox = styled.div`
    background-color: transparent;
    position: absolute;
    text-align: center;
    top: ${(props: { top?: number }): string | number => (props.top ? `${props.top}px` : 0)};
`;

export const Box = ({ type, text, top, style }: ButtonProps) => {
    const { state } = useContext(Context);

    return (
        <StyledBox
            style={{
                ...style,
                border: `1px solid ${state.boxBorderColor}`,
                width: state.boxWidth,
                height: state.boxHeight,
                lineHeight: `${state.boxHeight}px`,
            }}
            top={type === ButtonType.BOTTOM ? top : 0}
        >
            {text}
        </StyledBox>
    );
};
