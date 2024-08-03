import { z, defineCollection } from "astro:content";
import type { BlogPost } from "../types/interfaces";

const BlogPosts = {
    blog: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            author: z.string(),
            date: z.string(),
            authorImage: z.string(),
            mainImage: z.string(),
        })
    })
}

export const collections = {
    blog: BlogPosts,
};