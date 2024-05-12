"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { deleteInvitation } from "@/actions/delete"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CopyToClipboardButton } from "@/components/copy-button"

export type ColumnsSchema = {
  projectName: string
  projectLink: string
  projectEdit: string
  razorpaySignature?: string | string[]
}

export const columns: ColumnDef<ColumnsSchema>[] = [
  {
    accessorKey: "projectName",
    header: "Project Name",
  },
  {
    accessorKey: "razorpaySignature",
    header: "Payment Status",
    cell: ({ row }) => {

      return (
        <>
          {
            row.getValue("razorpaySignature") === 'notpaid' ?
              <Button variant="outline" className="w-full bg-blue-600 hover:bg-blue-700 text-white hover:text-white" asChild>
                <Link href={{ pathname: '/payment', query: { pid: `${row.getValue("projectLink")}` } }}>Pay</Link></Button>
              : <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-lime-100 text-lime-600 p-2.5 rounded-sm w-full cursor-text">Paid</TooltipTrigger>
                  <TooltipContent>
                    Razorpay Signature : {row.getValue("razorpaySignature")}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          }
        </>
      )
    },
  },
  {
    accessorKey: "projectLink",
    header: "View Project",
    cell: ({ row }) => {
      return (
        <>
          {
            row.getValue("razorpaySignature") === 'notpaid' ?
              <div className="text-red-500 text-center bg-red-100 rounded-sm p-2.5">Payment Not Completed</div> :
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-blue-100 text-blue-600 p-2.5 rounded-sm w-full flex items-center  justify-between">
                    <Link
                      className="flex items-center gap-2 justify-center px-2 w-fit"
                      href={{
                        pathname: '/websites',
                        query: { pid: `${row.getValue("projectLink")}`, rid: `${row.getValue("razorpaySignature")}` },
                      }}
                    >
                      <FaExternalLinkAlt />
                      Visit
                    </Link>
                    <CopyToClipboardButton
                      text={`wedding.unrealon.com/websites/?pid=${row.getValue("projectLink")}`} />
                  </TooltipTrigger>
                  <TooltipContent className="flex gap-2 items-center hover:text-blue-600">
                    <FaExternalLinkAlt />
                    <Link href={`wedding.unrealon.com/websites/?pid=${row.getValue("projectLink")}`}>
                      wedding.unrealon.com/websites/?pid={row.getValue("projectLink")}
                    </Link>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          }
        </>
      )
    },
  },

  {
    accessorKey: "projectEdit",
    header: "Edit Project",
    cell: ({ row }) => {
      return (
        <>
          {
            row.getValue("razorpaySignature") === 'notpaid' ? <div className="text-red-500 bg-red-100 text-center rounded-sm p-2.5 w-full">Payment Not Completed</div> :
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-amber-100 text-amber-700 p-2.5 rounded-sm w-full">
                    <Link
                      className="flex items-center gap-2 justify-center"
                      href={{
                        pathname: '/websites/edit/',
                        query: { pid: `${row.getValue("projectLink")}`, rid: `${row.getValue("razorpaySignature")}`, i: `${row.index}` },
                      }}
                    >
                      <FaExternalLinkAlt />
                      Edit
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="flex gap-2 items-center hover:text-blue-600">
                    <FaExternalLinkAlt />
                    <Link href={`wedding.unrealon.com/websites/edit/?pid=${row.getValue("projectLink")}&rid=${row.getValue("razorpaySignature")}`}>
                      wedding.unrealon.com/websites/edit/?pid={row.getValue("projectLink")}&rid={row.getValue("razorpaySignature")}
                    </Link>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
          }
        </>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      return (
        <AlertDialog >
          <AlertDialogTrigger>  <MdDeleteOutline className="w-4 h-4 text-red-500" /></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your invitation from the servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={() => {
                deleteInvitation(row.getValue("razorpaySignature"), row.getValue("projectLink"))
                location.reload()
              }}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  }
]
