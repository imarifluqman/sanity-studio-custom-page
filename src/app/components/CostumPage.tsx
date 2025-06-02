// /components/CustomPage.tsx
"use client"
import React from 'react'
import { Card, Text, Stack } from '@sanity/ui'
import Image from 'next/image'

export default function CustomPage() {
  return (
    <Card padding={4}>
      <Stack space={4}>
        <Text size={2} weight="semibold">👋 Welcome to the Custom Page</Text>
        <Text>This is a custom admin-only dashboard or tool.</Text>
        <Text>Here you can add any custom content or functionality you need.</Text>
        <Text>ARIF</Text>
        <p className='text-2xl font-bold text-red-600'>Zoha</p>
        <div>Amna</div>
        <Image src="/chat-bot.svg" alt="hero" width={400} height={400} />
      </Stack>
    </Card>
  )
}
