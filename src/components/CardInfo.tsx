import { X } from 'lucide-react';

type CardInfoProps = {
  onClose: () => void
}

const  CardInfo : React.FC<CardInfoProps> = ({onClose}) => {


  return (
    <div className='fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm flex justify-center items-center'>
      <div className='fixed flex flex-col gap-5 h-[20rem] w-[35rem]'>
       <button className='place-self-end' onClick={onClose}><X className='text-white'/></button>
       <div className=' flex flex-col items-center pt-10 rounded-lg bg-cyan-100 h-[16rem]'>
        <h1 className='text-2xl  font-bold'>Please Enter Your API Key</h1>
        <p className='font-semibold w-[25rem] mt-5 text-center'>*We asure that we will not going to store your API key anywhere... Please be free!</p>
        <form className='flex  gap-2 items-center mt-6 px-5'>
          <input type="text" placeholder='API Key...' required className='w-[16rem] rounded-md p-1 outline-none'/>
        </form>
       </div>
      </div>
    </div>
  )
}

export default CardInfo
