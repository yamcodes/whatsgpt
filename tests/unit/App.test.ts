import { fireEvent, render } from '@testing-library/vue';
import { waitForRouteChange } from '@tests/utils';
import { beforeEach, describe, expect, it } from 'vitest';
import router from '@/router';
import App from '@/App.vue';

const renderApp = () => render(App, { global: { plugins: [router] } });

describe('App.vue', () => {
  let getByText: (text: string) => HTMLElement;
  beforeEach(() => {
    ({ getByText } = renderApp());
  });

  describe('Home page', () => {
    it('renders the Get Started link when on the Home page', async () => {
      router.push('/');
      await router.isReady();
      expect(getByText('Get Started')).toBeTruthy();
    });

    it('navigates to the Chat page when the Get Started link is clicked on the Home page', async () => {
      router.push('/');
      await router.isReady();
      const getStartedButton = getByText('Get Started');
      await fireEvent.click(getStartedButton);
      await waitForRouteChange('/chat');
      expect(router.currentRoute.value.path).toBe('/chat');
    });

    it('does not render the navbar on the Home page', async () => {
      router.push('/');
      await router.isReady();
      expect(document.querySelector('.navbar')).toBeFalsy();
    });

    it('does not render the menu on the Home page', async () => {
      router.push('/');
      await router.isReady();
      expect(document.querySelector('.menu')).toBeFalsy();
    });
  });

  it('renders the navbar on pages other than Home', async () => {
    router.push('/chat');
    await router.isReady();
    expect(document.querySelector('.navbar')).toBeTruthy();
  });

  router.getRoutes().forEach((route) => {
    if (route.name !== 'Home')
      it(`sets the title to the name of the current page (${String(
        route.name
      )})`, async () => {
        router.push(route.path);
        await router.isReady();
        expect(document.querySelector('.navbar a')?.textContent).toBe(
          route.name
        );
      });
  });
});
