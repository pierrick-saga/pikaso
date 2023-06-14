import Konva from 'konva';
import { History } from '../History';
import { Events } from '../Events';
import { Groups } from '../grouping/Groups';
import { Selection } from '../Selection';
import { Background } from '../Background';
import { ShapeModel } from '../shape/ShapeModel';
import type { Settings } from '../types';
export declare class Board {
    readonly stage: Konva.Stage;
    readonly layer: Konva.Layer;
    readonly container: HTMLDivElement | undefined;
    readonly settings: Settings;
    readonly background: Background;
    readonly selection: Selection;
    activeDrawing: string | null;
    readonly events: Events;
    readonly history: History;
    readonly groups: Groups;
    private shapesList;
    constructor(settings: Settings, events: Events, history: History);
    get shapes(): ShapeModel<import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig> | import("konva/lib/Group").Group, import("konva/lib/Shape").ShapeConfig>[];
    get activeShapes(): ShapeModel<import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig> | import("konva/lib/Group").Group, import("konva/lib/Shape").ShapeConfig>[];
    getDimensions(): {
        width: number;
        height: number;
    };
    getNodes(): (import("konva/lib/Shape").Shape<import("konva/lib/Shape").ShapeConfig> | import("konva/lib/Group").Group)[];
    addShape(shape: ShapeModel): void;
    removeShape(shape: ShapeModel): void;
    setShapes(shapes: ShapeModel[]): void;
    rescale(): void;
    setActiveDrawing(drawType: string | null): void;
    getContainerTransform(): string | undefined;
    draw(): void;
    gc(): void;
}
