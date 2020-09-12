import React from 'react';


const MyWorks = ({title, img, description}) => {
  return(
    <>
    <div className="work">
      <img className="testimg" src={img} alt="lalla"></img>
    </div>
    <div className="paragraph">
      <p className="description testpara">{description}</p>
    </div>
    </>
  )
}

export default MyWorks;