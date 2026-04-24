import React, { useEffect } from 'react'
import {GetPhotos} from "../api/MediaApi"
import { useDispatch, useSelector } from 'react-redux'
import {setError,setLoading,setResults} from "../redux/features/searchSlice"
import ResultCard from './ResultCard'

const ResultGrid = () => {
    let {query,Tab,results,loading,error} = useSelector((store)=>store.search)
    let dispatch = useDispatch()

   let getData =async()=>{
    let data="";
      if(Tab=="Photos"){
        let res = await GetPhotos(query)
        data = res.results.map((item)=>({
          id:item.id,
          title:item.alt_description,
          src:item.urls.full
        }))
      }
      dispatch(setResults(data))
   }

   useEffect(()=>{
      getData()
   },[query])

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {results.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>
  )
}

export default ResultGrid