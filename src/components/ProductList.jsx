import React from 'react'
import Product from './Product'
Product
function ProductList({isPending, desserts}) {
  return (
    <div>
    <h1 className='desserts-title'>Desserts</h1>
          {isPending && <h2>Loading...</h2>}
          <div className='desktop-grid'>
            {desserts && desserts.map((d)=>{
              return <Product key={d.id} d={d}/>
            })}
          </div>
    </div>
  )
}

export default ProductList