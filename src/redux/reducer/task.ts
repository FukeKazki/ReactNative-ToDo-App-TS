import React from 'react'
import {TaskState, TaskAction, TaskActionName} from '../actions/task'

export const taskReducer: React.Reducer<TaskState[], TaskAction> = (state, action) => {
    switch (action.type) {
        case TaskActionName.ADD:
            return [
                ...state,
                action.payload,
            ]
        case TaskActionName.TOGGLE:
            return state.map(task =>
                task.id === action.id ? {...task, isDone: !task.isDone} : task
            )
        default:
            throw new Error()
    }
}
