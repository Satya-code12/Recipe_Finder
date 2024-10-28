type NonCardProps = {
  imgUrl: string | undefined;
  name: string | undefined;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const NonCard: React.FC<NonCardProps> = ({ imgUrl, name, quantity, onIncrement, onDecrement }) => {
  return (

  <div className="bg-transparent border-[6px] border-white rounded-xl flex flex-col gap-1 h-48">
    <div className="flex justify-center">
    <img src={imgUrl} alt="" width={120} className="pt-1 rounded-xl"/>
    </div>
    <div className=" p-1 border-t-[4px] border-white font-semibold text-base"><p>{name}</p></div>
    <div className="flex gap-4 p-1 border-t-[4px] border-white items-center justify-center ">
      <p className="font-medium text-sm text-blue-600">Quantity: {quantity}</p>
      <div className="flex gap-3"><button className="font-extrabold hover:bg-blue-200 rounded-2xl w-3" onClick={onIncrement}>+</button>
      <button className="font-extrabold hover:bg-blue-200 rounded-2xl w-3" onClick={onDecrement}>-</button></div></div>
  </div>
  );
};

export default NonCard;
