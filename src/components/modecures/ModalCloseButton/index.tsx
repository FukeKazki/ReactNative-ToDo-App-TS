import React, {useContext} from 'react'
import {ModalContext} from '../../screens/Home'
import Colors from '../../../constants/Colors'
import {IconButton} from '../../atoms/Button'
import {StyleSheet} from 'react-native'

const ModalCloseButton: React.FC = () => {
    const {modalDispatch} = useContext(ModalContext)
    return (
        <IconButton
            onPressFunction={() => modalDispatch({type: 'CLOSE'})}
            name={'close'}
            size={30}
            IconColor={Colors.mainColor}
            styles={styles.iconButton}
        />
    )
}

const styles = StyleSheet.create({
    iconButton: {
        marginLeft: 20,
        marginTop: 20,
    }
})

export default ModalCloseButton
