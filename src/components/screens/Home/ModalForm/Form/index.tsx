import React, {useState} from 'react'
import {
    FormContainer,
    FormTop,
    FormContent,
} from '../styles'

import ModalCloseButton from '../ModalCloseButton'
import TaskAddButton from '../TaskAddButton'
import TaskTitleInput from '../TaskTitleInput'

const ModalForm: React.FC = () => {
    const [inputTitle, setInputTitle] = useState('')
    return (
        <FormContainer>
            <FormTop>
                <ModalCloseButton/>
                <TaskAddButton
                    inputTitle={inputTitle}
                    setInputTitle={setInputTitle}
                />
            </FormTop>
            <FormContent>
                <TaskTitleInput
                    inputTitle={inputTitle}
                    setInputTitle={setInputTitle}
                />
            </FormContent>
        </FormContainer>
    )
}

export default ModalForm
