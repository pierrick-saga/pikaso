import { Board } from '../Board';
import type { JsonData, BaseShapes } from '../types';
export declare class Import {
    private readonly board;
    private readonly shapes;
    constructor(board: Board, shapes: BaseShapes);
    json({ stage, layer, background, shapes }: JsonData): Promise<void>;
}
