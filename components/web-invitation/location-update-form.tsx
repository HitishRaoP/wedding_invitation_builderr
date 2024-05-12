"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { locationSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";
import { useTransition } from "react";
import { locationUpdate } from "@/actions/location";
import { toast } from "sonner";
import { useParams, useSearchParams } from "next/navigation";

type InvitationIdProps = {
    slug: string
}
export function LocationUpdateForm() {
    const InvitationId: InvitationIdProps = useParams()
    const searchparams = useSearchParams()
    const pid: string  = searchparams.get('pid') || ""
    const [isLoading, startTransition] = useTransition()
    const form = useForm({
        resolver: zodResolver(locationSchema),
        defaultValues: {
            location: ""
        }
    })
    const onSubmit = async (values: z.infer<typeof locationSchema>) => {
        startTransition(() => {
            locationUpdate(pid, values)
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Update Location</FormLabel>
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

