function Router($container: HTMLElement, routes: Record<string, HTMLElement>) {
  $container.append(routes[window.location.pathname]);

  window.addEventListener('historyupdate', () => {
    const $currentChild = $container.firstElementChild;
    const $newChild = routes[window.location.pathname];

    if ($currentChild && $newChild) {
      $container.replaceChild($newChild, $currentChild);
    }
  });
}

export { Router };
