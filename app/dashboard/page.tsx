"use client"

import { Navbar } from "@/components/navbar"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { getInvitesByClerkId } from "@/data/invite"
import { usePersonStore } from "@/state/state"

type mappedData = {
  projectName: string,
  projectLink: string,
  projectEdit: string,
  razorpaySignature?: string | string[]
}

type mappedDataArray = mappedData[]
function Dashboard() {
  const { projectData, updateProjectData } = usePersonStore()
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const invites = await getInvitesByClerkId()
      if (invites) {
        const mappedData: mappedDataArray
         = invites.invitations.map(a => ({
          "projectName": a.projectName || "Not Available",
          "projectLink": a.id || "Not Available",
          "projectEdit": a.id || "Not Available",
          "razorpaySignature": a.razorpay.length === 0 ? 'notpaid' : a.razorpay.map(b => b.razorpaySignature)
        }))
        updateProjectData(mappedData)
      }
    }
    fetchData()
  }, [router, updateProjectData])

  return (
    <>
      <Navbar />
      <div className="py-5">
        <DataTable columns={columns} data={projectData} />
      </div>
    </>
  )
}

export default Dashboard
