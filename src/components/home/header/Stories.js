 import React from 'react'
 import story1 from '../../../images/stroy1.png'
;
// import story3 from '../images/stroy3.png'
// import story4 from '../images/story4.png'
// import story5 from '../images/stroy5.png'
// import story6 from '../images/story6.png'

function Stories(props) {
  return (
        <div  className='Stories_content item' key={Math.random()}>
            <img src={story1} alt=''></img>
            <p >ashwadh_a</p>
            {/* <p >ashwadh chowdar</p> */}
        </div>
  )
}

export default Stories