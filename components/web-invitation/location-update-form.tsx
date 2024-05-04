"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { locationSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";
import { usePersonStore } from "@/state/state";

export function LocationUpdateForm() {
const {location, updateLocation} = usePersonStore()
    const form = useForm({
        resolver: zodResolver(locationSchema),
        defaultValues: {
            location: ""
        }
    })
    const onSubmit = (values: z.infer<typeof locationSchema>) => {
        console.log(values)
    }
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
                                    value={location}
                                    onChange={(e) => {
                                        updateLocation(e.target.value)
                                    }}
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

