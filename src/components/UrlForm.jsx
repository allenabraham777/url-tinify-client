import React, { useState } from 'react'
import UrlValidator from '../utils/urlValidator'
import axios from 'axios'

const UrlForm = (props) => {
  // dotenv.config()
  // console.log(process.env.REACT_APP_BACKEND);
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const submitUrl = (e) => {
    e.preventDefault()
    setError('')
    if(!UrlValidator(url)) {
      setError('Please enter a valid Url')
      return
    }
    axios.post(`${process.env.REACT_APP_BACKEND}/url/generate`, { longUrl: url })
    .then((response) => {
      console.log(response);
      // setUrl(`http://localhost:3001/${response.data.shortUrl}`)
      props.changeHandler(url, response.data.shortUrl)
    }).catch((err) => {
      console.log(err);
    })
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