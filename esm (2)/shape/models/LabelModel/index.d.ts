import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeModel } from '../../ShapeModel';
import { LabelConfig } from '../../../types';
export declare class LabelModel extends ShapeModel<Konva.Label, Konva.LabelConfig> {
    config: LabelConfig;
    private isEditingEnabled;
    constructor(board: Board, node: Konva.Label, config?: LabelConfig);
    get type(): string;
    get isEditing(): boolean;
    get textNode(): import("konva/lib/shapes/Text").Text;
    get tagNode(): import("konva/lib/shapes/Label").Tag;
    rotate(theta: number): void;
    updateTag(attributes: Partial<Konva.TagConfig>): void;
    updateText(attributes: Partial<Konva.TextConfig>): void;
    private transform;
    private inlineEdit;
    private changeText;
    private updateTransformer;
    private setInputFocus;
}
