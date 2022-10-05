import React from 'react'

const ProductsList = (props) => {
    const {products} = props

  return (
    <div>
        <table border='1px'>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                    <th> Actions </th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td> {product.name} </td> 
                                <td> {product.price} </td> 
                                <td> 
                                    <button> edit </button>    
                                    <button> remove </button>    
                                </td> 
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductsList