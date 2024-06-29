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
export async function generateLink({ token, urlData }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}api/links`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer ${token}`
    },
    body: JSON.stringify(urlData)
  })
  if (response.status !== 201) {
    const { message } = await response.json()
    throw new Error(`${message} please try again`)
  }
  const { message } = await response.json()
  return message
}
export async function deleteLink({ token, linkId }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}api/links/${linkId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      auth: `Bearer ${token}`
    }
  })
  if (response.status !== 200) {
    throw new Error(`please try again`)
  }
  const { message } = await response.json()
  return message
}
