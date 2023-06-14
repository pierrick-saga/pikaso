import Konva from 'konva';
import { Board } from '../Board';
export declare class SnapGrid {
    private board;
    private lines;
    private offset;
    private options?;
    private active;
    constructor(board: Board);
    get isActive(): boolean;
    setOptions(options: Konva.LineConfig): void;
    setOffset(offset: number): void;
    enable(): void;
    disable(): void;
    private getLineStops;
    private getNodeEdgeBounds;
    private getGuideLines;
    private draw;
    private setNodePosition;
    private onDragMove;
    private onDragEnd;
    private destroy;
    private registerEvents;
    private unregisterEvents;
}
