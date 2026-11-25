import type { Entry } from "../data/entries";

interface EntryCardProps {
  entry: Entry;
}

export default function EntryCard({ entry }: EntryCardProps) {
  return (
    <article>
      <h3>{entry.title}</h3>
      <time dateTime={entry.date}>{entry.date}</time>
      <p>{entry.summary}</p>
    </article>
  );
}