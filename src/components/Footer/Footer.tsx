import React from 'react'
import './Footer.css'

const Footer = () => {
  const shortname = (name:string) => {
    if(name.length > 10) {
        return name.split(" ")[0]
    } else {
        return name
    }
}
  return (
    <div className="footer" >
            <p >
                Made with  
                {/* <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span> */}
                 by {shortname('Noel Osiro')}
            </p>
        </div>
  )
}

export default Footer