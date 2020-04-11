import React from 'react';
import CountAndHistory from '../Molecules/CountAndHistory'
import SendIdea from '../Molecules/SendIdea'
import GetIdea from '../Molecules/GetIdea'

const IdeasFactory = () => {
  return(
    <div>
      <CountAndHistory/>
      <SendIdea/>
      <GetIdea/>
    </div>
  )
}

export default IdeasFactory