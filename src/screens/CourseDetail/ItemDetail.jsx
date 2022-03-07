import React from 'react'

const ItemDetail = ({item}) => {
    
  return (
    <>
        <div>{`Dentro del itemDetail ${item}`}</div>
        {/* <div>{`id: ${item.id}`}</div> */}
        <div>{`categoria: ${item.category}`}</div>
    </>
  )
}

export default ItemDetail