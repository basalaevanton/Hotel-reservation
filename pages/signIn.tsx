import type { NextPage } from 'next';
import 'normalize.css';

import { withLayout } from '../layout/Layout';

import { LoginForm } from '../pageComponents';

const SignIn: NextPage = () => {
  return <LoginForm />;
};

export default withLayout(SignIn);
