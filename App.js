import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  console.disableYellowBox = true;
  const [estado, setEstado] = useState('selecionado')
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: true,
      name: 'alarme 1',
      file: 'alarme 1.mp3',
    },
    {
      id: 2,
      selected: false,
      name: 'alarme 2',
      file: 'alarme 2.mp3',
    },
    {
      id: 3,
      selected: false,
      name: 'alarme 3',
      file: 'alarme 3.mp3',
    },
  ])

  let numeros = []
  for (var i = 0; i <= 59; i++) {
    numeros.push(i)
  }
  console.log('Minutos: ', minutos);
  console.log('Segundos: ', segundos);

  function handleAlarm(id) {
    let alarmTemp = alarmSound.map(function (val) {
      if (id != val.id) {
        val.selected = false
      } else {
        val.selected = true
      }
      return val
    })
    setAlarmSound(alarmTemp)
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      <Text style={styles.title1}>
        Defina o tempo:
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.times}>
          <Text style={styles.pTexts}>Minutos:</Text>
          <Picker
            selectedValue={minutos}
            onValueChange={(value) => setMinutos(value)}
            style={styles.picker}
          >
            {
              numeros.map((numero, index) => {
                return (
                  <Picker.Item style={styles.pickerItem} key={index} label={('00' + String(numero)).slice(-2)} value={numero.toString()} />
                )
              })
            }
          </Picker>
        </View>
        <View style={styles.times}>
          <Text style={styles.pTexts}>Segundos:</Text>
          <Picker
            selectedValue={segundos}
            onValueChange={(value) => setSegundos(value)}
            style={styles.picker}
          >
            {
              numeros.map((numero, index) => {
                return (
                  <Picker.Item key={index} label={('00' + String(numero)).slice(-2)} value={numero.toString()} />
                )
              })
            }
          </Picker>
        </View>
      </View>
      <StatusBar style="auto" />
      <View style={styles.alarmsView}>
        {
          alarmSound.map((alarm) => {
            return (
              <TouchableOpacity style={alarm.selected ? styles.btnChooseAlarmSelected : styles.btnChooseAlarm} onPress={() => { handleAlarm(alarm.id) }}>
                <Text style={styles.pTexts}>
                  {alarm.name}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <TouchableOpacity style={styles.btnStart}>
        <Text>
          Iniciar
        </Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,160)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    color: '#daf',
    fontSize: 30,
    marginBottom: '1rem'
  },
  times: {
    paddingBottom: 16,
    gap: 8,
  },
  picker: {
    color: '#b087ff',
    height: 50,
    width: 100,
    backgroundColor: 'rgb(80,50,160)',
    borderColor: 'rgba(54, 34, 109, .0)',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
  },
  pickerItem: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  pTexts: {
    color: '#daf',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  alarmsView: {
    flexDirection: 'row',
    gap: 16,
  },
  btnChooseAlarm: {
    width: 100,
    height: 40,
    padding: '1rem',
    backgroundColor: 'rgb(116,67,191)',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
  },
  btnChooseAlarmSelected: {
    transform: [{ scale: 1.1 }],
    width: 100,
    height: 40,
    padding: '1rem',
    backgroundColor: '#6040c4',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
    borderWidth: 1,
    borderColor: '#daf',
  },
  btnStart: {
    width: '80%',
    height: 60,
    backgroundColor: '#215',
    color: '#daf'
  }
});
