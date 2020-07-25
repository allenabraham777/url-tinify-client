import React, { useState } from 'react'
import UrlValidator from '../utils/urlValidator'
import axios from 'axios'

const UrlForm = (props) => {
  // dotenv.config()
  // console.log(process.env.REACT_APP_BACKEND);
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const submitUrl = async (e) => {
    e.preventDefault()
    setError('')
    if(!UrlValidator(url)) {
      setError('Please enter a valid Url')
      return
    }
    document.querySelector('button').disabled = true
    document.querySelector('button').innerHTML = "Shrinking.."
    await axios.post(`${process.env.REACT_APP_BACKEND}/url/generate`, { longUrl: url })
    .then((response) => {
      console.log(response);
      // setUrl(`http://localhost:3001/${response.data.shortUrl}`)
      props.changeHandler(url, response.data.shortUrl)
      document.querySelector('input').innerHTML = response.data.shortUrl
    }).catch((err) => {
      setError('Server Error')
    })
    document.querySelector('button').disabled = false
    document.querySelector('button').innerHTML = "Shrink"
  }

  return (
    <>
      <form className="form-wrapper" onSubmit={submitUrl}>
        <div className="error">{error}</div>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter the long url"/>
        <button type="submit">Shrink</button>
      </form>
    </>
  )
}

export default UrlForm