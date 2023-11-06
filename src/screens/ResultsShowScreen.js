import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    



    return (
        <View> 
            <Text> 
                Results Show Screen
            </Text> 
        </View>
    )
}

const style = StyleSheet.create({

})

export default ResultsShowScreen