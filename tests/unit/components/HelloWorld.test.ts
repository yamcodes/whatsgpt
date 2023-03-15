import { render, fireEvent } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

const countText = (count: number) => `count is ${count}`;

describe('HelloWorld.vue', () => {
  it('renders a heading with a given msg', () => {
    const msg = 'Hello World';
    const { getByText } = render(HelloWorld, {
      props: { msg },
    });
    expect(getByText(msg)).toBeTruthy();
  });

  it('should update the count when the button is clicked', async () => {
    const { getByText } = render(HelloWorld);
    const button = getByText(countText(0));
    await fireEvent.click(button);
    expect(button.textContent).toBe(countText(1));
  });

  it('should update the count when the button is clicked x100', async () => {
    const { getByText } = render(HelloWorld);
    const button = getByText(countText(0));

    await Promise.all(
      Array.from({ length: 100 }).map(() => fireEvent.click(button)),
    );

    expect(button.textContent).toBe(countText(100));
  });
});
