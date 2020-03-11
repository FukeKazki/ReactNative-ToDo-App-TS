import React, {useContext} from 'react'
import {
    CheckBox
} from 'native-base'
import {
    TaskListContainer,
    Shadow,
    TaskList,
    TaskListItem,
    TaskTitle,
} from './styles'
import {TaskContext} from '../index'
import Colors from '../../../../constants/Colors'


const TaskView: React.FC = () => {
    const {taskState, taskDispatch} = useContext(TaskContext)
    return (
        <TaskListContainer>
            <Shadow>
                <TaskList>
                    {taskState.map((task) => (
                        <TaskListItem
                            key={`task_${task.id}`}
                            itemDivider={true}
                        >
                            <CheckBox
                                color={Colors.mainColor}
                                checked={task.isDone}
                                onPress={() => {
                                    taskDispatch({
                                        type: 'TOGGLE',
                                        id: task.id,
                                    })
                                }}
                            />
                            <TaskTitle
                                isDone={task.isDone}
                            >
                                {task.title}
                            </TaskTitle>
                        </TaskListItem>
                    ))}
                </TaskList>
            </Shadow>
        </TaskListContainer>
    )
}

export default TaskView
