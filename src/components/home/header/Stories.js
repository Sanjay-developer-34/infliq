 import React from 'react'
 import story1 from '../../../images/stroy1.png'
;
// import story3 from '../images/stroy3.png'
// import story4 from '../images/story4.png'
// import story5 from '../images/stroy5.png'
// import story6 from '../images/story6.png'

function Stories({imgsrc}) {
  return (
        <div  className='Stories_content item' key={Math.random()}>
            <img src={imgsrc} alt=''></img>
            <p >ashwadh_</p>
            {/* <p >ashwadh chowdar</p> */}
        </div>
  )
}

export default Stories