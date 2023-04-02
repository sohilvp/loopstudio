import React from 'react'
import data from '../Collection/collectionData'
import './collection.css'
const Collection = () => {
  return (
    <div className='width-container'>
      <div className="collection-container">
        <div className="title">
          <h1> Our creations</h1>
          <button>See all</button>
        </div>
        <div className="grid-container">
          {data.map((item)=>{
            return(
              <div className="grid" key={crypto.randomUUID()}>
                <picture>
                  <source  media='(max-width : 700px) ' srcSet={item.img1}/>
                <img src={item.img} alt="" className='grid-img'   />
                </picture>
                

                <h3 className='grid-title'>{item.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection