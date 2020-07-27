import React from 'react'

const LinkStats = (props) => {
  
  if(props.links.urls)
    return <div style={{paddingTop: '80px'}}>
      Link Stats
      {props.links.urls.map((link, index)=>{
        return <div key={index}>
          {link._id} {link.longUrl} {link.shortUrl}
        </div>
      })}
    </div>
  else
    return <></>
}

export default LinkStats