export const userLogin = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status !== 200) {
      const { message } = await response.json()
      return { message, status: response.status }
    }
    const { message, user, token } = await response.json()
    return { message, user, token }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
<<<<<<< HEAD
=======


export const userRegister = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status !== 200) {
      const { message } = await response.json()
      return { message, status: response.status }
    }
    const { message, user, token } = await response.json()
    return { message, user, token }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7
