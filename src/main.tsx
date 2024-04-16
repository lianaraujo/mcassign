import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const mock = [
{ name: "Update user", stepNumber: 2, hasError: true},
{ name: "Merge Employees with Demographics", stepNumber: 1, listCount: 100},
{ stepNumber: 3, listCount: 100},
//bad data
{}
] 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App data={mock} />
  </React.StrictMode>,
)
