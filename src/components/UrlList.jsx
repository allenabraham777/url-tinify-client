import React from 'react'

const UrlList = (props) => {
  return(
    <div style={{background: '#d3d6db'}}>
      {
        props.urls.map((url) => {
          return (
            <div className="urls">
              <div className="longurl">{url.url}</div>
              <div className="shorturl"><a href={url.shortUrl} target="_url">{url.shortUrl}</a></div>
              <div className="copybutton">Copy</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default UrlList