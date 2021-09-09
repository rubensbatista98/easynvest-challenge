import logo from 'assets/logo.svg';

function Home() {
  const $wrapper = document.createElement('section');

  $wrapper.innerHTML = `
    <header>
      <h1>
        <img width="200px" height="50px" src=${logo} alt="Easynvest" />
      </h1>

      <nav>
        <a href="/cadastrar" data-link>Novo usuário</a>
      </nav>
    </header>

    <main>
      <h2>Usuários</h2>

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
