import { PostsListProps } from "@/types/post"
import { index } from "@/routes/posts"

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

    return (
        <Card className="w-full mt-5 shadow-none">
            <CardHeader>
                <CardTitle>Write a New Blog</CardTitle>
                <CardDescription>
                    Draft your post and decide when it’s ready to be published.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-5">
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="image">Image</Label>
                            <Input type="file" id="image" name="image" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" id="title" name="title" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input type="text" id="subtitle" name="subtitle" />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="category">Category</Label>
                            <Select>
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
                        </div>
                        
                        <div className="grid gap-3">
                            <Label>Content</Label>
                            <div className="mb-10">
                                <ReactQuill
                                    theme="snow"
                                    value=""
                                    className="h-64"
                                />
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <div className="flex items-start gap-3">
                                <Checkbox id="terms-2" />
                                <div className="grid gap-2">
                                    <Label htmlFor="terms-2">Public now</Label>
                                    <p className="text-muted-foreground text-sm">
                                        Enable to publish the post immediately. Leave unchecked to save as draft.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" asChild>
                            <a href={index.url()}>
                                Cancel
                            </a>
                        </Button>
                        <Button type="submit">
                            Create Blog
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}