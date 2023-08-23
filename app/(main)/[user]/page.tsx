export default async function ProfilePage({params}: {params: {user: string}}) {

  return <div>Profile Page: {params.user}</div>
}