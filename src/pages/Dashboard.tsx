import React from 'react'

interface DashboardProps {
  pocketOptionId: string
  onLogout: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ pocketOptionId, onLogout }) => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Active Pocket Option ID: <strong>{pocketOptionId}</strong></p>
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h2>Welcome to Your Dashboard</h2>
          <p>This is your main application area where you can manage your AI app development projects.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
