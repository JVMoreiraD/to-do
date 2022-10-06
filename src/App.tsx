import './App.module.css'
import './global.css'
import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'

function App() {

  return (
    <div>
      <Header />
      <NewTask />
    </div>
  )
}

export default App
