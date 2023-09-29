import React, { useState } from 'react'
import './App.css';
import uuid from 'react-uuid'
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [item, setItem] = useState('')   //Input
  const [itemList, setItemList] = useState([])   //Button AddItem

  const changeHandler = (e) => {   //Input
      setItem(e.target.value);
  }

  const addItem = () => {     //button addItem
    const itemObj = {id: uuid(), itemName: item}
    setItemList((prevItem) => [...prevItem, itemObj]);
    setItem('');
    toast.success('Item Added SuccessFully')
  }

  const deleItem = (id) => {
    console.log(id)
    const filterItem = itemList.filter ((value) =>{
      return value.id !== id;
    })
    setItemList(filterItem);
    toast('Item Deleted SuccessFully')
  }

  const delAll = () => {
    setItemList([]);
    toast('All Item Deleted SuccessFully')
  }

  return (
      <div className='container'>
        <div className='parent-div'>
          <h1 className='heading'>React To-Do List App</h1>
          <div className='upper-half'>
            <div className='input-div'>
              {/* <input type='search' placeholder='To-Do....'/> */}
              <input value={item} onChange={changeHandler} type="search" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='To-Do List....'/>
            </div>
            <div className='btn'>
              <button class="btn btn-primary" onClick={addItem} disabled={item.length <= 0 ? true : false}>Add Item</button>
              <button class="btn btn-danger" onClick={delAll}>Delete All</button>
            </div>
          </div>

          <div className='lower-half'>
            <TodoList itemList={itemList} deleItem={deleItem}/>
            <ToastContainer theme='colored' />
          </div>
        </div>
      </div>
    
  )
}

export default App