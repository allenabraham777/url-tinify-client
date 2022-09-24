import React from 'react'
import copy from 'copy-to-clipboard'

const UrlList = (props) => {
  const clipboard = (index) => {
    copy(document.querySelector(`#link-${index}`).innerHTML)
  }
  return (
    <div className='urls-wrapper'>
      {
        props.urls.map((url, index) => {
          return (
            <div className="urls" key={index}>
              <div className="longurl">{url.url}</div>
              <div className="shorturl"><a href={`https://${url.shortUrl}`} target="_url" id={`link-${index}`}>{url.shortUrl}</a></div>
              {props.isLoggedIn?<div className="clicks">{url.clicks} Click(s)</div>:<></>}
              <div className="copylink"><button onClick={() => clipboard(index)}>Copy</button></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default UrlList