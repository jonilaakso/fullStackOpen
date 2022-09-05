
const Header = (props) => {
  //Returns course prop in h1 tag
  return (
    <h1>{props.course}</h1>
  )
}


const Part = (props) => {

  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {

  return (
    <>
      <Part part={props.parts.part1.name} exercises={props.parts.part1.exercises} />
      <Part part={props.parts.part2.name} exercises={props.parts.part2.exercises} />
      <Part part={props.parts.part3.name} exercises={props.parts.part3.exercises} />
    </>
    
    
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1+ props.exercises2+ props.exercises3}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
// Changed the parts to objects 
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

//TODO: PASS DATA TO Content-component 

  const parts = {part1, part2, part3}

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
    </div>
  )
}

export default App