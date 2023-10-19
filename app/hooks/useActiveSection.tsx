'use client'

import { createContext, useContext, useState } from 'react'
import { SectionName } from './types'

type ActiveSectionProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
  timeOfLastClick: number
}

const ActiveSectionContext = createContext<ActiveSectionContextType>(
  {} as ActiveSectionContextType,
)

export function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSession() {
  const context = useContext(ActiveSectionContext)

  if (!context) {
    throw new Error(
      'useActiveSession must be used within an ActiveSectionProvider',
    )
  }

  return context
}
