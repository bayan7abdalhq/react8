import React from 'react'

export default function Input({id,title,type,value,name,handelData,errors}) {
  return (
    <div className="mb-3">
    <label  htmlFor={id} className="form-label">{title}</label>
    <input type={type} className={`form-control`} id={id} name={name} onChange={handelData} value={value}/>
    {errors[name] &&<p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}
