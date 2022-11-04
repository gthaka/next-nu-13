import styles from "../Notes.module.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xusizlvsvtxpnmbacqru.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c2l6bHZzdnR4cG5tYmFjcXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1Njk4NDgsImV4cCI6MTk4MzE0NTg0OH0.0rCUQB4zjdgouf_TN0bxQzfFeeunF9HuAvLJja3G7-0"
);
type cols = {
  id: string;
  title: string;
  content: string;
  created: string;
};
async function getNote(noteId: string) {
  const { data, error } = await supabase
    .from("notes")
    .select()
    .eq("id", noteId);

  if (error) {
    throw new Error(error.message);
  }
  return data.length ? data[0] : {};
}

export default async function NotePage({ params }: any) {
  const note: cols = await getNote(params.id);

  return (
    <div>
      <></>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
