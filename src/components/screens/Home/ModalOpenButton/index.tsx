import React, {useContext} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import {
    CircleButton
} from './styles'
import {ModalContext} from '../index'
import Colors from '../../../../constants/Colors'

const ModalOpenButton: React.FC = () => {
    const {modalDispatch} = useContext(ModalContext)
    return (
        <CircleButton
            onPress={() => {modalDispatch({type: 'OPEN'})}}
        >
            <Icon name='plus'
                  size={30}
                  color={Colors.mainColor}
                  style={{
                      marginTop: 2,
                  }}
            />
        </CircleButton>
    )
}

export default ModalOpenButton
