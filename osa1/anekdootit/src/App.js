import { useState } from 'react'


const DaysAnecdote = (props) => {

  let numbers = props.currentVote;

  return(
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <p>has {numbers} votes</p>
    </>
  )
}

const MostVotedAnecdote = (props) => {


  let arr = props.voteCount;
  let mostVotes = 0;
  let anecdote = "";
  
  if (arr.length > 0){
    mostVotes = arr[0].votes;
    anecdote = props.anecdotes[arr[0].number];
  }

  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {mostVotes} votes</p>
    </>
  )
}

//Component for button
const Button = (props) => {

  return (
    <button onClick={ props.handleClick }>
      { props.text }
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  
  const [selected, setSelected] = useState({number: 0, votes: 0});
  const [voteList, setVoteList] = useState([]);
  const [currentVote, setCurrentVote] = useState(0);

  //Getting random number between 0 and anecdotes length. 
  //also keeping sure every click updates anecdote
  const getRandom = () => {

    let select = Math.floor(Math.random() * anecdotes.length)

    while (select === selected.number) {
      console.log("reselecting cause select: ", select, " and selected: ", selected);
      select = Math.floor(Math.random() * anecdotes.length); 
      console.log("select after: ", select);
    } // while end

    //Löytyykö ? 
    for (let i = 0; i < voteList.length; i++){
      if (voteList[i].number === select){
        const numbers = voteList[i].votes;
        setCurrentVote(numbers);
        break;
      }
      setCurrentVote(0);
    }

    setSelected({number: select, votes: currentVote});

  } // getRandom end


  //Function for vote-button
  const vote = (myVote) => {

    let isfound = false;
    let newArr = [];

    //Löytyykö ? 
    for (let i = 0; i < voteList.length; i++){
      newArr = [...voteList];
      if (voteList[i].number === myVote.number){
        isfound = true;
        newArr[i].votes += 1;
        setCurrentVote(newArr[i].votes);
        setVoteList(newArr.sort(({votes:a}, {votes:b}) => b-a));
      }
      
    } 

    //if votes are not found, add the object and vote 
    if (isfound !== true) {
      setVoteList(voteList.concat({number: myVote.number, votes: 1}));
      setCurrentVote(1);
    }
 
  } // vote-function  end

  return (
    <div>
      <DaysAnecdote anecdote = {anecdotes[selected.number]} currentVote={currentVote} />
      <Button text="Vote" handleClick = { () => {
        vote(selected);
      }
    }/>
      <Button text="Next anecdote" handleClick = { () => getRandom()} />
      <MostVotedAnecdote anecdotes={anecdotes} voteCount = {voteList} />
    </div>
  )
} // app end

export default App