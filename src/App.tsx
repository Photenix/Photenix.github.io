import './App.css'
import AppRouters from './router/AppRouter'
import AOS from 'aos';
import 'aos/dist/aos.css'
import LanguageProvider from './container/LanguageProvider';

function App() {
  AOS.init()
  return (
    <div className="App">
      <LanguageProvider>
        <AppRouters/>
      </LanguageProvider>
    </div>
  )
}

export default App
