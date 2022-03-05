import React, { useContext, useEffect, useState } from 'react'
import AppLevelContext from '../../Context/AppLevelContext'
import Frontend from '../../images/front.png'
import axios from 'axios'
const TodoList = () => {
    const { search, state, dispatch } = useContext(AppLevelContext)
    const { todos } = state


    //FETCH TODOS
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:5000/api/v1/tasks')
            await dispatch({ type: 'SUCCESS_TODOS', ...state, status: response.status, payload: response.data })
        }
        fetchTodos()
    }, [todos.length])

    // DELETE TODOS
    const deleteTodos = async (id) => {
        const response = await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`)
        await dispatch({ type: 'DELETE_TODO', ...state, status: response.status, payload: response.data })
    }

    // Pagination Start
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage] = useState(2)
    const lastTodo = currentPage * todosPerPage
    const firstTodo = lastTodo - todosPerPage
    const currentTodos = (todo) => {
        if (todo <= 0) {
            return todo
        } else {
            return todo.slice(firstTodo, lastTodo)
        }
    }
    const totalPages = todos.length
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPages / todosPerPage); i++) {
        pageNumbers.push(i)
    }
    const pagination = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {
                !state.loading ?
                    <div className="container d-flex flex-column justify-content-end align-items-center gap-5 ">
                        <>
                            {todos.length > 0 ?
                                <div className='container mt-5 gap-2 d-flex justify-content-center position-relative'>
                                    {currentTodos(todos).filter(todo => todo.title.toLowerCase().includes(search)).map(todo => (
                                        <div key={todo._id} className="card p-3" style={{ width: "18rem" }}>
                                            <img src={Frontend} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{todo.title}</h5>
                                                <p className="card-text">{todo.description}</p>
                                                <button onClick={() => deleteTodos(todo._id)} className='btn mt-3 btn-danger position-absolute bottom-0'>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div> : <h1 style={{ marginTop: '55px' }}>Henüz Todo Eklenmedi </h1>
                            }


                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className={"page-item active" + (currentPage ? "disabled" : "")}>
                                        <a onClick={() => pagination(currentPage - 1)} className="page-link disabled" href="#!" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    {pageNumbers.map((number, index) => (

                                        <li onClick={() => pagination(number)} key={index} className={"page-item " + (currentPage === number && "active")}  >
                                            <a className="page-link " href="#!">{number}</a>
                                        </li>
                                    ))}
                                    <a onClick={() => pagination(currentPage + 1)} className="page-link" href="#!" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </ul>
                            </nav>

                        </>
                    </div>
                    : <div><h1>Loading</h1></div>
            }
        </>
    )
}

export default TodoList