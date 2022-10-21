import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './store';
import { CustomStyleProps, LeftPanelStyle } from './types';

const StyledLeftPanel = styled.div<{ customStyle: Partial<CustomStyleProps> }>`
    position: absolute;
    width: ${({ customStyle }) =>
        customStyle.leftPanelWidth ? `${customStyle.leftPanelWidth + customStyle.leftPanelWidth}px` : 'auto'};
    top: ${({ customStyle }) => (customStyle.top ? `${customStyle.top + 12}px` : 0)};
`;

interface LeftBarProps {
    style?: LeftPanelStyle;
    index: number;
    text: string | number;
}

export const LeftBar = ({ index, text, style }: LeftBarProps) => {
    const { state } = useContext(Context);

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
