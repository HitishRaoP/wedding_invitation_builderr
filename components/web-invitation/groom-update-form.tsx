import { groomSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export function GroomUpdateForm() {
    const form = useForm({
        resolver: zodResolver(groomSchema),
        defaultValues: {
            groomBio: "",
            groomPhoto: ""
        }
    })

    const onSubmit = (values: z.infer<typeof groomSchema>) => {
        console.log(values)
    }
    return (
        <Form {...form} >
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="groomPhoto"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Groom's Photo</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    {...field}
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
                            <FormLabel>Update Groom's info</FormLabel>
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

