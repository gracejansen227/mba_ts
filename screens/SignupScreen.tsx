import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent, {
  EmailPasswordProps,
} from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlap';
import { AuthContext } from '../store/auth-context';

import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }: EmailPasswordProps) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error: any) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={signUpHandler} isLogin={false} />;
}

export default SignupScreen;
