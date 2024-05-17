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
import {
    IoMdCopy,
    IoIosCheckmark,
    IoQrCode,
    IoShareOutline,
    FaLink
} from "@/components/ui/icons";
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';
import QRCode from 'qrcode';
import { RWebShare } from "react-web-share";

export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [src, setSrc] = useState('')

    const handleCopyClick = async () => {
        try {
            await copy(text);
            toast.success("Website URL copied to clipboard");
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy text to clipboard', error);
        }
    };

    QRCode.toDataURL(text)
        .then(setSrc)
        .catch(err => {
            return { error: err }
        })

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <IoShareOutline />
                </DialogTrigger>
                <DialogContent className='h-80 flex flex-col items-start'>
                    <DialogHeader className='w-full mx-auto'>
                        <DialogTitle className='mb-2 text-center text-lime-600 font-bold'>Share</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="link" className="w-full">
                        <TabsList className='w-full mx-auto'>
                            <TabsTrigger value="link"><FaLink /></TabsTrigger>
                            <TabsTrigger value="qrcode"><IoQrCode /></TabsTrigger>
                        </TabsList>
                        <TabsContent value="link" className='w-full mx-auto'>
                            <DialogDescription className='flex items-center justify-between gap-4'>
                                <ScrollArea className='p-1 px-3 rounded-md bg-neutral-100 h-12 w-fit'>
                                    {text}
                                </ScrollArea>
                                <div onClick={handleCopyClick} className=' transition-all w-10'>
                                    {isCopied ? <IoIosCheckmark className='w-8 h-8' /> : <IoMdCopy className='w-5 h-5 hover:cursor-pointer' />}
                                </div>
                            </DialogDescription>
                        </TabsContent>
                        <TabsContent value="qrcode" className='w-full mx-auto flex justify-center'>
                            <Image className='rounded-md' src={src} width={200} height={200} alt={'qrcode'} />
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </>
    );
};
