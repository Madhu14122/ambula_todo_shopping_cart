import React, { useContext, useEffect, useState } from 'react'
import { MDBBtn, MDBTableBody } from "mdb-react-ui-kit";
import { TodoContext } from '../MyContext';

function TodoList({ todos, setTodos }) {
  // const { todos, setTodos } = useContext(TodoContext)
  const [ editTodoBody, setEditTodoBody ] = useState('')
  const [ currentEditCount, setCurrentEditCount ] = useState(0)

  const deleteTodo = (event, todoId) => {
    event.preventDefault()
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const finishTodo = (event, todoId) => {
    event.preventDefault()
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.status = 'Finished'
      }
      return todo
    }))
  }

  const editTodo = (event, todoId) => {
    console.log("called edit")
    event.preventDefault();

    console.log("Edit count : ", currentEditCount)

    if(currentEditCount > 0)
      return

    
    // console.log("Edit mode false: ", editModes)
    // console.log("All todods: ", todos.length)

    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.editMode = true
        setEditTodoBody(todo.body)
      }
      return todo
    }))

    setCurrentEditCount(currentEditCount + 1)
  }

  const saveTodo = (event, todoId) => {
    event.preventDefault()
    setCurrentEditCount(currentEditCount - 1)

    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.body = editTodoBody
        todo.editMode = false
      }
      return todo
    }))

    setEditTodoBody('')
  }

  if (todos.length === 0)
    return <></> 
  
  return (
    <MDBTableBody>
      {
        todos.map((todo, index) => (
          <tr key={index}>
            <th scope="row">{todo.id}</th>
            {
              todo.editMode ? <input value={editTodoBody} onChange={(e) => setEditTodoBody(e.target.value)}/>
                            : <td>{todo.body}</td>
            }
            <td>{todo.status}</td>
            
            {
              todo.editMode
                ? <td>
                    <MDBBtn type="submit" color="info" className="ms-1" onClick={(event) => saveTodo(event, todo.id)}>
                      Save
                    </MDBBtn>
                  </td>
                : <td>
                    <MDBBtn type="submit" color="info" className="ms-1" onClick={(event) => editTodo(event, todo.id)}>
                      Edit
                    </MDBBtn>
                  </td>
            }

            <td>
            <MDBBtn type="submit" color="danger" onClick={(event) => deleteTodo(event, todo.id)}>
              Delete
            </MDBBtn>
            </td>

            <td>
            <MDBBtn type="submit" color="success" className="ms-1" onClick={(event) => finishTodo(event, todo.id)}>
              Finished
            </MDBBtn>
            </td>

            
          </tr>
        ))
      }
    </MDBTableBody>
  )
}

export default TodoList