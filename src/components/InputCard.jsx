import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from 'react'

const InputCard = ({ onAddTodo, setInputValue, inputValue, clearAllTodos }) => {
  return (
    <View style={styles.inputCol}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity onPress={onAddTodo} style={styles.buttonAdd}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={clearAllTodos} style={styles.buttonClear}>
        <Text style={styles.text}>Temizle</Text>
      </TouchableOpacity>
     
     
    </View>
  )
}

export default InputCard

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#37474F",
    padding: 7,
    color: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 20
  },
  inputCol: {
    display: "flex",
    flexDirection: "column",
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: "#37474F",
    padding: 10,
    margin: 10,
    borderRadius: 8
  },
  buttonAdd:{
    backgroundColor: '#ffa500',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom:10
  },
  buttonClear:{
    backgroundColor: '#E60C0A',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text:{
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  }
})