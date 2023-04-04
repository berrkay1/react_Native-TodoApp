import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const onAddTodo = () => {
    setTodo([...todo, { text: inputValue, isCompleted: true }]);
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.inputCol}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <Button title="Ekle" onPress={onAddTodo} />
      </View>
      <View>
        {todo.map((item, idx) => (
          <Text key={idx}>{item.text}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    backgroundColor: "#ccc",
    padding: 7,
    borderRadius: 10,
    width: 100,
    marginRight: 5,
  },
  inputCol: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    borderRadius: 10,
    width: 50,
  },
});
