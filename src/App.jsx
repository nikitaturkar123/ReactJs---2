import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://media.istockphoto.com/id/2121827514/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9TOnGlHwC2be_TtbV6WeVf_YPn5dZ24BDVVtRWUrvs=',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://assets.aboutamazon.com/dims4/default/07218a3/2147483647/strip/false/crop/1920x1280+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F16%2F4d%2F26924ab5419bbdc6da263a7db411%2Faws-course.jpg',
      intro:'',
      tag:'UnderServed'
    },
    {
      img:'https://images.unsplash.com/photo-1522202757859-7472b0973c69?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTYyNjIxM3x8ZW58MHx8fHx8',
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:'https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=djcmeAgDXgG6pMoiubDGzzveTdQldVXbm0hzZUFonpc=',
      intro:'',
      tag:'Average' 
    },
    {
      img:'https://media.istockphoto.com/id/2246945166/photo/girl-student-explains-a-diorama-and-cardboard-prototype-to-a-teacher-during-a-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=VIPHD3G4JCtLuGXkQI-osBq22L8Uh-QwrXc7CW2zDhE=',
      intro:'',
      tag:'Excellent'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661310044109-cde7da2c9309?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fFdvcmtpbmclMjBQcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'',
      tag:'Outstanding'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App

