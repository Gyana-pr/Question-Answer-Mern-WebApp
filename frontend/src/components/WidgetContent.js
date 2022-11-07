import React from 'react'
import "./css/WidgetContent.css"

function WidgetContent() {
  return (
    <div className='widget__contents'>
        <div className='widget__content'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTFCdVSNIwhcySyDwTyLKhkpDNIJ7l2InNn2zvKaRQypTojweygzLiPFj87SFjBjtAzM&usqp=CAU' alt='' />
            <div className='widget__contentTitle'>
                <h5>Mobile App programmer</h5>
                <p>The best of mobile app development comapny</p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent