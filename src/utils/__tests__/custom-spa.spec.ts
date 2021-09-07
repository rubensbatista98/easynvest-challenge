import * as tlDom from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { Router, setupSpa } from 'utils/custom-spa';

function createRoutes(initialRoute = '/one') {
  const $container = document.createElement('div');
  const $pageOne = document.createElement('div');
  const $pageTwo = document.createElement('div');

  $pageOne.innerHTML = '<a href="/two" data-link>Go to page two</a>';
  $pageTwo.innerHTML = '<a href="/one" data-link>Go to page one</a>';

  window.history.replaceState({}, '', initialRoute);

  Router($container, {
    '/one': $pageOne,
    '/two': $pageTwo
  });

  return { $container, $pageOne, $pageTwo };
}

const shouldHasOnlyChild = (parent: HTMLElement, child: HTMLElement) => {
  const $currentChild = parent.firstElementChild;

  if ($currentChild) {
    expect(parent.childElementCount).toBe(1);
    expect($currentChild.isSameNode(child)).toBe(true);

    return;
  }

  throw new Error(`Parent does not have a child`);
};

describe('Custom SPA', () => {
  beforeAll(() => {
    setupSpa();
  });

  it('should append route element in container', () => {
    const $container = document.createElement('div');
    const $home = document.createElement('section');

    Router($container, {
      '/': $home
    });

    expect($container.childElementCount).toBe(1);
    expect($container.firstElementChild).toEqual($home);
  });

  it('should append element from current route in container', () => {
    const { $container, $pageTwo } = createRoutes('/two');

    shouldHasOnlyChild($container, $pageTwo);
  });

  it('should container has correct route element when history updates', () => {
    const { $container, $pageOne, $pageTwo } = createRoutes();

    shouldHasOnlyChild($container, $pageOne);

    window.history.pushState({}, '', '/two');
    shouldHasOnlyChild($container, $pageTwo);

    window.history.pushState({}, '', '/one');
    shouldHasOnlyChild($container, $pageOne);
  });

  it('should render new route element when spa link is clicked', () => {
    const { $container, $pageOne, $pageTwo } = createRoutes();

    document.body.appendChild($container);

    const $pageOneLink = tlDom.getByRole($pageOne, 'link', {
      name: /go to page two/i
    });
    const $pageTwoLink = tlDom.getByRole($pageTwo, 'link', {
      name: /go to page one/i
    });

    shouldHasOnlyChild($container, $pageOne);

    userEvent.click($pageOneLink);
    shouldHasOnlyChild($container, $pageTwo);

    userEvent.click($pageTwoLink);
    shouldHasOnlyChild($container, $pageOne);
  });
});
