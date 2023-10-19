import React from 'react'

const Alert = (props) => {
    const capitalize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (props.alert&&
    <div>
      <div className="  alert alert-warning alert-dismissible fade show flex justify-between items-center" role="alert">
  <strong>{capitalize(props.alert.type)}:  {props.alert.message} </strong>
 
</div>
    </div>
  )
}

export default Alert
