import React, { useState } from 'react'
import Modal from './Modal'

function YourCard() {
  const [modal, setModal] = useState(false)
  return (
    <div className=''>
    <div className="yourCard-container">
    <div className="yourCard_title">
      Your Cart (0)
      </div>
<div className="yourCard-img-text">
<img className='yourCardImg' src="./images/illustration-empty-cart.svg" alt="" />
      <p className='yourCardWarningMessage'>
      Your added items will appear here
      </p>
</div>
     <div className="yourCardList">
      <div className="cardListItem">
      <div className="yourCardItem">
      <div className="yourCardDescription">
      <div className="descriptionTitle">
      Classic Tiramisu
      </div>
      <div className="descriptonPrice">
      <p className="length">
        1x
      </p>
      <p className="price">
        @ $5.50 
      </p>
      <p className='priseStrong'>$5.50</p>
      </div>
      </div>
      <div className="btn-remove">
      <img src="./images/icon-remove-item.svg" alt="" />
      </div>
      </div>
      <div className="border"></div>
      </div>
      <div className="orderTotal">
        <p className='orderTitle'>Order Total</p>
        <p className='allPrice'>$46.50</p>
      </div>
      <div className="carbon">
        <img src="./images/icon-carbon-neutral.svg" alt="" />
      <p>This is a <strong> carbon-neutral</strong>  delivery</p>
      </div>
      <button onClick={()=> setModal(true)}  className='modalButton'>Confirm Order</button>
     </div>
    </div>
    {modal &&  <><Modal modal={modal} setModal={setModal}/>  </>
    }
    </div>
    
  )
}

export default YourCard