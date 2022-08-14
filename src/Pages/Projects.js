import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'

function Projects() {
  return (
    <>
      <div className='h-screen bg-black'>
        <Header />
        <div className=' px-3 bg-black flex flex-col justify-start items-center'>
          <div className='bg-black  text-white flex flex-col justify-center items-center '>
            <span className='text-4xl font-semibold py-5 '>Projects</span>
            <span className='text-md font-normal py-10 px-5 flex-wrap '>
              I love learning new things everyday, and this list is a proof of
              work for the same.
            </span>
          </div>
          <Card
            title='JU College Windows Web and Mobile App'
            description='A web and mobile app for JU College, a college in India. The app is built using Flutter and the backend is built using NodeJS and MongoDB. The app is currently in development and will be released soon.'
            tags={[
              '#Flutter',
              '#Dart',
              '#Firebase',
              '#ReactJS',
              '#NodeJS',
              '#MongoDB',
            ]}
            link='https://play.google.com/store/apps/details?id=com.esarkari.wbjee'
            image='https://kishans.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjumsbanner.c58cd8b0.webp&w=3840&q=75'
          />
          <Card
            title='JU CodeForces Ranking'
            description='A web app to track the ranking of students in JU College in CodeForces. The app is built using ReactJS and ChartJs.We Using CodeForces RestApi.'
            tags={['#ReactJS', '#ChartJS', '#RestApi']}
            link='https://play.google.com/store/apps/details?id=com.esarkari.wbjee'
            image='https://kishans.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjumsbanner.c58cd8b0.webp&w=3840&q=75'
          />
          <Card
            title='WBJEE Previous Year v2.0.0'
            description='WBJEE Previous Year is a mobile application for WBJEE aspirants. It contains previous year question papers of WBJEE Aspirant. '
            tags={['#Flutter', '#Dart', '#Firebase', '#Supabase']}
            link='https://play.google.com/store/apps/details?id=com.esarkari.wbjee'
            image='https://kishans.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjumsbanner.c58cd8b0.webp&w=3840&q=75'
          />
          <Card
            title='Omegle Clone Using WebRTC'
            description='Omegle Clone Using WebRTC is a web application for chatting with random people. It uses WebRTC for video and audio chat.'
            tags={['#WEBRTC', '#Socket.io', '#Javascript']}
            link='https://play.google.com/store/apps/details?id=com.esarkari.wbjee'
            image='https://kishans.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjumsbanner.c58cd8b0.webp&w=3840&q=75'
          />
        </div>
      </div>
    </>
  )
}

export default Projects
