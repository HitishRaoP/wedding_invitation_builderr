"use client"
import { inviteSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

import { z } from "zod"
import { Button } from "../ui/button"
import { useTransition } from "react"
import { Input } from "../ui/input"


export function InputForm() {
    const [isPending, startTransition] = useTransition()

    const form = useForm({
        resolver: zodResolver(inviteSchema)
    })


    return (
        <div>
            <Form {...form}>
                <form className="space-y-4 w-full">
                    <div className="w-full flex flex-wrap gap-4"> 
                        <FormField
                            control={form.control}
                            name="Bride Name"
                            render={({ field }) =>
                            (
                                <FormItem>
                                    <FormLabel>Bride&apos;s Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="Bride Father Name"
                            render={({ field }) =>
                            (
                                <FormItem>
                                    <FormLabel>Bride&apos;s Father Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>

                    <Button variant={"create"} type="submit" >Submit</Button>
                </form>
            </Form>
        </div>
    )
}
