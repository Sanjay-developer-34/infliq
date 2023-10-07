import React, { useState } from 'react'
// import Photo_video_icon from '../../images/post_something.png'
function PostSomething() {
    // const [showModal, setShowModal] = useState(false);

    // const MyModal = () => {
    //     return (
    //         <>
            
    //         </>    
    //     )
    // }



    return (

        <>
            
            <div class="container mt-3">
  <h3>Modal Example</h3>
  <p>Click on the button to open the modal.</p>
  
  
</div>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        Modal body..
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        </>
    )
}

export default PostSomething