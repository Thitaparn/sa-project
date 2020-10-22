import { createPlugin } from '@backstage/core';
import WelcomePage from './components/WelcomePage';
import Patient from './components/Patient';
import SignIn from './components/SignIn';
import MenuTab from './components/Menu';

export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', SignIn);
    router.registerRoute('/MenuTab', MenuTab);
    router.registerRoute('/Tables', WelcomePage);
    router.registerRoute('/SavePatient', Patient);

  }
});
