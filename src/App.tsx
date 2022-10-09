import './App.module.css'
import './global.css'
import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { PageContent } from './components/PageContent/PageContent'

function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <PageContent />
    </div>
  )
}

export default App
