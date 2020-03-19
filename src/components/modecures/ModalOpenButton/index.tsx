import React, {useContext} from 'react'
import {ModalContext} from '../../screens/Home'
import Colors from '../../../constants/Colors'
import {CircleIconButton} from '../../atoms/Button'
import {StyleSheet} from 'react-native'

const ModalOpenButton: React.FC = () => {
    const {modalDispatch} = useContext(ModalContext)
    return (
        <CircleIconButton
            onPressFunction={() => modalDispatch({type: 'OPEN'})}
            name={'plus'}
            size={30}
            IconColor={Colors.mainColor}
            styles={styles.iconButton}
        />
    )
}

const styles = StyleSheet.create({
    iconButton: {
        marginTop: 2,
        backgroundColor: Colors.subColor,
    }
})

export default ModalOpenButton
