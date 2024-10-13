type cardsProps ={
  imageUrl: string | undefined,
  naame: string | undefined
}

const Cards: React.FC<cardsProps> = ({imageUrl, naame}) => {
  return (
    <div className="w-32 text-lg font-medium text-[#C5C6C7] border border-white" >
      <div><img src={imageUrl} alt=""/></div>
      <p>{naame}</p>
      <div className="flex gap-1 p-1 bg-[#1F2833] ">
       <p >Quantity</p>
       <button className="font-extrabold hover:bg-blue-400 h-auto w-6">+</button>
       <button className="font-extrabold hover:bg-blue-400 h-auto w-6">-</button>
      </div>
    </div>
  )
}

export default Cards
