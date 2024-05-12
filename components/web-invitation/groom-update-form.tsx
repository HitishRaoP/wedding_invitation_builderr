import { groomSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useTransition } from "react"
import { groomUpdate } from "@/actions/groom"
import { toast } from "sonner"
import { useSearchParams } from "next/navigation"
import { UploadDropzone } from "@/lib/uploadthing"

export function GroomUpdateForm() {
    const [isLoading, startTransition] = useTransition()
    const searchparams = useSearchParams()
    const pid: string = searchparams.get('pid') || ""
    const form = useForm({
        resolver: zodResolver(groomSchema),
        defaultValues: {
            groomBio: "",
            groomPhoto: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof groomSchema>) => {
        startTransition(() => {
            groomUpdate(pid, values)
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
        <Form {...form} >
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="groomPhoto"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Groom&apos;s Photo</FormLabel>
                            <FormControl className="flex items-center justify-start">
                                <UploadDropzone
                                    endpoint="imageUploader"
                                    {...field}
                                    onClientUploadComplete={(res) => {
                                        toast.success("Flie Upload Completed");
                                        form.setValue("groomPhoto", res.map(a => a.url)[0]);
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
                    name="groomBio"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Groom&apos;s info</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <Button
                    className="my-4"
                    type="submit"
                    variant={"update"}>
                    Update</Button>
            </form>
        </Form>
    )
}

