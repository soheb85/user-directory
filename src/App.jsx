
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import UserList from './components/UserList'

function App() {
 

  return (
    <>
     <Header/>
     <HeroSection/>
     <div className="min-h-screen bg-gray-50">
      <UserList />
    </div>
    <Footer/>
    </>
  )
}

export default App
