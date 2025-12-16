import { PostsListProps } from "@/types/post"
import { useForm } from "@inertiajs/react"
import { index, store } from "@/routes/posts"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel,
  SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription,
  CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function PostsCreateForm({ categories }:  PostsListProps) {
    const form = useForm(
        {
            image: null as any,
            title: '',
            subtitle: '',
            category: '',
            content: '',
            status: 'draft',
        }
    ) 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        form.submit(store())
    }

    return (
        <Card className="w-full mt-5 shadow-none">
            <CardHeader>
                <CardTitle>Write a New Blog</CardTitle>
                <CardDescription>
                    Draft your post and decide when it’s ready to be published.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="image">Image</Label>
                            <Input type="file" id="image" name="image" onChange={(e) => form.setData('image', e.target.files?.[0] ?? null)} />
                            {form.errors.image && <small className="text-red-500">{form.errors.image}</small>}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" id="title" name="title" value={form.data.title} onChange={(e) => form.setData('title', e.target.value)} />
                            {form.errors.title && <small className="text-red-500">{form.errors.title}</small>}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input type="text" id="subtitle" name="subtitle" value={form.data.subtitle} onChange={(e) => form.setData('subtitle', e.target.value)} />
                            {form.errors.subtitle && <small className="text-red-500">{form.errors.subtitle}</small>}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="category">Category</Label>
                            <Select value={form.data.category} onValueChange={(e) => form.setData('category', e)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {categories &&
                                            Object.entries(categories).map(([id, name]) => (
                                                <SelectItem key={id} value={id}>
                                                {name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {form.errors.category && <small className="text-red-500">{form.errors.category}</small>}
                        </div>
                        
                        <div className="grid gap-3">
                            <Label>Content</Label>
                            <div className="mb-10">
                                <ReactQuill
                                    theme="snow"
                                    value={form.data.content} 
                                    onChange={(value) => form.setData('content', value)}
                                    className="h-64"
                                />
                            </div>
                        </div>
                        {form.errors.content && <small className="text-red-500">{form.errors.content}</small>}

                        <div className="grid gap-3">
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="terms-2"
                                    checked={form.data.status === 'published'}
                                    onCheckedChange={(checked) =>
                                        form.setData('status', checked ? 'published' : 'draft')
                                    }
                                />
                                <div className="grid gap-2">
                                    <Label htmlFor="terms-2">Public now</Label>
                                    <p className="text-muted-foreground text-sm">
                                        Enable to publish the post immediately. Leave unchecked to save as draft.
                                    </p>
                                </div>
                            </div>
                            {form.errors.status && <small className="text-red-500">{form.errors.status}</small>}
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" className="cursor-pointer" asChild>
                            <a href={index.url()}>
                                Cancel
                            </a>
                        </Button>
                        <Button type="submit" className="cursor-pointer">
                            Create Blog
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}