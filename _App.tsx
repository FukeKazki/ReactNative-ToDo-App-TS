import React, {useState} from 'react'
import Styled from 'styled-components/native'
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {
    View,
    Container,
    Button,
    Header,
    Form,
    Item,
    Input,
    Text,
    List,
    ListItem,
    CheckBox,
} from 'native-base'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'

const initialState = [
    {index: 1, title: 'Meditate', done: false},
    {index: 2, title: 'Read', done: false},
]

const FormModal: React.FC = ({onAddItem, inputText, setInputText, setModalOpening}) => {
    return (
        <React.Fragment>
            <StyledForm>
                <FormTop>
                    <TouchableOpacity
                        onPress={() => setModalOpening(false)}
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
                    <Button
                        onPress={() => {
                            onAddItem()
                            setModalOpening(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 15,
                            right: 20,
                            borderRadius: 20,
                            backgroundColor: 'rgba(240, 194, 78, 1.0)',
                        }}
                    >
                        <ButtonTitle>Add</ButtonTitle>
                    </Button>
                </FormTop>
                <FormContent>
                    <Item style={{
                        paddingLeft: 0,
                        marginLeft: 0,
                    }}>
                        <Icon
                            name='form'
                            size={25}
                            color={'rgba(240, 194, 78, 1.0)'}
                        />
                        <Input
                            placeholder='task name'
                            autoCompleteType='name'
                            style={{
                                marginLeft: 4,
                            }}
                            value={inputText}
                            onChangeText={(text) => {
                                setInputText(text)
                            }}
                        />
                    </Item>
                </FormContent>
            </StyledForm>
        </React.Fragment>
    )
}

const app: React.FC = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    const [isModalOpening, setModalOpening] = useState(false)
    const [todos, setTodos] = useState(initialState)
    const [inputText, setInputText] = useState('')

    const onAddItem = () => {
        const title = inputText
        if (title === '') return
        const next_index = todos.slice(-1)[0].index + 1
        const newTodo = {index: next_index, title: title, done: false}
        setTodos([...todos, newTodo])
        setInputText('')
    }

    const handleCheckboxChanges = todo => {
        setTodos(todos.filter(x => {
            if (x === todo) x.done = !x.done
            return x
        }))
    }

    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onFinish={() => setLoadingComplete(true)}
            />
        )
    }

    return (
        <Container style={styles.root}>
            <Header
                style={{
                    backgroundColor: 'rgba(240, 194, 78, 1.0)',
                }}
            />
            <ViewTitleContainer>
                <ViewTitle>
                    ToDo List
                </ViewTitle>
            </ViewTitleContainer>
            <View
                style={styles.content}
            >
                <Shadow>
                    <List
                        style={styles.list}
                    >
                        {todos.map(todo => (
                            <ListItem
                                itemDivider={true}
                                key={`todo_${todo.index}`}
                                style={styles.listItem}
                            >
                                <CheckBox
                                    checked={todo.done}
                                    color={'rgba(240, 194, 78, 1.0)'}
                                    onPress={() => handleCheckboxChanges(todo)}
                                />
                                <TaskTitle
                                    done={todo.done}
                                >
                                    {todo.title}
                                </TaskTitle>
                            </ListItem>
                        ))}
                    </List>
                </Shadow>
            </View>
            <Modal
                isVisible={isModalOpening}
                onSwipeComplete={() => {
                    setModalOpening(false)
                }}
                swipeDirection={['down']}
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
            >
                <FormModal
                    onAddItem={onAddItem}
                    inputText={inputText}
                    setInputText={(text) => setInputText(text)}
                    setModalOpening={setModalOpening}
                />
            </Modal>
            <CircleButton
                onPress={() => {
                    setModalOpening(true)
                }}
            >
                <Icon name='plus'
                      size={30}
                      color={'rgba(240, 194, 78, 1.0)'}
                      style={{
                          marginTop: 2,
                      }}
                />
            </CircleButton>
        </Container>
    )
}

const loadResourcesAsync = async () => {
    await Promise.all([
        Font.loadAsync({
            'sen-bold': require('./assets/fonts/Sen-Bold.ttf')
        }),
    ])
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgba(240, 194, 78, 1.0)',
        position: 'relative',
    },
    button: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    list: {
        backgroundColor: '#fffaf1',
        paddingLeft: 0,
        margin: 0,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: '#fffaf1',
        borderRadius: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },
    listItem: {
        marginLeft: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fffaf1',
    },
    listItemTitle: {
        fontWeight: '600',
    }
})

const ViewTitleContainer = Styled.View`
    padding: 20px;
    padding-bottom: 10px;
`

const ViewTitle = Styled.Text`
    color: #fff;
    font-size: 32px;
    font-family: 'sen-bold';
`

const TaskTitle = Styled.Text`
    text-decoration: ${props => props.done ? 'line-through': 'none'};
    font-family: 'sen-bold';
    marginLeft: 16px;
`

const Shadow = Styled.View`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.38);
`

const ButtonTitle = Styled(Text)`
    font-family: 'sen-bold';
`

const CircleButton = Styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background: skyblue;
    justify-content: center;
    align-items: center;
    background-color: #fffaf1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.38);
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -35px;
`

const StyledForm = Styled(Form)`
    background-color: #fff;
    height: 400px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

const FormTop = Styled.View`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    flex-direction: row;
    position: relative;
`

const FormContent = Styled.View`
    padding: 4px 16px;
`
export default app
