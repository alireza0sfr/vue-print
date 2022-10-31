import { ElementGrandParents, ElementParents, ElementTypes } from '~/enums/element'
import { emptyId } from '~/plugins/element-utilities'

export interface IElementCoordinates {
  height: number
  width: number
  top: number
  left: number
}

export interface IEmptyElement {
  type: ElementTypes
  id: typeof emptyId
  parent: ElementParents
  grandParent: ElementGrandParents
  styles: any
  configs: any
  isChild: boolean
  repeatorId?: string
}

export interface IElement extends IEmptyElement {
  
  $el?: HTMLElement
  resizerQuery?: string

  init(element: HTMLElement, resizerQuery: string): void
  initStyles(styles: any): object
  makeResizable(element: HTMLElement, resizerQuery: string): void
  makeDragable(element: HTMLElement): void
  makeClickable(element: HTMLElement): void
  getCoordinates(): IElementCoordinates
  validatePos(element: HTMLElement, newVal: number, pos: string, e: any): boolean
}

export type classType =
  'textelement' | 'bindingobject' |
  'datetime' | 'imageelement' |
  'pagecounter' | 'repeator' |
  'textpattern' | 'variable' |
  'dataset' | 'row' | 'column'

export interface IBindingObject {
  [key: string]: string
}