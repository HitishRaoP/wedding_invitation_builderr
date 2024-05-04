import { brideSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function BrideUpdateForm() {
    const form = useForm({
        resolver: zodResolver(brideSchema),
        defaultValues: {
            brideBio: "",
            bridePhoto: ""
        }
    })

    const onSubmit = (values: z.infer<typeof brideSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form} >
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="bridePhoto"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Bride's Photo</FormLabel>
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
                    name="brideBio"
                    render={({ field }) =>
                    (
                        <FormItem>
                            <FormLabel>Update Bride's info</FormLabel>
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
