
import axios from 'axios'
import './App.css'
import Cardoption from './componets/cardoption/Cardoption'
import Navbar from './componets/Navbar'
import Charts from './componets/rechart/Charts'
import { Suspense } from 'react'
import Markschart from './componets/markchartData/Markschart'


function App() {

  const markesPromies = axios.get('markesData.json')

  return (
    <>
    <Navbar></Navbar>
      <Cardoption></Cardoption>
      
    <Charts></Charts>

    <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
      <Markschart markesPromies={markesPromies}>
    
      </Markschart>
    </Suspense>
    </>
  )
}

export default App
