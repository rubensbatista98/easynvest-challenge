import logo from 'assets/logo.svg';

import headerStyles from 'styles/components/app-header.module.css';
import buttonStyles from 'styles/components/button.module.css';

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

      <div>
        <article>
          <h4>My name 1</h4>

          <div>
            <div>
              <p>myemail1@test.com.br</p>
              <p>04080757247</p>
              <p>11987654321</p>
            </div>

            <div>
              <button>Editar</button>
              <button>Deletar</button>
            </div>
          </div>
        </article>

        <article>
          <h4>My name 1</h4>

          <div>
            <div>
              <p>myemail1@test.com.br</p>
              <p>04080757247</p>
              <p>11987654321</p>
            </div>

            <div>
              <button>Editar</button>
              <button>Deletar</button>
            </div>
          </div>
        </article>

        <article>
          <h4>My name 1</h4>

          <div>
            <div>
              <p>myemail1@test.com.br</p>
              <p>04080757247</p>
              <p>11987654321</p>
            </div>

            <div>
              <button>Editar</button>
              <button>Deletar</button>
            </div>
          </div>
        </article>
      </div>
    </main>
  `;

  return $wrapper;
}

export { Home };
