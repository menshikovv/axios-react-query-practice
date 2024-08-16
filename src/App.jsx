import { useEffect } from 'react'
import './App.css'
import { useFacts } from './api/useFacts'

function App() {
  // useEffect(() => {
  //   getFacts();
  // }, [])
  const { data, isLoading } = useFacts();

  return (
    <>
      <h1>Axios Practice</h1>
      {isLoading
      ? 'Loading...'
      : data?.length
      ? <div>{data.fact}</div>
      : 'Not found'}
    </>
  )
}

export default App
