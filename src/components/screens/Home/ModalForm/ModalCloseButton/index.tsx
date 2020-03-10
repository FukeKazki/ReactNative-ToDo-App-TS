import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
    TouchableOpacity,
} from 'react-native'
import {ModalContext} from '../../index'

const ModalCloseButton: React.FC = () => {
    const {modalDispatch} = useContext(ModalContext)
    return (
        <TouchableOpacity
            onPress={() => {modalDispatch({type: 'CLOSE'})}}
        >
            <Icon
                name='close'
                size={30}
                color={'rgba(240, 194, 78, 1.0)'}
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                }}
            />
        </TouchableOpacity>
    )
}

export default ModalCloseButton
