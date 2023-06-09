import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Chat from '@/components/chat'

const App = () => {


  return (
    <div className="">
     <BrowserRouter>
        <Routes> 
          <Route path="/chat" element={<Chat />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
