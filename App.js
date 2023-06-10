import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  console.disableYellowBox = true;
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [alarmSound, setAlarmSound] = useState([
    {
      selecionado: true,
      som: 'alarme 1',
      file: 'alarme 1.mp3',
    },
    {
      selecionado: false,
      som: 'alarme 2',
      file: 'alarme 2.mp3',
    },
  ])

  let numeros = []
  for (var i = 0; i <= 59; i++) {
    numeros.push(i)
  }
  console.log('Minutos: ', minutos);
  console.log('Segundos: ', segundos);

  return (
    <View style={styles.container}>
      <Text style={{ color: '#daf', fontSize: 30, marginBottom: '1rem' }}>Defina o tempo:</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.pTexts}>Minutos:</Text>
        <Picker
          selectedValue={minutos}
          onValueChange={(value) => setMinutos(value)}
          style={styles.picker}
        >
          {
            numeros.map((numero, index) => {
              return (
                <Picker.Item style={styles.pickerItem} key={index} label={numero} value={numero} />
              )
            })
          }
        </Picker>
        <Text style={styles.pTexts}>Segundos:</Text>
        <Picker
          selectedValue={segundos}
          onValueChange={(value) => setSegundos(value)}
          style={styles.picker}
        >
          {
            numeros.map((numero, index) => {
              return (
                <Picker.Item key={index} label={numero.toString()} value={numero.toString()} />
              )
            })
          }
        </Picker>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,160)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerItem: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  pTexts: {
    color: '#ccc'
  },
  picker: {
    color: '#b087ff',
    height: 50,
    width: 100,
    // backgroundColor: '#36226d',
    backgroundColor: 'rgb(80,50,160)',
    borderColor: 'rgba(54, 34, 109, .5)',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
  }
});
