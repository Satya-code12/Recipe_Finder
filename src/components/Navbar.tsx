type NavbarProps = {
  onClick : () => void
}

const Navbar : React.FC<NavbarProps> = ({onClick}) => {
  return (
    <div>
      <nav className="flex flex-col w-[10rem] h-full p-2 gap-3 rounded-xl shadow-xl" style={{
      backgroundColor: "white"
    }}>
        <h1 className="text-center text-3xl font-bold"  style={{
        color: "#000",
        textShadow: "1px 1px 2px #000000",
        letterSpacing: "1.5px"
      }}>Your Pantry!</h1>
      <hr className="h-[.2rem]" style={{
            backgroundImage: "linear-gradient(to bottom right, purple, blue",
          }}/>
        <div className="flex flex-col gap-8 mt-5 ">
          <button className="rounded-md h-9 font-bold text-base text-white" style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }} onClick={onClick}>STOCK</button>
          <button className="rounded-md h-9 font-bold text-base text-white"  style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>RECIPIES</button>
          <button className="rounded-md h-9 font-bold text-base text-white"  style={{
            backgroundImage: "linear-gradient(to bottom right, #874CCC, #0E21A0",
          }}>HISTORY</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
