/* eslint-disable import/prefer-default-export */

import router from '@/router';

/**
 * Waits for the route to change to the target path
 * @param targetPath - The path to wait for
 * @returns A promise resolving when the route changes to the target path
 */
function waitForRouteChange(targetPath: string) {
  return new Promise<void>((resolve) => {
    const afterEachGuard = router.afterEach((to) => {
      if (to.path === targetPath) {
        afterEachGuard();
        resolve();
      }
    });
  });
}

export { waitForRouteChange };
