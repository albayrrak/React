import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// Components Import
import { TodoAdd, TodoList, Header} from './Components'

function App() {

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path="/" element={<TodoAdd />} />
                <Route path='/todos' element={<TodoList />} />
            </Routes>
        </div>

    );
}

export default App;
