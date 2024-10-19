import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "Hirdesh",
    age: 34
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel="Chai aur code" myArr={[1,2,3]} user={myObj}></Card>
    </>
  )
}

export default App
