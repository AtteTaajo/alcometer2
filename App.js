import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch, Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import  {RadioButton} from 'react-native-paper';
import { darkstyle, lightStyle } from './style/style.js';

export default function App() {

  const [isOn, setIsOn] = useState(false);
  const myStyle = isOn ? darkstyle : lightStyle;
 
  const [weight, setWeigth] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [radio, setRadio] = useState('male');

  const [result, setResult] = useState(0.00);

  const radioStyle = {flexDirection: 'row', alignItems: 'center'};
  

  function handleText(text) {
    setWeigth(text);
  }

  function calculate() {
    
    let resu = 0;
    let lit = bottles * 0.33;
    let grams = lit * 8 * 4.5;
    let burn = weight / 10;
    let gramsleft = grams - burn * hours;

    if (radio == 'male') {
      resu = gramsleft / (weight * 0.7);
    } else {
      resu = gramsleft / (weight * 0.6);
    }

    if (resu <= 0){
      Alert.alert("Negative ammount", "You can't go under 0");
    } else {
      setResult(resu.toFixed(2));
    }
  }

  return (

    <View style={myStyle.container}>
      <StatusBar style="auto"/>
      <View style={myStyle.swi}>
        <Switch
          value={isOn}
          onValueChange={() => setIsOn(!isOn) }
        />
      </View>  
      <View>
        <Text style={myStyle.alc}>Alcometer</Text>
        <View>
          <Text style={myStyle.text}>Weight</Text>
          <TextInput 
          keyboardType='decimal-pad'
          style={myStyle.test}
          onChangeText={handleText}
          />
        </View>
        <View style={myStyle.num} >
          <Text style={myStyle.text}>Bottles</Text> 
          <NumericInput textColor={"white"} rounded onChange={v => setBottles(v)}/>
          <Text style={myStyle.text}>Hours</Text>
          <NumericInput textColor={"white"} rounded onChange={c => setHours(c)}/>
        </View>
        <View >
          <RadioButton.Group onValueChange={newValue => setRadio(newValue)} value={radio}>
            <View style={radioStyle}>
              <RadioButton value='male'/>
              <Text style={myStyle.text}>Male</Text>
            </View>
            <View style={radioStyle}>
              <RadioButton value='female'/>
              <Text style={myStyle.text}>Female</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={myStyle.resu}>
          <Text style={myStyle.text}>{result}</Text>
          <Button title="Calculate" onPress={calculate}/>
        </View>  
      </View>
    </View>
  );
}


