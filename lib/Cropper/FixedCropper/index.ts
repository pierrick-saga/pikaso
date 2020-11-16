import Konva from 'konva'

import { BaseCropper } from '../BaseCropper'
import { Board } from '../../Board'

import type { CropperOptions, Point } from '../../types'

export abstract class FixedCropper extends BaseCropper {
  /**
   *
   */
  public readonly draggable: Konva.Rect

  constructor(board: Board, options: Partial<CropperOptions>) {
    super(board, options)

    this.draggable = this.createDraggableOverlay()
    this.layer.add(this.draggable)

    this.setupCropzone()

    this.board.stage.add(this.layer)
    this.layer.batchDraw()
  }

  /**
   *
   */
  public zoom(scale: number) {
    this.board.layer.scale({
      x: scale,
      y: scale
    })

    const width = this.board.layer.width() * scale
    const height = this.board.layer.height() * scale
    const center = [this.draggable.width() / 2, this.draggable.height() / 2]
    const nextCenter = [width / 2, height / 2]

    this.draggable.width(width)
    this.draggable.height(height)

    const { x, y } = this.getDraggableOverlayBoundRect({
      x: this.draggable.x() + center[0] - nextCenter[0],
      y: this.draggable.y() + center[1] - nextCenter[1]
    })

    this.draggable.x(x)
    this.draggable.y(y)

    this.board.layer.x(this.draggable.x())
    this.board.layer.y(this.draggable.y())

    this.board.layer.batchDraw()
  }

  /**
   *
   */
  public setDraggableOverlayPosition({ x, y }: Point) {
    const { x: left, y: top } = this.getDraggableOverlayBoundRect({
      x,
      y
    })

    this.draggable.x(left)
    this.board.layer.x(left)

    this.draggable.y(top)
    this.board.layer.y(top)

    this.board.layer.batchDraw()
  }

  /**
   *
   */
  protected setupCropzone() {
    this.cropzone.draggable(false)
  }

  /**
   *
   * @param pos - Point
   */
  private getDraggableOverlayBoundRect(pos: Point) {
    const node = this.draggable

    const width = this.options.circular
      ? this.options.radius * 2
      : this.options.width

    const height = this.options.circular
      ? this.options.radius * 2
      : this.options.height

    const left = this.options.circular
      ? this.options.x - this.options.radius
      : this.options.x

    const top = this.options.circular
      ? this.options.y - this.options.radius
      : this.options.y

    const right = left + width - node.width()
    const bottom = top + height - node.height()

    let { x, y } = pos

    if (x >= left) {
      x = left
    } else if (x <= right) {
      x = right
    }

    if (y >= top) {
      y = top
    } else if (y <= bottom) {
      y = bottom
    }

    return { x, y }
  }

  /**
   *
   */
  private createDraggableOverlay() {
    const rect = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.board.stage.width(),
      height: this.board.stage.height(),
      fill: 'transparent',
      opacity: 0,
      draggable: true,
      dragBoundFunc: pos => {
        const { x, y } = this.getDraggableOverlayBoundRect(pos)

        this.board.layer.x(x)
        this.board.layer.y(y)
        this.board.layer.batchDraw()

        return {
          x,
          y
        }
      }
    })

    this.getCursorEvents().forEach(({ name, cursor }) => {
      rect.on(name, () => {
        this.board.stage.container().style.cursor = cursor
      })
    })

    return rect
  }
}
