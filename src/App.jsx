import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'

function App() {
  const [sum, setSum] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Anotador de truco</p>
        <p>
          <Button colorScheme='blue' type="button" onClick={() => setSum((sum) => sum + 1)}>
            count is: {sum}
          </Button>
        </p>
      </header>
    </div>
  )
}

export default App
