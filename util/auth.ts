const axios = require('axios').default;

export async function authenticateUser(
  action: string,
  email: string,
  password: string
) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${action}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email: string, password: string) {
  return authenticateUser('signUp', email, password);
}

export function login(email: string, password: string) {
  return authenticateUser('signInWithPassword', email, password);
}
