import React, { useState } from "react"

const Form = () => {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      let payload = {
        poem: title,
        excerpt: excerpt,
        author: author
      }

      const response = await fetch('/api/save-poem/', {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        redirect: "follow", // manual, *folslow, error
        referrer: "client", // no-referrer, *client
        body: JSON.stringify(payload),
      })

      const answer = await response.json()

      if (answer.success) {
        alert(answer.message)
      }
      else {
        alert(answer.errors[0].msg)
      }
    }
    catch (err) {
      alert('Error connecting to backend:', err)
    }
  }

  const handleTitleChange = e => {
    setTitle(e.currentTarget.value)
  }

  const handleExcerptChange = e => {
    setExcerpt(e.currentTarget.value)
  }

  const handleAuthorChange = e => {
    setAuthor(e.currentTarget.value)
  }

  return (
    <div className='backend'>
      <form onSubmit={handleSubmit} >
        <input placeholder='Poem title' id='title' onChange={handleTitleChange} />
        <input placeholder='Excerpt' id='excerpt' onChange={handleExcerptChange} />
        <input placeholder='Poem author' id='author' onChange={handleAuthorChange} />

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form