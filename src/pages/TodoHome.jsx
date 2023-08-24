import React, { useState, useContext, useEffect } from "react";
import TodoList from '../components/TodoList'
import { TodoContext } from '../MyContext'
import '../App.css'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTableBody,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";

const TodoHome = () => {

  const [todoInput, setTodoInput] = useState('')
  const { todos, setTodos } = useContext(TodoContext)


  useEffect(() => {
    console.log("todos: ", todos.length)
  }, [])

  const addTodo = (event) => {
    event.preventDefault()

    // If todo input field is empty then todo should not be added in the todo-list
    if(todoInput.trim() === '')
      return

    setTodos([ ...todos, {
      id: todos.length + 1,
      body: todoInput,
      status: 'In Progress',
      editMode: false
    }])

    setTodoInput('')
    console.log(todos.length)
  }

  return (
    <form className="vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do List</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      value={todoInput}
                      onChange={(e) => setTodoInput(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="submit" onClick={addTodo}>Add</MDBBtn>
                  </MDBCol>
                </MDBRow>

                {todos.length > 0 ?
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  
                  <TodoList 
                    todos={todos} 
                    setTodos={setTodos}
                  />

                </MDBTable>
                : <></>}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default TodoHome;