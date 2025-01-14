import { Board } from './Board';
import { Events } from './Events';
import { History } from './History';
import { Export } from './Export';
import { Import } from './Import';
import { Flip } from './Flip';
import { Filter } from './Filter';
import { Cropper } from './Cropper';
import { Rotation } from './Rotation';
import { SnapGrid } from './SnapGrid';
import { Selection } from './Selection';
import type { Settings, EventListenerNames, ListenerCallback, BaseShapes, RegisterShapesFn, BackgroundOptions } from './types';
export default class Pikaso<Shapes extends BaseShapes = BaseShapes> {
    board: Board;
    export: Export;
    import: Import;
    shapes: Shapes;
    selection: Selection;
    rotation: Rotation;
    cropper: Cropper;
    flip: Flip;
    events: Events;
    history: History;
    filters: Filter;
    snapGrid: SnapGrid;
    private settings;
    private registerShapes?;
    constructor(settings: Settings, registerShapes?: RegisterShapesFn<Shapes>);
    loadFromFile(file: File, options?: Partial<BackgroundOptions>): Promise<void>;
    loadFromUrl(url: string, options?: Partial<BackgroundOptions>): Promise<void>;
    rescale(): void;
    undo(): void;
    redo(): void;
    on(name: EventListenerNames | EventListenerNames[], callback: ListenerCallback): void;
    off(name: EventListenerNames | EventListenerNames[], callback: ListenerCallback): void;
    reset(): void;
    load(data: string): Promise<void>;
    private init;
}
