import { Dimensions } from '@types';

export const getBeforeDimensions = (element: HTMLElement | null): Dimensions => {
  if (!element) return { height: 0, width: 0 };
  const { height, width } = window.getComputedStyle(element, ':before');
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10),
  };
}

export const getAfterDimensions = (element: HTMLElement | null): Dimensions => {
  if (!element) return { height: 0, width: 0 };
  const { height, width } = window.getComputedStyle(element, ':after');
  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10),
  };
}