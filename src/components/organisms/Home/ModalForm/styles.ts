import Styled from 'styled-components/native'
import {
    Form
} from 'native-base'

export const FormContainer = Styled(Form)`
    background-color: #fff;
    height: 400px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

export const FormTop = Styled.View`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    flex-direction: row;
    position: relative;
`

export const FormContent = Styled.View`
    padding: 4px 16px;
`
