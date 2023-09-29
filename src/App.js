import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [item, setItem] = useState(""); //Input
  const [itemList, setItemList] = useState([]); //Button AddItem
  const [toggleBtn, setToggleBtn] = useState(false);
  const [itemId, setItemId] = useState();

  const changeHandler = (e) => {
    //Input
    setItem(e.target.value);
  };

  function addItem() {
    //button addItem

    if(toggleBtn){
      const newList = itemList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, itemName: item };
        }
        return todo;
      })
      setItemList(newList);
      setItemList(newList);
      setToggleBtn(false);
      setItem('');
      setItemId();
      toast.info("Item Updated SuccessFully");
    } else {
      const itemObj = { id: uuid(), itemName: item };
      setItemList((prevItem) => [...prevItem, itemObj]);
      setItem("");
      toast.success("Item Added SuccessFully");
    }
  };

  const deleItem = (id) => {
    console.log(id);
    const filterItem = itemList.filter((value) => {
      return value.id !== id;
    });
    setItemList(filterItem);
    toast("Item Deleted SuccessFully");
  };

  const delAll = () => {
    setItemList([]);
    toast("All Item Deleted SuccessFully");
  };

  const editItem = (id) => {
    const editTodo = itemList.find((todo) => {
      return todo.id === id;
    });
    console.log('editTodo', editTodo)
    setItem(editTodo.itemName);
    setToggleBtn(true);
    setItemId(id);
  };

  return (
    <div className="container">
      <div className="parent-div">
        <h1 className="heading">React To-Do List App</h1>
        <div className="upper-half">
          <div className="input-div">
            {/* <input type='search' placeholder='To-Do....'/> */}
            <input
              value={item}
              onChange={changeHandler}
              type="search"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="To-Do List...."
            />
          </div>
          <div className="btn">
            <button
              class="btn btn-primary"
              onClick={addItem}
              disabled={item.length <= 0 ? true : false}
            >
              {toggleBtn ? "Update Item" : "Add Item"}
            </button>
            <button class="btn btn-danger" onClick={delAll}>
              Delete All
            </button>
          </div>
        </div>

        <div className="lower-half">
          <TodoList
            itemList={itemList}
            deleItem={deleItem}
            editItem={editItem}
          />
          <ToastContainer theme="colored" />
        </div>
      </div>
    </div>
  );
};

export default App;
