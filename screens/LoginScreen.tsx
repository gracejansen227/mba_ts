import React, { useState } from 'react';
import { useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent, {
  EmailPasswordProps,
} from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlap';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }: EmailPasswordProps) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error: any) {
      Alert.alert(
        'Log in failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging in user...' />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
