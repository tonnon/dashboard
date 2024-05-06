import { redirect } from "next/navigation"

export default function Home() {
  redirect('/dashboard')
  return (
    <h1>Homepage</h1>
  )
}
