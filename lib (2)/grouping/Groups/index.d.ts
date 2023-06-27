import Konva from 'konva';
import { ShapeModel } from '../../shape/ShapeModel';
import { GroupsManager } from '../GroupsManager';
import type { Group } from '../../types';
export declare class Groups extends GroupsManager {
    create(groupName: string, config?: Konva.ContainerConfig): Group;
    find(groupName: string): Group | undefined;
    findOrCreate(groupName: string, config?: Konva.ContainerConfig): Group;
    delete(groupName: string): void;
    undelete(groupName: string): void;
    destroy(groupName: string): void;
    ungroup(groupName: string): void;
    attach(shapes: ShapeModel[], groupName: string): Group;
    detach(shapes: ShapeModel[], groupName: string): void;
}
