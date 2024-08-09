import React from 'react'

const Container = ({children,className=''}) => {
  return (
    <div className={`${className} max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto`}>
        {children}
    </div>
  )
}

export default Container