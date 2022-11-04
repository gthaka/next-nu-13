"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const supabase = createClient(
    "https://xusizlvsvtxpnmbacqru.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c2l6bHZzdnR4cG5tYmFjcXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1Njk4NDgsImV4cCI6MTk4MzE0NTg0OH0.0rCUQB4zjdgouf_TN0bxQzfFeeunF9HuAvLJja3G7-0"
  );

  const create = async () => {
    const { error } = await supabase
      .from("notes")
      .insert({ title: title, content: content });

    if (error) {
      throw new Error(error.message);
    }

    setContent("");
    setTitle("");

    router.refresh();
  };
  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
