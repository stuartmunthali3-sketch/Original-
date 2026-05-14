import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Go back home
      </a>
    </div>
  )
}

export default NotFound
