import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './store';
import { LeftPanelStyle } from './types';

const StyledLeftPanel = styled.div`
    position: absolute;
    width: ${(props: { customStyle?: any }): string | number =>
        props.customStyle.leftPanelWidth
            ? `${props.customStyle.leftPanelWidth + props.customStyle.leftPanelWidth}px`
            : 'auto'};
    top: ${(props: { customStyle?: any }): string | number =>
        props.customStyle.top ? `${props.customStyle.top + 12}px` : 0};
`;

interface LeftBarProps {
    style?: LeftPanelStyle;
    index: number;
    text: string | number;
}

export const LeftBar = ({ index, text, style }: LeftBarProps) => {
    const [state] = useContext(Context);

    const heightStyle = state.boxHeight + index * state.gapEdge + 20;

    const customStyle = {
        top: heightStyle,
        leftPanelWidth: state.leftPanelWidth,
    };
    return (
        <StyledLeftPanel customStyle={customStyle}>
            <div style={style}>{text}</div>
        </StyledLeftPanel>
    );
};
