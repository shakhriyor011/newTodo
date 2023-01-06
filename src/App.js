
import { useEffect, useState } from 'react';
import SvgIcons from './assets/icons/SvgIcons';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import ToDoHeader from './components/ToDoHeader/ToDoHeader';
import ToDoModal from './components/ToDoModal/ToDoModal';
import ToDoNav from './components/ToDoNav/ToDoNav';

const getTodos = () => {
  const todos = localStorage.getItem('todos')
  if (todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}


function App() {
  const [gridToList, setGridToList] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [todos, setTodos] = useState(getTodos())
  const [search, setSearch] = useState('')

  // useState() - Хук для создания состояния. В себя принимает изначальное значение состояния
  // const [value, setValue] = useState('')
  // console.log(value);
  // useEffect(() => {
  //   return () => {  
  //   }
  // }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleAddTodos = (e) => {
    e.preventDefault()
    if (title && content) {
      const newTodos = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        content,
        date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
      }

      setTodos([...todos, newTodos])
      setOpenModal(false)
      setTitle('')
      setContent('')
    }
  }
  
  const handleRemoveTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }
  
  const handleEditTodo = (id, title, content) => {
    const newTodo = todos.map(todo => {
      if(todo.id === id) {
        todo.title = title
        todo.content = content
        todo.date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
      }
      return todo
    })
    setTodos(newTodo)
  }




  return (
    <div className="App">
      <ToDoHeader search={search} setSearch={setSearch} />
      <div className="container">
        <ToDoNav
          gridToList={gridToList}
          setGridToList={setGridToList}
        />
        <div className={gridToList ? '' : 'grid'}>
          {todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())).map(todo => (
            <ListItem
              key={todo.id}
              gridToList={gridToList}
              todo={todo} 
              removeTodo={handleRemoveTodo}
              editTodo={handleEditTodo}
              />
          ))}

        </div>
      </div>
      <div className="App-btn">
        <Button click={handleOpenModal}>
          <SvgIcons id='pencil' />
        </Button>
      </div>
      <ToDoModal
        text='Добавить'
        openModal={openModal}
        close={handleCloseModal}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleBtn={handleAddTodos}
      />
    </div>
  );
}

export default App;
