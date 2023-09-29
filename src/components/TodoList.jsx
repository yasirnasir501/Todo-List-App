import React from 'react';
import './TodoList.css';
import {MdDeleteForever} from 'react-icons/md'
import {AiTwotoneEdit} from 'react-icons/ai'


const TodoList = (props) => {
    const {itemList, deleItem} = props;
  return (
    <>
    { //itemList?.length !== 0 ?
     itemList.map((val) => {
        return(
            <div className='item'>
                <div>
                    <span className='txt'>{val.itemName}</span>
                </div>

                <div className='btns'>
                    <div className='edit'>
                        <AiTwotoneEdit />
                    </div>

                    <div className='delete'>
                        <MdDeleteForever onClick={() => deleItem(val.id)}/>
                    </div>
                </div>
            </div>
        )
    })
    // : 'No Item Display...'
    }
    </>
  )
}

export default TodoList