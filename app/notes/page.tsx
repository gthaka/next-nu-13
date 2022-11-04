// import PocketBase from 'pocketbase';
import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xusizlvsvtxpnmbacqru.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c2l6bHZzdnR4cG5tYmFjcXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1Njk4NDgsImV4cCI6MTk4MzE0NTg0OH0.0rCUQB4zjdgouf_TN0bxQzfFeeunF9HuAvLJja3G7-0"
);
async function getNotes() {
  const { data, error } = await supabase.from("notes").select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes ..</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
