import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
    TouchableOpacity,
} from 'react-native'
import {ModalContext} from '../../index'
import Colors from '../../../../../constants/Colors'

const ModalCloseButton: React.FC = () => {
    const {modalDispatch} = useContext(ModalContext)
    return (
        <TouchableOpacity
            onPress={() => {modalDispatch({type: 'CLOSE'})}}
        >
            <Icon
                name='close'
                size={30}
                color={Colors.mainColor}
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                }}
            />
        </TouchableOpacity>
    )
}

export default ModalCloseButton
