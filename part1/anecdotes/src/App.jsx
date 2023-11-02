import { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const Button = ({ onSmash, text }) => (
    <button onClick={onSmash}>
        {text}
    </button>
)

const AnecdoteBlock = ({anecdote, vote, text}) => {
    return(
        <div>      
            <h1>
                {text}
            </h1>
            <p> {anecdote}</p>
            <p> this anecdote has {vote} votes </p>
            
        </div>   
    )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
    const [selected, setSelected] = useState(0)
    const [votes, setVotes]  = useState(Array(anecdotes.length).fill(0))
   
    const getRandomAnecdote = () => {
        let newAnecdote = getRandomInt(0, anecdotes.length)
        setSelected(newAnecdote)
    }
    const voteAnecdote = () => {
        let newVotes  = [...votes]

	newVotes[selected] = votes[selected] + 1
        setVotes(newVotes)
    }
  
    return (
        <div>
            <AnecdoteBlock
                text="Anecdote of the Day"
                anecdote={anecdotes[selected]}
                vote={votes[selected]}
	    />
            <Button onSmash={getRandomAnecdote}
                    text="Next"/>
            
            <Button onSmash={voteAnecdote}
                    text="Vote"/>
	    
            <AnecdoteBlock
                text="Anecdote with the most votes"
                anecdote={anecdotes[votes.indexOf(Math.max(...votes))]}
                vote={Math.max(...votes)}
	    /> 

        </div>
    )
}

export default App
