import React from "react";
import { IAnnotation } from "./Annotation";
import { IAnnotationState } from "./annotation/AnnotationState";
import { IShape, IShapeBase } from "./Shape";
import { ITransformer } from "./Transformer";
interface IReactPictureAnnotationProps {
    annotationData?: IAnnotation[];
    selectedId?: string | null;
    onChange: (annotationData: IAnnotation[]) => void;
    onSelect: (id: string | null) => void;
    width: number;
    height: number;
    image: string;
    enableZoom?: boolean;
    inputElement: (value: string, onChange: (value: string) => void, onDelete: () => void) => React.ReactElement;
}
export default class ReactPictureAnnotation extends React.Component<IReactPictureAnnotationProps> {
    set selectedId(value: string | null);
    get selectedId(): string | null;
    static defaultProps: {
        inputElement: (value: string, onChange: (value: string) => void, onDelete: () => void) => JSX.Element;
    };
    shapes: IShape[];
    currentTransformer: ITransformer;
    state: {
        inputPosition: {
            left: number;
            top: number;
        };
        showInput: boolean;
        inputComment: string;
    };
    private currentAnnotationData;
    private selectedIdTrueValue;
    private canvasRef;
    private canvas2D?;
    private imageCanvasRef;
    private imageCanvas2D?;
    private currentImageElement?;
    private currentAnnotationState;
    private scaleState;
    componentDidMount: () => void;
    componentDidUpdate: (preProps: IReactPictureAnnotationProps) => void;
    calculateMousePosition: (positionX: number, positionY: number) => {
        positionX: number;
        positionY: number;
    };
    calculateShapePosition: (shapeData: IShapeBase) => IShapeBase;
    render(): JSX.Element;
    setAnnotationState: (annotationState: IAnnotationState) => void;
    onShapeChange: () => void;
    private syncAnnotationData;
    private syncSelectedId;
    private onDelete;
    private setCanvasDPI;
    private onInputCommentChange;
    private cleanImage;
    private onImageChange;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private onMouseLeave;
    private onWheel;
}
export {};
