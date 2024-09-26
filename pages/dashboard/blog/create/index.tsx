"use client";

import React from "react";
import BlogForm from "../../components/BlogForm";
import { BlogFormSchemaType } from "../../schema";
import { toast } from "@/hooks/use-toast";
import { createBlog } from "@/actions/blog";

export default function index() {
  const handleCreate = async (data: BlogFormSchemaType) => {
    const result = await createBlog(data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      toast({
        title: "Failed! Error:",
        description: (
          <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "Succesfully created the blog post: '" + data.title + "'",
      });
    }
  };

  return <BlogForm onHandleSubmit={handleCreate} />;
}
