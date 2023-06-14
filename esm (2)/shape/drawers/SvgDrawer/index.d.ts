import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { SvgModel } from '../../models/SvgModel';
export declare class SvgDrawer extends ShapeDrawer<Konva.Path, Konva.PathConfig> {
    node: Konva.Path;
    private initialDimensions;
    constructor(board: Board);
    insert(config: Konva.PathConfig): SvgModel;
    draw(config?: Partial<Konva.PathConfig>): void;
    protected createShape(config: Konva.PathConfig): SvgModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
    protected onFinishDrawing(): void;
}
