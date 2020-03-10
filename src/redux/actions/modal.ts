export type ModalState = {
    isOpening: boolean
}

export enum ModalActionName {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
}

interface OPEN {
    type: ModalActionName.OPEN
    payload: {}
}

interface CLOSE {
    type: ModalActionName.CLOSE
}

export type ModalAction = OPEN | CLOSE
