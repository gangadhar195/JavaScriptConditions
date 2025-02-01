
import Child from "./Child"
const Parent = (obj) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child obj={obj}/>
    </div>
  )
}

export default Parent
