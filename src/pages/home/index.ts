import logo from 'assets/logo.svg';
import editIcon from 'assets/icons/edit-icon.svg';
import trashIcon from 'assets/icons/trash-icon.svg';

import headerStyles from 'styles/components/app-header.module.css';
import buttonStyles from 'styles/components/button.module.css';
import cardStyles from 'styles/components/card-user.module.css';

import homeStyles from './styles.module.css';

function Home() {
  const $wrapper = document.createElement('section');

  $wrapper.innerHTML = `
    <header class=${headerStyles['app-header']}>
      <div class=${headerStyles.wrapper}>
          <div class=${headerStyles.logo}>
            <img width="475px" height="100px" src=${logo} alt="Easynvest" />
          </div>

          <nav>
            <a href="/cadastrar" data-link class=${buttonStyles.button}>
              Novo usuário
            </a>
          </nav>
      </div>
    </header>

    <main class=${homeStyles.container}>
      <h1 class=${homeStyles.title}>Usuários</h1>

      <div class=${homeStyles['users-list']}>
        ${Array.from({ length: 8 })
          .map(
            () => `
            <article class=${cardStyles['card-user']}>
              <h4 class=${cardStyles.name}>My name 1</h4>

              <div class=${cardStyles.body}>
                <p>myemail1@test.com.br</p>
                <p>040.807.572-47</p>
                <p>(11) 98765-4321</p>

                <div class=${cardStyles['buttons-container']}>
                  <button
                    aria-label="Editar usuário"
                    class=${cardStyles.btn}
                  >
                    <img src=${editIcon} aria-hidden="true" />
                  </button>

                  <button
                    aria-label="Deletar usuário"
                    class="${cardStyles.btn} ${cardStyles['-delete']}"
                  >
                    <img src=${trashIcon} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          `
          )
          .join('')}
      </div>
    </main>
  `;

  return $wrapper;
}

export { Home };
