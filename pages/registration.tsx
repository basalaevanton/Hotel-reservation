import type { NextPage } from 'next';
import 'normalize.css';

import { withLayout } from '../layout/Layout';
import { RegistrationForm } from '../pageComponents';

const Registration: NextPage = () => {
  return <RegistrationForm />;
};

export default withLayout(Registration);
