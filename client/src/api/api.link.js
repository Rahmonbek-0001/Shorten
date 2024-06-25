export async function getAllLinks(token) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}api/links`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer ${token}`
    }
  })
  if (response.status !== 200) {
    const error = await response.json()
    throw new Error(`${error} please try again`)
  }
  const links = await response.json()
  return links
}
