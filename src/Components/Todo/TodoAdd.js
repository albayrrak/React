import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import AppLevelContext from '../../Context/AppLevelContext'
import TodoModal from './TodoModal'


const TodoAdd = () => {
    const { input, setInput } = useContext(AppLevelContext)

    const createTodo = async () => {
        await axios.post("http://localhost:5000/api/v1/tasks", input)
    }


    return (
        <div className="container d-flex justify-content-center align-items-center h-75">
            <form className=" pb-4 border border-1 rounded-2 d-flex flex-column justify-content-center align-items-center shadow-sm">
                <h4 className="w-100 text-center text-md-center text-dark mb-5 bg-light p-3 rounded-2" style={{ fontWeight: "bold" }}> TODO APP</h4>

                <div className="mb-3 w-75 ">
                    <label htmlFor="exampleFormControlInput1" className=" font-xl form-label colo">Başlık Giriniz</label>
                    <input type="text" value={input.title} name="title" className="form-control" id="exampleFormControlInput1" placeholder="Başlık girin" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Açıklama Giriniz</label>
                    <textarea value={input.description} name="description" className=" form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}></textarea>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => createTodo()} type="button" className={input.title.length <= 5 && input.description.length <= 15 ? "mt-5 btn btn-primary disabled" : "mt-5 btn btn-primary"} style={{ width: "100%" }}>Todo Ekle</button>

                    <TodoModal input={input} />
                </div>
            </form >
        </div>
    )
}

export default TodoAdd