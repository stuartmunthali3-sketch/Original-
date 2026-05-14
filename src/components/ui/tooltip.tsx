import React, { ReactNode } from 'react'

interface TooltipProviderProps {
  children: ReactNode
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <>{children}</>
}

interface TooltipProps {
  content: string
  children: ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div title={content}>
      {children}
    </div>
  )
}
