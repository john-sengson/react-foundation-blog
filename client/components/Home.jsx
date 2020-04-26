import React from 'react'




class Home extends React.Component {

  render() {
    return (

      <div className="blog-body">
        <br />
        <br />
        <h1>Welcome to my Blogsite!</h1>
        <br />
        <br />
        <br />
        <br />
        <h2>Intro</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Hi there and welcome to my website. My name is John Sengson and I am a student at <a href="https://devacademy.co.nz/">EDA</a>.</p>
        <p>This is my first ever website and I am creating this as part of my curriculum.</p>
        <p>I have blogs about my time studying, share some of my values, and hopefully later on videos and photos of my time in EDA.</p>
        <p>I hope you enjoy your visit and take your time reading my blogs. Not the best but a good read nonetheless.</p>
        <img src='https://john-sengson.github.io/pages/photo/jp.photo.jpg' alt='jp-photo' className="center thin-border" />
      </div>
    )
  }
}

export default Home