import React from 'react'

function List(people) {
    //  console.log(people)
  return (
    <>{
        people.peoplelist.map((person)=>(
            <article className='person' key={person.id}>
                <img src={person.image} alt="" srcset="" />
                <div>
                    <h4>
                       {person.name}
                    </h4>
                    <p>
                        {person.age}
                    </p>
                </div>
            </article>
        ))
   
    }
    </>
  )
}

export default List