import React, { useState } from 'react'

interface PocketOptionGateProps {
  onGateOpen: (id: string) => void
}

const PocketOptionGate: React.FC<PocketOptionGateProps> = ({ onGateOpen }) => {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { id: '1', name: 'Basic Plan' },
    { id: '2', name: 'Pro Plan' },
    { id: '3', name: 'Enterprise Plan' },
  ]

  const handleSelect = (id: string) => {
    onGateOpen(id)
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Select Your Plan</h1>
      <p>Choose a Pocket Option to continue:</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            style={{
              padding: '20px',
              fontSize: '16px',
              border: '2px solid #007bff',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: selectedOption === option.id ? '#007bff' : 'white',
              color: selectedOption === option.id ? 'white' : '#007bff',
              transition: 'all 0.2s',
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PocketOptionGate
