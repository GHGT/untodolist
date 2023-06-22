
import React, { useState } from 'react'
import './App.css';
// import Todo From './components/Todo';
import CustomBtn from './components/CustomBtn'
// import GlobalStyle from '.Todo/Global';


function App() {
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      title: 'todotest',
      contents: '투드리스트.',
    },
    {
      id: Date.now(),
      title: 'todotest',
      contents: '투드리스트.',
    },
  ]);

  const [doneTodo, setDoneTodo] = useState([]);
  const [title, setTitle] = useState([]);
  const [contents, setContents] = useState([]);
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === '' && contents === '') alert('dma');
    else setTodo([...todo, newTodo]);
  };

  // 할일삭제기능
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  // 완료삭제기능
  const donedeleteTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };

  // 완료기능
  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));
  };

  // 완료취소기능
  const doneCanceHandler = (t) => {
    const newDoneTodo = {
      id: t.id,
      title: t.title,
      contents: t.contents,
    };
    setTodo([...doneTodo, newDoneTodo]);
    setDoneTodo(doneTodo.filter((dt) => t.id !== dt.id));
  };


  return (
    <>
      {/* <GlobalStyle /> */}
      <div className='Outer'>
        <div className='InputArea'>
          제목
          <input
            className='Input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}>
          </input>
          내용 <input
            className='Input'
            value={contents}
            onChange={(e) => setContents(e.target.value)}>
          </input>
          <CustomBtn buttonColor='#b1bfa6' onClick={addTodoHandler}>추가하기</CustomBtn>
        </div>
      </div>
    </>
  );
};

export default App;