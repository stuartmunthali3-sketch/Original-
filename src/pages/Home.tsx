import React, { useState } from 'react'
import { useAuth } from '@/_core/hooks/useAuth'
import { useTheme } from '@/contexts/ThemeContext'

const Home: React.FC = () => {
  const { login } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>AI App Developer</h1>
        <button onClick={toggleTheme} style={{ padding: '8px 12px' }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <form onSubmit={handleLogin} style={{ display: 'grid', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />
        </div>

        <button type="submit" style={{ padding: '12px', fontSize: '16px' }}>
          Login
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
        Use any email and password to continue
      </p>
    </div>
  )
}

export default Home
