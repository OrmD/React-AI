'use client'

import { FC, ReactNode } from 'react'

import {HeaderComponent} from "@/core/widgets/layout/header";

interface ILayoutWidgetProps {
  children: ReactNode
}

const LayoutWidget: FC<ILayoutWidgetProps> = ({ children }) => {
  return (
    <main className='relative flex h-screen w-screen overflow-hidden'>
      {children}
      <HeaderComponent  />
    </main>
  )
}
export default LayoutWidget
