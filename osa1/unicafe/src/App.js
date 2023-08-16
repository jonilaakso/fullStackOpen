import { useState } from 'react'


//Statistiikat
const Statistics = (props) => {

  if (props.all > 0){
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
  else{
    return(
      <p>No feedback given</p>
    )
  }

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
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  const updateGood = () => {
    const updatedGood = good + 1;
    const updatedAll = all + 1;
    const updatedAverage = (updatedGood - bad) / updatedAll;

    setAll(updatedAll);
    setGood(updatedGood);
    setAverage(updatedAverage)
    setPositive((good / updatedAll * 100));
  }

  const updateNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = all + 1;
    const updatedAverage = (good - bad) / updatedAll;

    setAll(updatedAll);
    setNeutral(updatedNeutral);
    setAverage(updatedAverage)
    setPositive((good / updatedAll * 100));
  }

  const updateBad = () => {
    const updatedBad = bad + 1;
    const updatedAll = all + 1;
    const updatedAverage = (good - updatedBad) / updatedAll;

    setAll(updatedAll);
    setBad(updatedBad);
    setAverage(updatedAverage)
    setPositive((good / updatedAll * 100));
  }

  return (
    <div>
      <h1>Give Feedback</h1>
   
      <Button handleClick={() => {
        updateGood();
        }} 
        text="Good" /> 

      <Button handleClick={() => {
        updateNeutral();
      }} text="Neutral" /> 

      <Button handleClick={() => {
        updateBad();
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