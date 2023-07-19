import React from 'react'
import { Outlet } from 'react-router-dom'
const User = () => {
  return (
    <>
    <h1>User1</h1>
    <h1>User2</h1>
    <h1>User3</h1>
    <Outlet />
    </>
  )
}

export default User