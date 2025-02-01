
import Parent from './Parent'

const GrandParent = () => {
  let obj={name:"Gangadhar",age:26}
  return (
    <div>
      <h1>Grand Parent</h1>
      <Parent obj={obj}/>
    </div>
  )
}

export default GrandParent
