import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { TextModel } from '../../models/TextModel';
export declare class TextDrawer extends ShapeDrawer<Konva.Text, Konva.TextConfig> {
    node: Konva.Text;
    constructor(board: Board);
    insert(config: Konva.TextConfig): TextModel;
    draw(config?: Partial<Konva.TextConfig>): void;
    protected createShape(config: Konva.TextConfig): TextModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
