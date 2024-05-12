"use client"

import { CreateFromNew } from '@/components/create-form-new'
import { Navbar } from '@/components/navbar'
function CreatePage() {
  return (
    <main>
      <Navbar />
      <CreateFromNew />
    </main>
  )
}

export default CreatePage