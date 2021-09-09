import logo from 'assets/logo-icon.svg';

function Register() {
  const $wrapper = document.createElement('section');

  $wrapper.innerHTML = `
    <aside>
      <img width="300px" height="200px" src=${logo} alt="" />
    </aside>

    <nav>
      <a href="/" data-link>Ver usuários</a>
    </nav>

    <main>
      <h1>Cadastrar usuário</h1>

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
  `;

  return $wrapper;
}

export { Register };
