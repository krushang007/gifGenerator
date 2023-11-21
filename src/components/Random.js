import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const {gif,loader,getMeme}=useGif();
   
  return (
    <div className='w-5/6 lg:w-1/2  bg-green-300 rounded-3xl border-[5px] border-green-600'>
        <div className='flex flex-col gap-4 p-5 w-full rounded-3xl items-center'>
            <h1 className='text-black  w-10/12 p-2 text-center underline text-xl uppercase font-bold rounded-md'>A Random GIF</h1>
            
            {loader? (<Spinner></Spinner>):(<img className='max-h-[400px] w-full' src={gif} alt="gif"></img>) }
            <button
            className='bg-lime-600 w-10/12 p-2 text-white text-xl uppercase font-semibold rounded-md'
            onClick={()=>getMeme()}>Generate</button>
        </div>
    </div>
  )
}

export default Random