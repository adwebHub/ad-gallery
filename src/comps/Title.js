import React from 'react';

const Title = () => {
  return (
    <div className="title">
      <a href={window.top.location}>
      <h1><img src='https://canvas.adweb.gr/wp-content/uploads/2022/07/header-logo.png' style={{width: '150px'}} alt="_pic"></img></h1>
      </a>
      <h2>Our Gallery</h2>
      <p>Take a look at some of our most inspired works</p>
    </div>
  )
}

export default Title;