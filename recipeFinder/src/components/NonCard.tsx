type NonCardProps = {
  imgUrl: string | undefined;
  name: string | undefined;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const NonCard: React.FC<NonCardProps> = ({ imgUrl, name, quantity, onIncrement, onDecrement }) => {
  return (
    <div className="text-lg font-medium text-[#C5C6C7] rounded-xl border border-white h-12 w-[52rem] flex justify-between">
      <div className="flex w-36 justify-between">
        <img src={imgUrl} alt="" width={60} className="rounded-xl"/>
        <span className="w-16 text-center">
          <p>{name}</p>
        </span>
      </div>
      <div className="flex gap-1 p-1 bg-[#1F2833] rounded-r-xl">
        <p className="mt-1">Quantity: {quantity}</p>
        <button className="font-extrabold hover:bg-blue-400 h-auto w-6" onClick={onIncrement}>+</button>
        <button className="font-extrabold hover:bg-blue-400 h-auto w-6" onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export default NonCard;
