import React, {useReducer, createContext} from 'react'
import {Container} from 'native-base'

import Header from '../../organisms/Header'

import HomeTitle from './HomeTitle'
import TaskView from './TaskView'
import ModalOpenButton from './ModalOpenButton'
import ModalForm from './ModalForm'

import {taskReducer} from '../../../redux/reducer/task'
import {modalReducer} from '../../../redux/reducer/modal'
import {TaskState} from '../../../redux/actions/task'
import {ModalState} from '../../../redux/actions/modal'
import Colors from '../../../constants/Colors'


const initialTaskState: TaskState[] = [
    {id: 1, title: 'ReactNative楽しい', isDone: false},
]

// @ts-ignore
export const TaskContext = createContext()

const TaskContextProvider = (props) => {
    const [taskState, taskDispatch] = useReducer(taskReducer, initialTaskState)
    const value = {taskState, taskDispatch}
    return (
        <TaskContext.Provider value={value}>
            {props.children}
        </TaskContext.Provider>
    )
}

const initialModalState: ModalState = {
    isOpening: false
}

// @ts-ignore
export const ModalContext = createContext()

const ModalContextProvider = (props) => {
    const [modalState, modalDispatch] = useReducer(modalReducer, initialModalState)
    const value = {modalState, modalDispatch}
    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    )
}

const Home: React.FC = () => {

    return (
        <Container style={{backgroundColor: Colors.mainColor}}>
            <Header/>
            <HomeTitle/>
            <ModalContextProvider>
                <TaskContextProvider>
                    <TaskView/>
                    <ModalOpenButton/>
                    <ModalForm/>
                </TaskContextProvider>
            </ModalContextProvider>
        </Container>
    )
}

export default Home
