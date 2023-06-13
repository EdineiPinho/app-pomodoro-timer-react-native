/* eslint-disable react/prop-types */
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonPrimary = (props) => {
  return (
    <TouchableOpacity style={styles.btnStart}>
      <LinearGradient
        colors={['rgba(48, 30, 96, 0.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 60,
          borderRadius: '1.5rem',
        }}
      />
      <Text style={styles.btnPrimary} >
        {props.titulo}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
    // borderWidth: 1,
    marginBottom: '2rem',
    // borderColor: '#114',
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
  }
})

export default ButtonPrimary