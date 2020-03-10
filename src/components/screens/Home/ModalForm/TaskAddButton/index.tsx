import React, {useContext} from 'react'
import {Button} from "native-base"
import {
    ButtonTitle
} from './styles'
import {ModalContext, TaskContext} from '../../index'

type TaskAddButtonProps = {
    inputTitle: string
    setInputTitle: (arg: string) => void
}

const TaskAddButton: React.FC<TaskAddButtonProps> = ({inputTitle, setInputTitle}) => {
    const {taskState, taskDispatch} = useContext(TaskContext)
    const {modalDispatch} = useContext(ModalContext)
    return (
        <Button
            onPress={() => {
                if (inputTitle === '') return
                taskDispatch({
                    type: 'ADD',
                    payload: {
                        id: taskState.length + 1,
                        title: inputTitle,
                        isDone: false,
                    }
                })
                setInputTitle('')
                modalDispatch({type: 'CLOSE'})
            }}
            style={{
                position: 'absolute',
                top: 15,
                right: 20,
                borderRadius: 20,
                backgroundColor: 'rgba(240, 194, 78, 1.0)',
            }}
        >
            <ButtonTitle>Add</ButtonTitle>
        </Button>
    )
}

export default TaskAddButton
