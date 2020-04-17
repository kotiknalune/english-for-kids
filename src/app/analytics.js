function createAnalytics() {
  let counter = 0;
  const listener = function c() {
    counter += counter;
  };
  let isDestroyed = false;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics are destroyed';
      }
      return counter;
    }
  };
}
window.analytics = createAnalytics();
