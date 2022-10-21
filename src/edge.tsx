import React, { useContext } from 'react';
import { Context } from './store';
import { EdgeStyle } from './types';

interface EdgeProps {
    from: number;
    to: number;
    text: string;
    index: number;
    style: EdgeStyle;
}

export const Edge: React.FC<EdgeProps> = ({ from, to, text, index, style }: EdgeProps) => {
    const { state } = useContext(Context);

    const heightStyle = state.boxHeight + index * state.gapEdge + 20;

    const left = state.boxWidth / 2 + state.leftPanelWidth + state.gapStep * Math.min(from, to);
    const width = Math.abs(to - from) * state.gapStep;

    return (
        <div className="edge" style={{ ...style, left, width, top: heightStyle, minWidth: width }}>
            <div className={`point ${from > to ? 'point-left' : 'point-right'}`} />
            <span>{text}</span>
        </div>
    );
};
