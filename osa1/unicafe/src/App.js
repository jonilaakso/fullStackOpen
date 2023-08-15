import { useState } from 'react'


//TODO: 

//Seuraavaksi 1.11 unicafe step6
//KORJAA AVERAGE JA POSITIVE. Laskun pitäisi tapahtua lisäysten jälkeen, ei samanaikaisesti.


//Statistiikat
const Statistics = (props) => {

  return(
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good:" value={ props.good } />
          <StatisticLine text="Neutral:" value={ props.neutral } />
          <StatisticLine text="Bad:" value={ props.bad } />
          <StatisticLine text="All:" value={ props.all } />
          <StatisticLine text="Average:" value={ props.average } />
          <StatisticLine text="Positive:" value={ props.positive } />
        </tbody>
      </table>

    </>
  );
}

const StatisticLine = (props) => {
  if (props.text === "Average:") {
    return (
      <tr>
        <td>{ props.text }</td>
        <td>{ props.value.toFixed(1) } </td>
      </tr>
    )
  }
  else if (props.text === "Positive:"){
    return(
      <tr>
        <td>{ props.text }</td>
        <td>{ props.value.toFixed(1) } % </td>
      </tr>
    )

  }

  else{
    return (
      <tr>
        <td>{ props.text }</td>
        <td>{ props.value }</td>
      </tr>
    )
  }

}

//Button component
const Button = (props) => {
  
  return(
    <button onClick={props.handleClick}>
      { props.text }
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
 

  const updateStats = (name) => {

    switch (name){

      case "Good":
        const updatedGood = good + 1;
        setGood(updatedGood);
        break;
      case "Neutral":
        const updatedNeutral = neutral + 1;
        setNeutral(updatedNeutral);
        break;
      case "Bad":
        const updatedBad = bad + 1;
        setBad(updatedBad);
        break;
      default: 
        break;
    }

    //set all
    const updatedAll = all + 1;
    setAll(updatedAll);
    setAverage((good - bad) / updatedAll);
    setPositive((good / updatedAll * 100));
  }
  


  return (
    <div>
      <h1>Give Feedback</h1>
   
      <Button handleClick={() => {
        updateStats("Good");
        }} 
        text="Good" /> 

      <Button handleClick={() => {
        updateStats("Neutral");
      }} text="Neutral" /> 

      <Button handleClick={() => {
        updateStats("Bad");
      }} text="Bad" /> 


      <Statistics 
      good = { good }
      neutral = { neutral }
      bad = { bad }
      all = { all }
      average = { average }
      positive = { positive }
      />
    </div>
  )
}

export default App