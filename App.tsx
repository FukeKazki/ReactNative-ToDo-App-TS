import React, {useState} from 'react'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import Home from './src/components/screens/Home'

const loadResourcesAsync = async () => {
    await Promise.all([
        Font.loadAsync({
            'sen-bold': require('./assets/fonts/Sen-Bold.ttf')
        }),
    ])
}

const App: React.FC = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    if (!isLoadingComplete) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onFinish={() => setLoadingComplete(true)}
            />
        )
    }

    return (
        <Home />
    )
}

export default App
