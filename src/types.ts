export interface Data {
    time: number;
    from: number;
    to: number;
    text: string;
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
    gapVerticalBox: number;
    gapHorizontalBox: number;
    leftPanelMargin: number;
    boxBorderColor: string;
    edgeLineColor: string;
    edgePointColor: string;
    horizontalLineWidth: number;
    horizontalLineColor: string;
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
