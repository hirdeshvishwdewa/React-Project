import { createRoot } from 'react-dom/client'

function MyApp() {
  return (
    <div>
      <h1>My Experiment</h1>
    </div>
  )
}


createRoot(document.getElementById('root')).render(
    <MyApp />
)
