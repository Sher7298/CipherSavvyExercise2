import React from 'react'

export const GallaryCom = (props) => {
  
  const bg = props.albumId === 1 ? 'green' : ( props.albumId === 2 ? 'red' : (props.albumId === 3 ? 'blue' : " "))  
    return (
        <>
          <div className="card" style={{width: '18rem', borderColor: bg}} key={props.id}>
            <img className="card-img-top" src={props.url} alt="Card image cap" />
            <div className="card-body">
    
              <h5 className="card-title"> {props.titl}</h5>
            </div>
          </div>  
        </>
    )
}
