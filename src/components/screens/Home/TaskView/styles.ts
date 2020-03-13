import Styled from 'styled-components/native'
import {
    List,
    ListItem,
} from 'native-base'

export const TaskListContainer = Styled.View`
    padding: 20px;
`

export const Shadow = Styled.View`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.38);
`

export const TaskList = Styled(List)`
    background-color: #fffaf1;
    border-width: 1px;
    overflow: hidden;
    border-color: #fffaf1;
    border-radius: 16px;
    padding: 20px 0;
`

export const TaskListItem = Styled(ListItem)`
    padding: 20px 16px;
    background-color: #fffaf1;
`

export const TaskTitle = Styled.Text`
    text-decoration: ${props => props.isDone ? 'line-through': 'none'};
    font-family: 'sen-bold';
    marginLeft: 16px;
`
