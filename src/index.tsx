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
            <StyleProvider length={{ data: data.length, categories: categories.length }} customStyle={style}>
                {categories.map((category: string, index: number) => {
                    return (
                        <div key={category} style={{ position: 'relative', width: 400 }}>
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
                        <div key={`${datum.name}_container`} style={{ position: 'relative' }}>
                            <LeftBar
                                style={style && style.leftPanelStyle}
                                key={`${datum.name}_bar`}
                                index={index}
                                text={datum.name}
                            />
                            <Edge
                                style={style && style.edgeStyle}
                                key={`${datum.name}_edge`}
                                from={datum.from}
                                to={datum.to}
                                index={index}
                                text={datum.edge}
                            />
                        </div>
                    );
                })}
            </StyleProvider>
        </Store>
    );
};
