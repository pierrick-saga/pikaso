import Konva from 'konva';
import { Board } from '../../../Board';
import { ImageModel } from '../../models/ImageModel';
export declare class ImageDrawer {
    private board;
    constructor(board: Board);
    insert(image: File | Konva.Image | string, config?: Partial<Konva.ImageConfig>): Promise<ImageModel>;
}
