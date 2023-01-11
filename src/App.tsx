import './App.css'
import AppRouters from './router/AppRouter'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  AOS.init()
  return (
    <div className="App">
      <AppRouters/>
    </div>
  )
}

export default App
