import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [comments, setComments] = useState('')
    const [topic, setTopic] = useState('react')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
        console.log(username)
    }

    const handleCommentsChange = (event) => {
        setComments(event.target.value)
        console.log(comments)
    }

    const handleTopicChange = (event) => {
        setTopic(event.target.value)
        console.log(topic)
    }

    const handleSubmit = (event) => {
        alert(`${username} ${comments} ${topic}`)
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments}
                        onChange={handleCommentsChange}>

                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form