import { useState } from 'react'
import './App.css'
import { AiFillWarning, AiOutlineSend, AiOutlineUnorderedList } from "react-icons/ai";

const mock = [
{ name: "Update user", stepNumber: 2, hasError: true},
{ name: "Merge Employees with Demographics", stepNumber: 1, listCount: 100},
//bad data
{}
] 

function App() {
  const [selected, setSelected] = useState<number>()
  // sorting by stepNumber to be sure the order is correct
  const sortedSteps = mock.filter((i) => i.stepNumber && i.name)
    .sort((a, b) => a.stepNumber - b.stepNumber)

  // TODO add box-shadow
  return (
    <>
    {sortedSteps.map((item, index) => {
      return (
      <>
      <div className='item' key={item.stepNumber}>
        <div onClick={() => setSelected(item.stepNumber)} className={`card ${selected === item.stepNumber ? "selected" : ""}`}>
          <div className="step">
            <AiOutlineSend />
            <div className="step-number">
              {item.stepNumber}
            </div>
            <p>{item.name}</p>
          </div>
          {item.listCount && (
            <div className="list-count">
            <AiOutlineUnorderedList />
              {item.listCount}
            </div>
          )}
        </div>
        <AiFillWarning className={`icon ${item.hasError ?"":"hidden"}`} />
      </div>
      {index < (sortedSteps.length - 1) && <Spacer />}
      </>
      )}
    )}
    </>
  )
}

function Spacer() {
  return <div className='spacer'>
  <div className='column'/>
  <div className='line'/>
  </div>
}


export default App
