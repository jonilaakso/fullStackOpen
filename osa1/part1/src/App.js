const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {


  return(

    <div>
      <h1>Greetings</h1>
      <Hello name="Maya"/>
      <Hello name="Pekka"/>
      <Hello />
    </div>

  )

  }

export default App;
