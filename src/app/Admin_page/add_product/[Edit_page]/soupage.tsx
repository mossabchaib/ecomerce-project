
import { usePathname } from 'next/navigation'
import React from 'react'

export default function soupage() {
  const path=usePathname()
  const id=path.slice(24,path.length)
  return id;
}

