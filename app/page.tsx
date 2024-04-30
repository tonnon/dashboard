import { redirect } from "next/navigation"

export default function Home() {
  redirect('/login')
  return (
    <h1>Homepage</h1>
  )
}
