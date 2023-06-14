import { Board } from '../Board';
import { ShapeModel } from '../shape/ShapeModel';
import type { FilterFunctions, Filters } from '../types';
export declare class Filter {
    private board;
    constructor(board: Board);
    apply(shapes: ShapeModel[], filters: Filters | Filters[]): void;
    remove(shapes: ShapeModel[], filters: FilterFunctions | FilterFunctions[]): void;
    private addCache;
    private clearCache;
    private getFilterFunction;
}
