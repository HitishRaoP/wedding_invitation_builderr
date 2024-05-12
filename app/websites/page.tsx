"use client"

import { WebInvitation } from "@/components/web-invitation/web-invitation"
import { getInvitationInfo } from "@/data/invitationInfo"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

type data = {
  couplesSrc: string
  brideName: string
  groomName: string
  date: string
  day: string
  time: string
  location: string
  groomSrc: string
  brideSrc: string
  brideText: string
  groomText: string
}
function WebInvitationPage() {
  const [fdata, setData] = useState<data | null>(null)
  const searchparams = useSearchParams()
  const invitationId = searchparams.get("pid") || ""

  useEffect(() => {
    getInvitationInfo(invitationId).then((data) => {
      setData(data)
    })
  }, [invitationId])

  return (
    <div className="my-8">
      <WebInvitation
        coupleSrc={fdata?.couplesSrc || ""}
        brideName={fdata?.brideName || ""}
        groomName={fdata?.groomName || ""}
        date={fdata?.date || ""}
        day={fdata?.day || ""}
        time={fdata?.time || ""}
        location={fdata?.location || ""}
        groomSrc={fdata?.groomSrc || ""}
        brideSrc={fdata?.brideSrc || ""}
        brideText={fdata?.brideText || ""}
        groomText={fdata?.groomText || ""}
      />
    </div>
  )
}

export default WebInvitationPage
