import React from 'react';

function MetalCard(props) {

  return (
    <div className='metal-card'>
        <h5 className='metal-name'>
            {props.metalName}
        </h5>
        <h6>
            <strong>Colors Available:</strong>
            {props.metalColors.map(metal => {
                return (
                    <div>{metal}</div>
                )
            })}
        </h6>
        <button className='metal-submit' onClick={() => props.selectMetal(props.metalId)}>Select</button>
    </div>
  )
}
export default MetalCard;