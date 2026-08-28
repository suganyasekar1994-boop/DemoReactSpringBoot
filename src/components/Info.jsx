import React, { useContext } from 'react'
import { InfoContext } from './InfoProvider'

const Info = () => {

    const {info} = useContext(InfoContext);


  return (
    <>

    <footer>
        <hr />
       <p>{info.year} @ {info.name} </p>
    </footer>
      
    </>
  )
}

export default Info
