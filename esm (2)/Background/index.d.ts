import { Board } from '../Board';
import { ImageModel } from '../shape/models/ImageModel';
import { RectModel } from '../shape/models/RectModel';
import type { BackgroundOptions } from '../types';
export declare class Background {
    image: ImageModel;
    overlay: RectModel;
    private board;
    constructor(board: Board);
    get nodes(): (import("konva/lib/shapes/Image").Image | import("konva/lib/shapes/Rect").Rect)[];
    getPosition(): {
        x: number;
        y: number;
    };
    setImageFromFile(file: File, options?: Partial<BackgroundOptions>): Promise<void>;
    setImageFromUrl(url: string, options?: Partial<BackgroundOptions>): Promise<void>;
    fill(color: string): void;
}
