import React from 'react'
import Cards from './Cards'

function VegSection() {
  return (
    <section>
     <div>
      <span>Veg</span>
     </div>
     <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Cards />
     </div>
    </section>
  )
}

export default VegSection
