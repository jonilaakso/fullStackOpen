
const Header = (props) => {
  //Returns course prop in h1 tag
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {

  const Part = (props) => {

    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  return (
    <>
      <Part part={props.parts.part1} exercises={props.exercises.exercises1} />
      <Part part={props.parts.part2} exercises={props.exercises.exercises2} />
      <Part part={props.parts.part3} exercises={props.exercises.exercises3} />
    </>
    
    
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //variables to collect parts and exercises
  const parts = {part1, part2, part3}
  const exercises = {exercises1, exercises2, exercises3}
 
 
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

export default App