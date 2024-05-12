import { inviteSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { z } from 'zod'
import { Textarea } from '../ui/textarea'
import { InviteUpdate } from '@/actions/invite'
import { toast } from 'sonner'
import { useSearchParams } from 'next/navigation'
import { UploadDropzone } from '@/lib/uploadthing'

type InvitationIdProps = {
    slug: string
}
export function InviteUpdateForm() {
    const [isLoading, startTransition] = useTransition()
    const searchparams = useSearchParams()
    const pid: string = searchparams.get('pid') || ""
    const form = useForm({
        resolver: zodResolver(inviteSchema),
        defaultValues: {
            couplesPhoto: "",
            brideName: "",
            groomName: "",
            date: "",
            day : "",
            time: "",
            location: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof inviteSchema>) => {
        startTransition(() => {
            InviteUpdate(pid, values)
                .then((data) => {
                    if (data.error) {
                        toast.error(data.error);
                    } else {
                        toast.success(data.success);
                    }
                })
                .catch((error) => {
                    toast.error("An error occurred while updating location");
                    console.error(error);
                });
        });
    };

    return (
        <Form {...form}>
            <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                    control={form.control}
                    name="couplesPhoto"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Couple&apos;s Photo</FormLabel>
                            <FormControl className='flex items-center justify-start'>
                            <UploadDropzone
                                    endpoint="imageUploader"
                                    {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed");
                                        form.setValue("couplesPhoto", res.map(a=>a.url)[0]);
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`ERROR! ${error.message}`);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="brideName"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Bride&apos;s Name</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="groomName"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Groom&apos;s Name</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Date</FormLabel>
                            <FormControl>
                                <Input {...field} type="date"/>
                                
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField
                    control={form.control}
                    name="day"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Day</FormLabel>
                            <FormControl>
                                <Input {...field} type="text" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Time</FormLabel>
                            <FormControl>
                                <Input
                                type='time'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                      <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Venue</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button type="submit" variant={"update"}>Update</Button>
            </form>
        </Form>
    )
}
