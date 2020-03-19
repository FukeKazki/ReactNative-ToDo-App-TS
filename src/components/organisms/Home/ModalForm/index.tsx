import React, {useContext} from 'react'
import Modal from 'react-native-modal'
import Form from '../../../modecures/Form'
import {ModalContext} from '../../../screens/Home'

const ModalForm: React.FC = () => {
    const {modalState, modalDispatch} = useContext(ModalContext)
    return (
        <Modal
            isVisible={modalState.isOpening}
            onSwipeComplete={() => {modalDispatch({type: 'CLOSE'})}}
            swipeDirection={['down']}
            style={{
                justifyContent: 'flex-end',
                margin: 0,
            }}
        >
            <Form/>
        </Modal>
    )
}

export default ModalForm
