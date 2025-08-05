'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Box } from '@mui/material'

export default function RouteProgress() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 开始加载
    setIsLoading(true)
    setProgress(0)

    let currentProgress = 0
    
    // 模拟进度增长
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 30
      
      if (currentProgress >= 85) {
        currentProgress = 85
        clearInterval(progressInterval)
      }
      
      setProgress(currentProgress)
    }, 150)

    // 完成加载
    const completeTimer = setTimeout(() => {
      clearInterval(progressInterval)
      setProgress(100)
      
      // 延迟隐藏进度条
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 300)
    }, 1000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(completeTimer)
    }
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
        zIndex: 9999,
        transition: 'width 0.3s ease',
        boxShadow: '0 0 10px rgba(25, 118, 210, 0.5)',
      }}
    />
  )
} 