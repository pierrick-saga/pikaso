import Konva from 'konva';
import { Board } from '../../../Board';
import { LabelModel } from '../../models/LabelModel';
import type { LabelConfig } from '../../../types/shapes';
export declare class LabelDrawer {
    private readonly board;
    constructor(board: Board);
    insert({ container, text, tag, config }: {
        container: Konva.LabelConfig;
        text: Konva.TextConfig;
        tag?: Konva.TagConfig;
        config?: LabelConfig;
    }): LabelModel;
}
