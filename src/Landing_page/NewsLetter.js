import React from 'react'
import "./NewsLetter.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function NewsLetter() {
  return (
    <div className='newsLetter'>
        <div className="newsLetter_body">
            <div className="newsLetter_body_left">
            <h3>Join Our Newsletter</h3><br />
                <form action="#">
                    <input type="text" placeholder='Name' /><br />
                    <input type="email" placeholder='Enter Email id'  /><br />
                    <button type="submit">Submit <ArrowRightAltIcon /></button>
                </form>
            </div>

            <div className="newsLetter_body_right">
                 <img src="/media/Newletter.png" alt="image"/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter