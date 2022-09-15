import { useState } from 'react'

const App = () => {

  //tilamuuttujat nappeja varten
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  /* TODO: Laajenna sovellusta siten, että se näyttää palautteista enemmän statistiikkaa: yhteenlasketun määrän, keskiarvon (hyvän arvo 1, neutraalin 0, huonon -1) ja sen kuinka monta prosenttia palautteista on ollut positiivisia: */

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={ () => setGood(good + 1)}>
        Good 
      </button>
    

      <button onClick={ () => setNeutral(neutral + 1)}>
        neutral
      </button>
     

      <button onClick={ () => setBad(bad +1)}>
        bad
      </button>
      

      <h1>statistics</h1>
      <p>Good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

export default App
