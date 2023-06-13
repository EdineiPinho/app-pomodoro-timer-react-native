import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80,50,160)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
  txtBtnPrimary: {
    color: '#daf',
    fontSize: 30,
    paddingBottom: 4,
  }
});

export default styles