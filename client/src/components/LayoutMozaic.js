import React from 'react';

const LayoutMozaic = (props) => {

  return (
    <div onClick={props.layoutStateTrue} id={'layout-mozaic'} >
      <div className={'layout-mozaic__short'}></div>
      <div className={'layout-mozaic__long'}></div>
      <div className={'layout-mozaic__long'}></div>
      <div className={'layout-mozaic__short'}></div>
    </div>
  )
}
export default LayoutMozaic;