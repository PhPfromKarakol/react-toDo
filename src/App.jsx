import { useState } from 'react'
import './App.css'
import { CssBaseline } from '@mui/material'
import ToDoList from './ToDoList'
import Navbar from './Navbar'


function App() {

  return (
    <>
      <Navbar />
      <CssBaseline />
      <ToDoList />
    </>
  )
}

export default App
