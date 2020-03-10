export type TaskState = {
    id: number
    title: string
    isDone: boolean
}

export enum TaskActionName {
    ADD = 'ADD',
    TOGGLE = 'TOGGLE'
}

interface ADD {
    type: TaskActionName.ADD,
    payload: TaskState,
}

interface TOGGLE {
    type: TaskActionName.TOGGLE
    id: number
}

export type TaskAction = ADD | TOGGLE
