import React from 'react'

const Cross = () => {
  return (
    <svg width="70" height="70" viewBox="-50 -50 100 100" className="cross">
      <line x1="-40" y1="-40" x2="40" y2="40" />
      <line x1="-40" y1="40" x2="40" y2="-40" />
    </svg>
  )
}

export default Cross
