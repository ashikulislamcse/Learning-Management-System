import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Students/Home.jsx'
import CourseList from './Pages/Students/CoursesList.jsx'
import CourseDetails from './Pages/Students/CourseDetails.jsx'
import MyEnrollment from './Pages/Students/MyEnrollment.jsx'
import Player from './Pages/Students/Player.jsx'
import Loading from './Components/Students/Loading.jsx'
import Educator from './Pages/Educator/Educator.jsx'
import Deshboard from './Pages/Educator/Deshboard.jsx'
import AddCourses from './Pages/Educator/AddCourse.jsx'
import MyCourses from './Pages/Educator/MyCourses.jsx'
import StudentEnrolled from './Pages/Educator/StudentEnrolled.jsx'
import Navbar from './Components/Students/Navbar.jsx'
const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course-details/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollment' element={<MyEnrollment/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
          <Route path='educator' element={<Deshboard/>}/>
          <Route path='add-course' element={<AddCourses/>}/>
          <Route path='my-courses' element={<MyCourses/>}/>
          <Route path='student-enrolled' element={<StudentEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
