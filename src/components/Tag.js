import React, {  useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const {gif,loader,getMeme}=useGif();
    const[tag,setTag]=useState('car');
  return (
    <div className='w-5/6 lg:w-1/2  bg-red-300 mb-8 rounded-3xl border-[5px] border-red-600'>
        <div className='flex flex-col gap-4 p-5 w-full rounded-3xl items-center'>
            <h1 className='text-black  w-10/12 p-2 text-center underline text-xl uppercase font-bold rounded-md'>Random {tag} GIF</h1>
            
            {loader? (<Spinner></Spinner>):(<img className='max-h-[400px] w-full' src={gif} alt="gif"></img>) }
            <input
             type='text'
             value={tag}
            onChange={(event)=>setTag(event.target.value)}
             className='bg-white w-10/12 p-2 border border-red-300 text-black text-xl uppercase font-semibold rounded-md'>
            </input>
            <button
            className='bg-lime-600 w-10/12 p-2 text-white text-xl uppercase font-semibold rounded-md'
            onClick={()=>getMeme(tag)}>Generate</button>
        </div>
    </div>
  )
}

export default Tag