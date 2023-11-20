 import React from 'react'

function Stories(props) {
return (
        <div  className='Stories_content item' key={Math.random()}>
            <img src={props.imgsrc} alt=''></img>
            <p >{props.userName}</p>
            {/* <p >ashwadh chowdar</p> */}
        </div>

  )
}

export default Stories