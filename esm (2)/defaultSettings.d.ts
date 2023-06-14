import Konva from 'konva';
import { Settings } from './types';
export declare const defaultTransformerSettings: Partial<Konva.TransformerConfig>;
export declare const defaultSettings: Omit<Settings, 'container' | 'width' | 'height'>;
