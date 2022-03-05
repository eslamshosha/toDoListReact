import React, { useState } from "react";
import TodoItems from "./components/Todoitems/Todoitems";
import AddItem from "./components/Additem/Additem";

function App() {
  const names = {
    items: [
      { id: 1, name: "hamza", age: 22 },
      { id: 2, name: "mohamed", age: 23 },
      { id: 3, name: "abdo", age: 24 },
    ],
  };

  const [state, setState] = useState(names);

  // fliter delete return false
  // const deleteItem = (id) => {
  //   let items = state.items.filter(item => {
  //     return item.id !== id;
  //   })
  //   setState({items});
  // };

  // findindex بترجع رقم الانديكس الى حقق الشرط ده
  const deleteItem = (id) => {
    let items = state.items;
    let i = items.findIndex((item) => item.id === id);
    i >= 0 ? items.splice(i, 1) : console.error("ffff");
    setState({ items });
  };

  const addItem = (item) => {
    item.id = Math.random();
    let items = state.items;
    items.push(item);
    setState({ items });
  }
  return (
    <div className="App container">
      <h1 className="text-center">Todo list</h1>
      <TodoItems items={state.items} deleteItem={deleteItem} />
      <AddItem addItem={addItem}/>
    </div>
  );
}

export default App;
