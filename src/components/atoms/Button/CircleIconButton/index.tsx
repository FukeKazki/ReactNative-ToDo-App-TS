import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
    CircleButton
} from './styles'

type IconButtonProps = {
    onPressFunction,
    name: string,
    size: number,
    IconColor: string,
    styles?: object,
}

const CircleIconButton: React.FC<IconButtonProps> = ({onPressFunction, name, size, IconColor, styles}) => {
    return (
        <CircleButton
            onPress={onPressFunction}
            style={styles}
        >
            <Icon
                name={name}
                size={size}
                color={IconColor}
            />
        </CircleButton>
    )
}

export default CircleIconButton
