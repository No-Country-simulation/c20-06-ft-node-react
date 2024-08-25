"use client"
import { useParams } from "next/navigation"

const User = () => {
  const { user } = useParams()

  return (
    <div>{user}</div>
  )
}

export default User
