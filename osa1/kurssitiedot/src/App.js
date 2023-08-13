//TODO: 
// SEURAAVAKSI: Tehtävät 1.6 - 1.14
//matskut jäi C-osioon "Komponentin tila ja tapahtumankäsittely"


//header-component
const Header = (props) => {
  return <h1>{ props.course }</h1>;
}

//content-component
const Content = (props) => {
  return (
    <>
    <Part course={props.course.parts[0]} />
    <Part course={props.course.parts[1]} />
    <Part course={props.course.parts[2]} />
    </>

  );
}

//total-component
const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  );
}

// Part-component

const Part = (props) => {

  return (
    <p>{props.course.name} {props.course.exercises}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App