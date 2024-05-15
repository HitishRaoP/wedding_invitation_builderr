"use client"
import { feedbackSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { createFeedback } from '@/actions/feedback'
import { toast } from 'sonner'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function FeedbackForm() {
    const [idLoading, startTransition] = useTransition()
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(feedbackSchema),
        defaultValues: {
            name: '',
            email: '',
            feedback: ''
        }
    })

    //Submit Function
    const onSubmit = (values: z.infer<typeof feedbackSchema>) => {
        startTransition(() => {
            createFeedback(values)
                .then((data) => {
                    toast.success(data.success)
                })
                .catch((error) =>
                    toast.error(`An error occured: ${error.message}`))
                .finally(() => router.push("/"))
        })
    }

    return (
        <>
            <Card className='my-4 shadow-lg'>
                <CardHeader>
                    <CardTitle>
                        CONTACT US
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    Email : unrealon.official@gmail.com
                </CardContent>
                <CardContent>
                    Address : 160,NBH-5, Tippu Sultan Palace Rd, Chamrajpet, Bengaluru, Karnataka 560018
                </CardContent>
            </Card>
            <Form {...form}>
                <form className='space-y-4 my-4' onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Name"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="Email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name='feedback'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Feedback
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <Button variant="create">Submit</Button>
                </form>
            </Form>
        </>
    )
}
