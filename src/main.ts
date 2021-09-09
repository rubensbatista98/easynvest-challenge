import { Home } from 'pages/home';
import { Register } from 'pages/register';

import { Router, setupSpa } from 'utils/custom-spa';

import 'styles/global.module.css';

function init() {
  const $app = document.querySelector<HTMLDivElement>('#app');

  if ($app === null) return;

  setupSpa();

  Router($app, {
    '/': Home(),
    '/cadastrar': Register()
  });
}

init();
