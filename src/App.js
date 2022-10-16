import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const onDelete = (todo) => {
    setTodos(todosDatas.filter((e) => {
      return e !== todo
    }));
  }
  const [todosDatas, setTodos] = useState([
    {
      sno: 1,
      title: "Artificial Intelligence",
      description: "This is info about Artificial Intelligence"
    },
    {
      sno: 2,
      title: "Machine Learning",
      description: "This is info about Machine Learning"
    },
    {
      sno: 3,
      title: "Data Science",
      description: "This is info about Data Science"
    }
  ])
  return (
    <>
      <Header title="To-Do-List" searchBar={false} />
      <Todo todoDatas={todosDatas} deleteData={onDelete} />
      <Footer />
    </>
  );
}

export default App;
