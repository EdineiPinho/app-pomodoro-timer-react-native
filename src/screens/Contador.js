/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gradient1, Gradient2 } from '../components/Gradient';
import { Audio } from 'expo-av';

const Contador = ({ minutos, segundos, setMinutos, setSegundos, setEstado, alarm }) => {
  const [pause, setPause] = useState(false)
  if (minutos === 0 && segundos === 0) setEstado('home')

  useEffect(() => {
    if (!pause) {
      const timer = setInterval(() => {
        setSegundos(segundos - 1)
        if (segundos <= 0 && minutos > 0) {
          setMinutos(minutos - 1)
          setSegundos(59)
          playSound()
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [segundos, pause])

  async function playSound() {
    const soundObject = new Audio.Sound();
    try {
      var alarme
      alarm.map((val) => {
        if (val.selecionado) {
          alarme = val.file
        }
      })
      await soundObject.loadAsync(alarme)
      await soundObject.playAsync()
    } catch (error) {
      //

    }

  }

  const handleReset = () => {
    setMinutos(0)
    setSegundos(0)
    setEstado('home')
  }

  return (
    <View style={styles.container}>
      <Gradient1 />
      <Text style={styles.title1}>Contador</Text>

      <View style={{
        flexDirection: 'row'
      }}>
        <Text style={styles.textContador}>{('00' + minutos).slice(-2)}</Text>
        <Text style={{ ...styles.textContador, }}>:{('00' + segundos).slice(-2)}</Text>
      </View>
      <TouchableOpacity
        style={{ ...styles.btnStart, marginTop: '1rem', marginBottom: '.5rem' }}
        onPress={handleReset}
      >
        <Text style={styles.txtBtnPrimary}>Resetar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStart}
        onPress={() => setPause(!pause)}
      >
        <Text style={styles.txtBtnPrimary}>{!pause ? 'Pausar' : 'Continuar'}</Text>
      </TouchableOpacity>
      <Gradient2 />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,160)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100vw',
    height: '100vh'
  },
  title1: {
    color: '#daf',
    fontSize: 30,
    marginBottom: '1rem'
  },
  pTexts: {
    color: '#daf',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  btnStart: {
    width: '80%',
    height: 60,
    backgroundColor: 'rgba(60, 40, 106, 0.1)',
    color: '#daf',
    padding: '1rem',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '1.5rem',
    marginBottom: '2rem',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btnPrimary: {
    color: '#daf',
    fontSize: 30,
    paddingBottom: 4,
  },
  textContador: {
    color: '#daf',
    fontSize: '4rem'
  },
  txtBtnPrimary: {
    color: '#daf',
    fontSize: 30,
    paddingBottom: 4,
  }
})

export default Contador