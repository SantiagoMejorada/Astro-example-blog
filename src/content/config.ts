import { defineCollection } from "astro:content";
import type { BlogPost } from "../types/interfaces";

const BlogPosts = {
    blog: defineCollection<BlogPost>({
        schema: {
            title: 'string',
            author: 'string',
            date: 'string',
            authorImage: 'string',
            mainImage: 'string',
        }
    })
}

export const collections = {
    blog: BlogPosts,
};