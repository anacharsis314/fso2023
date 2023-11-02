import { useState } from 'react'




const Button = ({ onSmash, text }) => (
    <button onClick={onSmash}>
        {text}
    </button>
)

const Header = () => {
    return(
        <h1>give feedback</h1>
    )

}

const StatisticLine = ({text, value}) => {
    return(
        <div>
            <td> {text}  </td>
            <td> {value} </td>
        </div>
    )
}
const Statistics = ({ goods, bads, neutrals }) => {
    if (goods + bads + neutrals != 0 ){
        return(
        <>
            <h1>statistics</h1>
            <div>
                <StatisticLine text="good" value={goods}/>
                <StatisticLine text="neutral" value={neutrals}/>
                <StatisticLine text="bad" value={bads}/>
                <StatisticLine text="all" value={goods + bads + neutrals}/>
                <StatisticLine text="average" value={(goods - bads) / (goods + bads + neutrals)} />
                <StatisticLine text="positive" value={(goods/(goods + neutrals + bads)).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})}/>
            </div></>
    )}
    else {
        return(
            <>
                <h1>statistics</h1>
                <div>
                    <p> No input </p>
                </div>
            </>)}
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGoodByOne    = () => setGood(good + 1)
    const incBadByOne     = () => setBad(bad + 1)
    const incNeutralByOne = () => setNeutral(neutral + 1)
    return (
        <div>
            <Header/>
            <Button onSmash={incGoodByOne}
                    text="Good"/>
            <Button onSmash={incNeutralByOne}
                    text="Neutral"/>
            <Button onSmash={incBadByOne}
                    text="Bad"/>
            <Statistics
                goods   = {good}
                bads    = {bad}
                neutrals= {neutral}
            />
        </div>
    )
}

export default App
