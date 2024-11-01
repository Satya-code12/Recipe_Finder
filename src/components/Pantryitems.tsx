const Pantryitems = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-[30rem] p-2 shadow-lg bg-white rounded-xl">
          <h1 className="font-bold text-3xl" style={{
            textShadow: "1px 1px 2px #000000",
            letterSpacing: "1.5px"
      }}>Pantry</h1>
          <button className="w-max h-max p-2 rounded-lg font-medium text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>Add Items</button>
        </div>
      <div className="container mx-auto">
    <table className="min-w-full rounded-lg shadow-md overflow-hidden">
      <thead className = "" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>
        <tr>
          <th className="py-2 px-6 text-left text-lg  font-medium text-white">Items</th>
          <th className="py-2 px-6 text-left text-lg font-medium text-white">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Chicken</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Mutton</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Soya Chunks</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Egg</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Fish</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Left Rice</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Potato</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Cauliflower</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Carrots</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Noodles</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
            <button>+</button>
            <button>-</button>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium px-6 text-gray-700">Mushroom</td>
          <td className="py-2 font-medium px-6 text-gray-700 flex gap-8">
          <button>+</button>
          <button>-</button>
          </td>
        </tr>
      </tbody>
    </table>
        </div>
    </div>
  )
}

export default Pantryitems
