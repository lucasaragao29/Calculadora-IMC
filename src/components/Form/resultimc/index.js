import React from "react"
import { View, Text} from 'react-native'

export default function Resultimc(props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultimc}</Text>
        </View>
    )
}