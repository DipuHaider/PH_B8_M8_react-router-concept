import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
        <h1 className='text-lg text-blue-300'>React router concept</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
