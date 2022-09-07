
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
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
    
    
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
// Changed the parts to objects 

  //parts to array
  const parts = [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    }, 
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


//TODO: PASS DATA TO Content-component 

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
