import Styled from 'styled-components/native'
import Color from '../../../../constants/Colors'

export const CircleButton = Styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background: skyblue;
    justify-content: center;
    align-items: center;
    background-color: ${Color.subColor};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.38);
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -35px;
`
