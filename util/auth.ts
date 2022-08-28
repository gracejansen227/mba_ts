import axios from 'axios';

const API_KEY = 'AIzaSyAa-h4UqX0iANh_Rs5Ish-uX5l-MoAxieI';

export function createUser(email: string, password: string) {
  axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
