const Cards = () => {
  return (
    <div className="w-32 text-lg font-medium text-[#C5C6C7] border border-white" >
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo1pTXhMFZ52F1Ydkf5Qd7yrdSOrGfYMIQA&s" alt="" /></div>
      <p>Cauliflower</p>
      <div className="flex gap-1 p-1 bg-[#1F2833] ">
       <p >Quantity</p>
       <button className="font-extrabold hover:bg-blue-400 h-auto w-6">+</button>
       <button className="font-extrabold hover:bg-blue-400 h-auto w-6">-</button>
      </div>
    </div>
  )
}

export default Cards
