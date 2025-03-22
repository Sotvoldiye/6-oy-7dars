import React from 'react'


 export default function Modal({modal, setModal}) {
  return (
    <div className='modal'>
      <div>
      <img src="./images/icon-order-confirmed.svg" alt="" />
      <p className="modalTitle">
      Order Confirmed
      </p>
      <p className="modalSubTitle">
      We hope you enjoy your food!
      </p>
      </div>
      <div className="modalList">
        <div className="modalDecription">
        <div className="modal_image_text">
        <img src="./images/image-baklava-desktop.jpg" alt="" />
            <div className="modalDescriptionText">
                <p className="textTitle">
                Classic Tiramisu
                </p>
                <div className="textText">
                <p className="text-length">
                    1x
                </p>
                <div className="text-price">
                @ $5.50
                </div>
                </div>

            </div>
        </div>
            <p className="priseModal">
            $5.50
            </p>
        </div>
      </div>
      
      <div className="orderTotal">
        <p className='orderTitle'>Order Total</p>
        <p className='allPrice'>$46.50</p>
      </div>
      <button onClick={()=> setModal(false)} className='sendButton'>Start New Order</button>
      </div>
  )
}

// export default Modal