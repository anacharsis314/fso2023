const Header = (props) => {
  return (
    <div>
	<h1>{props.course}</h1>
    </div>
  )
}

const Part = (part) => {
    console.log(part)
    return(
    <p>
	{part.part.name} {part.part.exercises}
    </p>
    )
}

const Content = (parts) => {
    return(
	<div>
	    <Part
		part = {parts.parts[0]}  />
	    <Part
		part = {parts.parts[1]}  />
	    <Part
		part = {parts.parts[2]}  />
	</div>
    )}

const Total = (parts) => {
    return(
	<div>
	    <p>
		Number of Exercises {parts.parts.reduce(((acc, x) =>
		    acc + x.exercises), 0)}
	    </p>
	</div>)}

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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
