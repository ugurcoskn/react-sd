import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from './store';
import { CustomStyleProps } from './types';

const StyledApp = styled.div<{ style: CustomStyleProps }>`
    .line {
        position: absolute;
        top: ${(props): string => `${props.style.boxHeight + 2}px`};
        left: ${(props): string => `${props.style.boxWidth / 2}px`};
        width: ${(props): string => `${props.style.stepLineWidth}px`};
        background-color: ${(props): string => props.style.stepLineColor};
    }

    .box {
        border: ${(props): string => `1px solid ${props.style.boxBorderColor}`};
        background-color: transparent;
        height: ${(props): string | number => props.style.boxHeight};
        width: ${(props): string | number => props.style.boxWidth};
        line-height: ${(props): string => `${props.style.boxHeight}px`};
        position: absolute;
        text-align: center;
    }

    .edge {
        border-bottom: ${(props): string => `1px solid ${props.style.edgeLineColor}`};
        position: absolute;
        text-align: center;
        line-height: 25px;
    }

    .point-left {
        left: 0;
        border-right: ${(props): string => `10px solid ${props.style.edgePointColor}`};
    }

    .point-right {
        right: 0;
        border-left: ${(props): string => `10px solid ${props.style.edgePointColor}`};
    }

    .point {
        position: absolute;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        line-height: 50px;
        margin-top: 20.4px;
        z-index: 000;
    }
`;

interface StyleProviderProps {
    customStyle: CustomStyleProps;
    children: React.ReactNode;
    length: any;
}

export const StyleProvider = ({ length, customStyle, children }: StyleProviderProps) => {
    const [state, dispatch] = useContext(Context);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        dispatch({ type: 'SET_STYLE', payload: customStyle });
        setVisible(true);
    }, [customStyle]);

    return visible ? (
        <StyledApp style={state}>
            <div
                style={{
                    height: state.gapEdge * length.data + state.boxHeight * 2,
                    width: state.leftPanelWidth + state.gapStep * length.categories,
                }}
            >
                {children}
            </div>
        </StyledApp>
    ) : (
        <></>
    );
};
