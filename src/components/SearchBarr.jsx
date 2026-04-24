import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import {setQuery} from "../redux/features/searchSlice"

const searchBar = () => {
  let[formData,setFormData]= useState()
  const dispatch = useDispatch()

  let handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(setQuery(formData))
    setFormData("")
  }
  
  return (
   <form className='flex p-4 bg-gray-800  ' onSubmit={handleSubmit}>
    <input className='px-3 py-1 text-xl m-3 rounded border-2 w-full' onChange={(e)=>{setFormData(e.target.value)}} required value={formData} type="text" placeholder='Search Something..'/>
    <button className='active:scale-95 cursor-pointer px-3 py-2 text-xl m-3 rounded border-2' type='submit'>Search</button>
   </form>
  )
}

export default searchBar
