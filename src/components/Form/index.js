import React, { useState } from "react"
import { View,Text,TextInput,Button } from "react-native"
import Resultimc from "./resultimc"


export default function Form(){

const [height,setHeight]= useState(null)
const [weight,setWeight]= useState(null)
const [messageImc,setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [Textbutton,setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/( height*height)).toFixed(2))
}
function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton('Calcular Novamente')
        return
    }
    setImc(null)
    setTextButton('Calcular')
    setMessageImc("Preecha o peso de altura")
}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder='Ex: X,XX'
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex: XX '
                keyboardType="numeric"
                />
                <Button 
                onPress={()=> validationImc() }
                title={Textbutton}/>
            </View>
            <Resultimc messageResultImc={messageImc} resultimc={imc}/>
        </View>
    )
}