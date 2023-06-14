import Konva from 'konva';
import { Board } from '../../Board';
import { ShapeModel } from '../../shape/ShapeModel';
import type { Group } from '../../types';
export declare abstract class GroupsManager {
    private board;
    private groups;
    constructor(board: Board);
    get list(): Group[];
    protected findGroup(groupName: string): Group | undefined;
    protected createGroup(groupName: string, config?: Konva.ContainerConfig, history?: boolean): Group;
    protected findOrCreateGroup(groupName: string, config?: Konva.ContainerConfig, history?: boolean): Group;
    protected deleteGroup(groupName: string, history?: boolean): void;
    protected undeleteGroup(groupName: string, history?: boolean): void;
    protected destroyGroup(groupName: string): void;
    protected splitGroup(groupName: string, history?: boolean): void;
    protected addToGroup(shapes: ShapeModel[], groupName: string, history?: boolean): Group;
    protected removeFromGroup(shapes: ShapeModel[], groupName: string, history?: boolean): void;
    private isDraggable;
    private deleteEmpty;
}
