import React from 'react'
import {ModalState, ModalAction, ModalActionName} from '../actions/modal'

export const modalReducer: React.Reducer<ModalState, ModalAction> = (state, action) => {
    switch (action.type) {
        case ModalActionName.OPEN:
            return {
                ...state,
                isOpening: true,
            }
        case ModalActionName.CLOSE:
            return {
                ...state,
                isOpening: false,
            }
        default:
            throw new Error()
    }
}
