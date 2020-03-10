import React from 'react'
import {Input, Item} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

type TaskTitleInputProps = {
    inputTitle: string
    setInputTitle: (arg: string) => void
}

const TaskTitleInput: React.FC<TaskTitleInputProps> = ({inputTitle, setInputTitle}) => {
    return (
        <Item style={{
            paddingLeft: 0,
            marginLeft: 0,
        }}>
            <Icon
                name='form'
                size={25}
                color={'rgba(240, 194, 78, 1.0)'}
            />
            <Input
                placeholder='task name'
                autoCompleteType='name'
                style={{
                    marginLeft: 4,
                }}
                value={inputTitle}
                onChangeText={(text) => {
                    setInputTitle(text)
                }}
            />
        </Item>
    )
}

export default TaskTitleInput
