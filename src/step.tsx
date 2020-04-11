import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonType, Box } from './box';
import { Context } from './store';
import { StepStyle } from './types';

const StyledStep = styled.div`
    position: absolute;
    left: ${(props: { customStyle: StepStyleProps }): string | number =>
        props.customStyle.index
            ? `${props.customStyle.index * props.customStyle.gapHorizontal + props.customStyle.leftPanelWidth}px`
            : `${props.customStyle.leftPanelWidth}px`};
`;

interface StepProps {
    text: string;
    index: number;
    length: number;
    style?: StepStyle;
}

interface StepStyleProps {
    gapHorizontal: number;
    leftPanelWidth: number;
    index: number;
}

export const Step = ({ text, index, length, style }: StepProps) => {
    const [state] = useContext(Context);

    const customStyle = {
        gapHorizontal: state.gapStep,
        leftPanelWidth: state.leftPanelWidth,
        index,
    };

    return (
        <StyledStep style={style} customStyle={customStyle}>
            <Box style={style && style.topBoxStyle} type={ButtonType.TOP} text={text} />
            <Box
                top={state.gapEdge * length + state.boxHeight}
                style={style && style.bottomBoxStyle}
                type={ButtonType.BOTTOM}
                text={text}
            />
            <div className="line" style={{ height: `${state.gapEdge * length - 2}px` }} />
        </StyledStep>
    );
};
