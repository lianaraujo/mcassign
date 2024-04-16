import { Fragment, useState } from 'react'
import './App.css'
import { AiFillWarning, AiOutlineSend, AiOutlineUnorderedList } from "react-icons/ai";

type Step = {
  name?: string
  stepNumber?: number
  listCount?: number
  hasError?: boolean
}

function App({data}: {data: Step[]}) {
  const [selected, setSelected] = useState<number>()
  // sorting by stepNumber to be sure the order is correct
  const sortedSteps = data.filter((i) => i.stepNumber)
    .sort((a, b) => a.stepNumber - b.stepNumber)

  // TODO add box-shadow
  return (
    <>
    {sortedSteps.map((item, index) => {
      return (
      <Fragment key={item.stepNumber}>
      <div className='item'>
        <div onClick={() => setSelected(item.stepNumber)} className={`card ${selected === item.stepNumber ? "selected" : ""}`}>
          <div className="step">
            <AiOutlineSend />
            <div className="step-number">
              {item.stepNumber}
            </div>
            <p>{item.name || "Unknown"}</p>
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
      </Fragment>
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
