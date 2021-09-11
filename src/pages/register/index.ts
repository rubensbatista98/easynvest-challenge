import logo from 'assets/logo-icon.svg';

import registerStyles from './styles.module.css';

function Register() {
  const $wrapper = document.createElement('section');

  $wrapper.classList.add(registerStyles.wrapper);

  $wrapper.innerHTML = `
    <aside class=${registerStyles.sidebar}>
      <img
        width="300px"
        height="200px"
        src=${logo}
        alt=""
        class=${registerStyles.logo}
      />
    </aside>

    <div class=${registerStyles.container}>
      <nav>
        <a href="/" data-link>Ver usuários</a>
      </nav>

      <main>
        <h1 class=${registerStyles.title}>Cadastrar usuário</h1>

        <form>
          <section>
            <label for="name">Nome completo (sem abreviações)</label>
            <input type="text" id="name" name="name" />
          </section>

          <section>
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </section>

          <section>
            <label for="cpf">CPF</label>
            <input type="number" id="cpf" name="cpf" />
          </section>

          <section>
            <label for="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" />
          </section>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  `;

  return $wrapper;
}

export { Register };
