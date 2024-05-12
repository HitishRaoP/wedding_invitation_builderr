"use client"
import { WebInvitation } from "@/components/web-invitation/web-invitation";
import { getInvitationInfo } from "@/data/invitationInfo";
import { getRid } from "@/data/rid";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

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
function WebInvitationEditPage() {
  const [fdata, setData] = useState<data | null>();
  const [rid, setRid] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const invitationId = searchParams.get("pid") || "";
  const ridFromUrl = searchParams.get("rid") || "";
  const index: string = searchParams.get("i") || "";

  useEffect(() => {
    getInvitationInfo(invitationId).then((data) => {
      setData(data);
    });
  }, [invitationId]);

  useEffect(() => {
    getRid().then((c) => {
      if (c) {
        const razorpaySignatures = c.invitations.map((a) =>
          a.razorpay.map((b) => b.razorpaySignature)
        );
        setRid(razorpaySignatures.flat()[Number(index)]);
      }
    });
  }, [index]);

  return (
    <>
      {ridFromUrl === rid && fdata ? (
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
      ) : (
        <div className="rounded-lg text-xl font-bold w-full p-4 text-center my-8 bg-red-100 text-red-800">Unauthorised</div>
      )}
    </>
  );
}

export default WebInvitationEditPage;
