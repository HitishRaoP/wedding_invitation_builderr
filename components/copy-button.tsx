"use client"
import { useState } from 'react';
import copy from 'clipboard-copy';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoShareOutline } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';

export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            await copy(text);
            toast.success("Website URL copied to clipboard");
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy text to clipboard', error);
        }
    };

    return (
        <div>
            <Dialog modal={true} >
                <DialogTrigger>
                    <IoShareOutline />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='mb-2'>Share</DialogTitle>
                        <DialogDescription className='flex items-center justify-between gap-4'>
                            <ScrollArea className='p-1 px-3 rounded-md bg-neutral-100 h-12 w-fit'>
                                {text}
                            </ScrollArea>
                            <div onClick={handleCopyClick} className=' transition-all'>
                                {isCopied ? <IoIosCheckmark className='w-8 h-8' /> : <IoMdCopy className='w-5 h-5 hover:cursor-pointer' />}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};
