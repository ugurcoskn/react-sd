# react-sd

React Sequence Diagram

## Install
`npm install react-sd`

or

`yarn add react-sd`

## Example

[![Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-sd-demo-5mz9o)

## Props

|       Attribute     | Description                   | Type                                                       | Default  | Required|
|---------------------|-------------------------------|------------------------------------------------------------|----------|---------|
| data                | Data                          | { name: string; from: number; to: number; edge: string}[]    |  -     |   Yes   |
| categories          | Steps                         | string[]  number[]                                         |  -     |   Yes   |
| leftPanelWidth      | Width of the leftPanel        | number                                                     |  110     |   No    |
| boxWidth            | Width of the each Step's Box  | number                                                     |  100     |   No    |
| boxHeight           | Height of the each Step's Box | number                                                     |  50      |   No    |
| gapEdge             | The gap between Edges         | number                                                     |  80      |   No    |
| gapStep             | The gap between Steps         | number                                                     |  110      |   No    |
| boxBorderColor      | Border color of Box           | string                                                     |  #18aebf      |   No    |
| edgeLineColor       | Line color of Edges           | string                                                     |  #18aebf      |   No    |
| edgePointColor      | Arrow color of Edges          | string                                                     |  #18aebf      |   No    |
| stepLineWidth       | Line width of Step            | number                                                     |  1      |   No    |
| stepLineColor       | Line color of Step            | string                                                     |  #18aebf      |   No    |
| leftPanelStyle      | Style of left panel           | CSSProperties                                              |  {}      |   No    |
| edgeStyle           | Style of edges                | CSSProperties                                              |  {}      |   No    |
| stepStyle           | Style of steps                | {topBoxStyle: CSSProperties, bottomBoxStyle: CSSProperties}|  {}      |   No    |


### HAVE FUN