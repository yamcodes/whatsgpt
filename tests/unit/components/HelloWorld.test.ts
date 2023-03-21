import { fireEvent, render } from '@testing-library/vue';
import {
  beforeEach, describe, expect, it,
} from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

const countText = (count: number) => `count is ${count}`;
const defaultMsg = 'Hello World';
const renderHelloWorld = (msg = defaultMsg) => render(HelloWorld, { props: { msg } });

// HelloWorld Factory
const createHelloWorld = (msg = defaultMsg) => {
  const component = renderHelloWorld(msg);
  return {
    ...component,
    getByCountText: (count: number) => component.getByText(countText(count)),
  };
};

describe('HelloWorld.vue', () => {
  let getByText: (text: string) => HTMLElement;
  let getByCountText: (count: number) => HTMLElement;
  beforeEach(() => {
    ({ getByText, getByCountText } = createHelloWorld());
  });

  it('renders a heading with a given msg', () => {
    expect(getByText(defaultMsg)).toBeTruthy();
  });

  it('should update the count when the button is clicked', async () => {
    const button = getByCountText(0);
    await fireEvent.click(button);
    expect(button.textContent).toBe(countText(1));
  });

  it('should update the count when the button is clicked x100', async () => {
    const button = getByCountText(0);
    await Promise.all(
      Array.from({ length: 100 }).map(() => fireEvent.click(button)),
    );

    expect(button.textContent).toBe(countText(100));
  });

  it('should render a heading with another msg', () => {
    const msg2 = 'Hello World 2';
    const { getByText: getByText2 } = createHelloWorld(msg2);
    expect(getByText2(msg2)).toBeTruthy();
  });
});
