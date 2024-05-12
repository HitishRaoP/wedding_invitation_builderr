import { createSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { UploadDropzone } from '@/lib/uploadthing'
import { toast } from 'sonner'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { z } from 'zod'
import { Create } from '@/actions/create'
import { useRouter } from 'next/navigation'

export function CreateFromNew() {
    const [isLoading, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm(
        {
            resolver: zodResolver(createSchema),
            defaultValues: {
                projectName: "",
                couplesSrc: "",
                brideName: "",
                groomName: "",
                date: "",
                day: "",
                time: "",
                location: "",
                brideSrc: "",
                groomSrc: "",
                brideText: "",
                groomText: ""
            }
        }
    )

    const onSubmit = (values: z.infer<typeof createSchema>) => {
        console.log(values);
        startTransition(() => {
            Create(values)
                .then((data) => {
                    toast.success(data.success)
                })
                .catch((error) =>
                    toast.error("An error occurred while creating the project"))
                .finally(() => router.push("/dashboard"))
        })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 my-4' >
                <FormField
                    control={form.control}
                    name='projectName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Project Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='couplesSrc'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Couple Photo
                            </FormLabel>
                            <FormControl>
                                <UploadDropzone
                                    endpoint="imageUploader"
                                    {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed");
                                        form.setValue("couplesSrc", res.map(a => a.url)[0]);
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`ERROR! something went wrong`);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='brideName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Bride Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='groomName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Groom Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='date'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Date
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="date"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='day'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Day
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Ex: Friday'
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='time'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Time
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Ex: 5:00 PM'
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Location
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='brideSrc'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Bride&apos;s Photo
                            </FormLabel>
                            <FormControl>
                                <UploadDropzone
                                    endpoint="imageUploader"
                                    {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed");
                                        form.setValue("brideSrc", res.map(a => a.url)[0]);
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`ERROR! something went wrong`);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='groomSrc'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Groom&apos;s Photo
                            </FormLabel>
                            <FormControl>
                                <UploadDropzone
                                    endpoint="imageUploader"
                                    {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed");
                                        form.setValue("groomSrc", res.map(a => a.url)[0]);
                                    }}
                                    onUploadError={(error: Error) => {
                                        toast.error(`ERROR! something went wrong`);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='brideText'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Bride Info
                            </FormLabel>
                            <FormControl>
                                <Textarea

                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name='groomText'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Groom Info
                            </FormLabel>
                            <FormControl>
                                <Textarea

                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}
                />
                <Button type='submit' variant={'create'}>Submit</Button>
            </form>
        </Form>
    )
}
