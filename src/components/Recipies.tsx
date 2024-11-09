import Cards from "./Cards"

const Recipies : React.FC = () => {
  return (
    <section className="h-screen flex justify-center" 
    style={{
      backgroundImage: `url("https://img.freepik.com/premium-photo/grilled-vegetables-skewers-white-plate_1313098-8465.jpg")`,
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      overflow: "hidden"
    }} >

    <div className=" w-max container mx-auto my-auto flex flex-col justify-center items-center">
    <h1 className="font-custom text-3xl font-bold"> Recipies </h1>
    <div className=" flex flex-col gap-2 backdrop-filter backdrop-blur-[50px] bg-opacity-10 border rounded-xl p-4">
      <h1 className="font-medium text-xl ">Quick Eats</h1>
      <div className="grid grid-cols-4 gap-x-10">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <h1 className="font-medium text-xl ">Main Course</h1>
      <div className="grid grid-cols-4 gap-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
     </div>
    </div>

    </section>
  )
}

export default Recipies
