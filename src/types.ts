export interface Data {
    name: number;
    from: number;
    to: number;
    edge: string;
}

export interface SequenceDiagramProps {
    categories: string[];
    data: Data[];
    style: Style;
}

export interface CustomStyleProps {
    leftPanelWidth: number;
    boxWidth: number;
    boxHeight: number;
    gapEdge: number;
    gapStep: number;
    boxBorderColor: string;
    edgeLineColor: string;
    edgePointColor: string;
    stepLineWidth: number;
    stepLineColor: string;
}

export interface LeftPanelStyle {
    color: string;
}

export interface EdgeStyle {
    color: string;
}

export interface StepStyle {
    color: string;
    topBoxStyle: {
        color: string;
    };
    bottomBoxStyle: {
        color: string;
    };
}

export interface Style extends CustomStyleProps {
    leftPanelStyle?: LeftPanelStyle;
    edgeStyle: EdgeStyle;
    stepStyle?: StepStyle;
}
