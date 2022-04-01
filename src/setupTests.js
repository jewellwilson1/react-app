export const JsonProblem = () => {
  const fun = () => {
    console.log('this works');
  }
  return (
    <div>
      Recursion Problem
      <button onClick={fun}>
        run
      </button>
    </div>
  )
}
