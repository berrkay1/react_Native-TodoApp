import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import InputCard from "./src/components/InputCard";
import TodoCard from "./src/components/TodoCard";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const onAddTodo = () => {
    setTodo([...todo, { text: inputValue, isCompleted: true }]);
    setInputValue('')
  };

  const clearAllTodos = () => {
    setTodo([]);
  }

  return (
    <View style={styles.container}>
      <TodoCard todo={todo} setTodo={setTodo} />
      <InputCard
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={onAddTodo}
        clearAllTodos={clearAllTodos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
