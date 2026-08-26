import React from 'react'
import ChildDest from './ChildDest'

const Parentdest = () => {
  return (
    <>
    <ChildDest user = {"jungkook"} age = {30} />
    <ChildDest user = {"sun jae"} age = {29} />
    
    </>
  )
}

export default Parentdest