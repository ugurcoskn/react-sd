import React from 'react';
import { Step } from './step';
import { LeftBar } from './leftBar';
import { Edge } from './edge';
import { StyleProvider } from './style';
import { Store } from './store';
import { SequenceDiagramProps, Data } from './types';

export const SequenceDiagram = ({ categories, data, style }: SequenceDiagramProps) => {
    return (
        <Store>
            <StyleProvider customStyle={style}>
                {categories.map((category: string, index: number) => {
                    return (
                        <div key={category} style={{ position: 'relative' }}>
                            <Step
                                style={style && style.stepStyle}
                                key={category}
                                length={data.length}
                                text={category}
                                index={index}
                            />
                        </div>
                    );
                })}
                {data.map((datum: Data, index: number) => {
                    return (
                        <div key={`${datum.time}_container`} style={{ position: 'relative' }}>
                            <LeftBar
                                style={style && style.leftPanelStyle}
                                key={`${datum.time}_time`}
                                index={index}
                                text={datum.time}
                            />
                            <Edge
                                style={style && style.edgeStyle}
                                key={`${datum.time}_edge`}
                                from={datum.from}
                                to={datum.to}
                                index={index}
                                text={datum.text}
                            />
                        </div>
                    );
                })}
            </StyleProvider>
        </Store>
    );
};
