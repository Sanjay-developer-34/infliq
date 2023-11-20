import React from 'react'
import Suggestion_img1 from '../../../images/suggestion_img1.png'
import Suggestion_img2 from '../../../images/suggestion_img2.png'
import { useCheckbox } from '../../Contexts/CheckboxContext'


function Suggestions() {

const {checked}=useCheckbox();

    return (
        <div className={`suggestion_sec ${checked ? "down" : ''}`}>
            <div className=''>
                <div className='Suggestions '>
                    <div className='heading'>
                        <p>Suggestions for you</p>
                    </div>
                    <div className="Suggestions_body">
                        <div className='Sugg_main'>
                            <div className='sugg_content'>
                                <img src={Suggestion_img1} alt=''></img>
                                <div>
                                    <p className='sugg_p1'>
                                        imkir
                                    </p>
                                    <p className=' sugg_p2'>
                                        Follows you
                                    </p>
                                </div>
                            </div>
                            <div className='follow_btn'>
                                <p>Follow</p>
                            </div>
                        </div>
                        <div className='Sugg_main'>
                            <div className='sugg_content'>
                                <img src={Suggestion_img2} alt=''></img>
                                <div>
                                    <p className='sugg_p1'>
                                        organic__al
                                    </p>
                                    <p className=' sugg_p2'>
                                        Followed by chirag_singla17
                                    </p>
                                </div>
                            </div>
                            <div className='follow_btn'>
                                <p className='follow'>Follow</p>
                            </div>
                        </div>
                    </div>
                    <button className='foot_btn '>See all </button>
                </div>
            </div>
        </div>
    )
}

export default Suggestions