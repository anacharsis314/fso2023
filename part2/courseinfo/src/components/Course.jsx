
const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
<p>
    {part.name} {part.exercises}
</p>

const Content = ({ parts }) =>
      { return(
          <div>
              {parts.map(coursePart =>
		  <Part part={coursePart}
			key={coursePart.id}
		  />)}    
          </div>
      )
      }

const Course = ({course}) => {

    return(
	<>
	    <Header course={course.name}/>
	    <Content parts={course.parts}/>
	    <p>Total classes  {course.parts.reduce( (acc, courses) => acc + courses.exercises, 0)} </p>
	</>
    )
}

export default Course
