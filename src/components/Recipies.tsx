import Cards from "./Cards"
import Navbar from "./Navbar"

const Recipies = () => {
  return (
    <section className="h-full w-full p-4 flex gap-x-[10%]" style={{
      backgroundColor: "#F4F4F4"
    }}>
     
     <Navbar />

      <div className=" flex flex-col gap-4">
      <h1 className="font-custom text-2xl font-bold"> Recipies </h1>
      <h1 className="font-semibold text-lg ">Quick Eats</h1>
      <div className="grid grid-cols-3 gap-8">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <h1 className="font-semibold text-lg ">Main Course</h1>
      <div className="grid grid-cols-3 gap-8">
        <Cards />
        <Cards />
        <Cards />
      </div>
     </div>

    </section>
  )
}

export default Recipies
