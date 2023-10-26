import React,{useState} from 'react'
import List from '../../List/List'
import { data } from '../../StaticData/Data'

function Home() {
    const [people, setpeople] = useState(data)
  return (
   <main>

<section className='container'>
<h3>{people.length} Birthday Today</h3>
<List peoplelist={people}/>
<button onClick={()=>setpeople([])}>Clear all</button>
</section>

   </main>
  )
}

export default Home