// src/components/NewEntryForm.tsx
import { useState, type FormEvent } from 'react'

export default function NewEntryForm() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [mood, setMood] = useState<string>('Happy')

  const isFormEmpty = title.trim() === '' && content.trim() === ''

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ title, content, mood })
    setTitle('')
    setContent('')
    setMood('Happy')
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="entry-title">Title</label>
          <input
            id="entry-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="entry-mood">Mood</label>
          <select
            id="entry-mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="Happy">Happy</option>
            <option value="Frustrated">Frustrated</option>
            <option value="Curious">Curious</option>
          </select>
        </div>

        <div>
          <label htmlFor="entry-content">Content</label>
          <textarea
            id="entry-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit" disabled={isFormEmpty}>
          Save Entry
        </button>
      </form>

      <div>
        <h3>Live Preview</h3>
        <article>
          <h4>{title || 'Untitled Entry'}</h4>
          <span>Mood: {mood}</span>
          <p>{content || 'Start typing to preview your entry...'}</p>
        </article>
      </div>
    </section>
  )
}