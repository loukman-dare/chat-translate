import { useState } from 'react'

import './App.css'
import MemberSection from './component/chat-page/Sections/MemberSection/MemberSection'
import ChatPage from './component/chat-page/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChatPage />
    </>
  )
}

export default App
