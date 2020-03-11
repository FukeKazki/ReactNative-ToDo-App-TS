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
    paddingLeft: 0;
    margin: 0;
    border-width: 1;
    overflow: hidden;
    border-color: #fffaf1;
    border-radius: 16;
    padding-top: 20;
    padding-bottom: 20;
`

export const TaskListItem = Styled(ListItem)`
    margin-left: 0;
    padding-left: 16;
    padding-right: 16;
    padding-top: 20;
    padding-bottom: 20;
    background-color: #fffaf1;
`

export const TaskTitle = Styled.Text`
    text-decoration: ${props => props.isDone ? 'line-through': 'none'};
    font-family: 'sen-bold';
    marginLeft: 16px;
`
