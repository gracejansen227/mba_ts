import React, { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlap';

import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }: any) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creatinig user...' />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
