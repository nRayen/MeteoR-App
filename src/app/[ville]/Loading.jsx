import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="loader">
        <Bars
        height="100%"
        width="100%"
        color="rgba(255, 240, 240, 0.08)"
        ariaLabel="bars-loading"
        visible={true}
        />
    </div>
  )
}

export default Loading