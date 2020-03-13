import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
    TouchableOpacity,
} from 'react-native'

type IconButtonProps = {
    onPressFunction,
    name: string,
    size: number,
    IconColor: string,
    styles?: object,
}

const IconButton: React.FC<IconButtonProps> = ({onPressFunction, name, size, IconColor, styles}) => {
    return (
        <TouchableOpacity
            onPress={onPressFunction}
            style={styles}
        >
            <Icon
                name={name}
                size={size}
                color={IconColor}
            />
        </TouchableOpacity>
    )
}

export default IconButton
