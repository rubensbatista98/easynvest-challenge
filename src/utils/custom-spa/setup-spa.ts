function traceHistoryUpdate() {
  const originalReplace = history.replaceState;
  const originalPush = history.pushState;

  const dispatchEvent = () =>
    window.dispatchEvent(new CustomEvent('historyupdate'));

  history.replaceState = (...args) => {
    originalReplace.apply(history, args);
    dispatchEvent();
  };

  history.pushState = (...args) => {
    originalPush.apply(history, args);
    dispatchEvent();
  };

  window.addEventListener('popstate', dispatchEvent);
}

function observeSpaLinkClick() {
  document.addEventListener('click', (event) => {
    if (!event.target) return;

    const $element = event.target as HTMLElement;

    if (isSpaLink($element)) {
      event.preventDefault();

      history.pushState(history.state, '', $element.href);
    }
  });
}

const isSpaLink = ($element: HTMLElement): $element is HTMLAnchorElement =>
  $element.matches('[data-link]');

function setupSpa() {
  traceHistoryUpdate();
  observeSpaLinkClick();
}

export { setupSpa };
