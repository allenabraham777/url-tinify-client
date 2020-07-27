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
    document.querySelector('#generate-button').disabled = true
    document.querySelector('#generate-button').innerHTML = "Shrinking.."
    
    if(props.isLoggedIn) {
      const token = localStorage.getItem("token")
      console.log(token);
      await axios.post(`${process.env.REACT_APP_BACKEND}/user/url/generate`,
        { longUrl: url },
        {headers: {Authorization: `Bearer ${token}`}}
      )
      .then((response) => {
        console.log(response);
        // props.changeHandler(url, response.data.shortUrl)
        props.callBack(response.data)
        setUrl(response.data.shortUrl)
      }).catch((err) => {
        console.log(err);
        setError('Server Error')
      })
    }
    else {
      await axios.post(`${process.env.REACT_APP_BACKEND}/url/generate`, { longUrl: url })
      .then((response) => {
        console.log(response);
        // setUrl(`http://localhost:3001/${response.data.shortUrl}`)
        props.changeHandler(url, response.data.shortUrl)
        setUrl(response.data.shortUrl)
      }).catch((err) => {
        setError('Server Error')
      })
    }
    document.querySelector('#generate-button').disabled = false
    document.querySelector('#generate-button').innerHTML = "Shrink"
  }

  return (
    <>
      <form className="form-wrapper" onSubmit={submitUrl} style={props.style}>
        <div className="error">{error}</div>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter the long url"/>
        <button type="submit" id="generate-button">Shrink</button>
      </form>
    </>
  )
}

export default UrlForm