// Tela de Cadastro Colaborador
import "./UpdateCollab.css";

function UpdateCollab() {
  return (
    <body>
      <body>
        <section class="section-login">
          <div class="box-form">
            <div class="logo">
              <span>Atualização de Colaborador</span>
            </div>
            <form action="#" class="form register">
              <div class="flex">
                <div class="form-control">
                  <label for="ID-input"> ID<span> *</span> </label>
                  <input type="text" id="id-input" required />
                </div>
                <div class="form-control">
                  <label for="name-input"> Nome<span> *</span> </label>
                  <input type="text" id="name-input" required />
                </div>
              </div>
              <div class="flex">
                <div class="form-control">
                  <label for="email-input"> Email<span> *</span> </label>
                  <input type="email" id="email-input" required />
                </div>
                <div class="form-control">
                  <label for="date-input">
                    Data de contratação<span> *</span>
                  </label>
                  <input type="date" id="date-input" required />
                </div>
              </div>
              <div class="flex">
                <div class="form-control">
                  <label for="role-input"> Cargo<span> *</span> </label>
                  <input type="text" id="role-input" required />
                </div>
                <div class="form-control">
                  <label for="department-input">
                    Departamento<span> *</span>
                  </label>
                  <input type="text" id="department-input" required />
                </div>
              </div>
              <div class="flex">
                <div class="form-control">
                  <label for="tel-input"> Telefone<span> *</span> </label>
                  <input type="tel" id="tel-input" required />
                </div>
                <div class="form-control">
                  <label for="datanasc-input">
                    Data de nascimento<span> *</span>
                  </label>
                  <input type="date" id="datanasc-input" required />
                </div>
              </div>
              <div class="flex">
                <div class="form-control">
                  <label for="address-input"> Endereço<span> *</span> </label>
                  <input type="text" id="address-input" required />
                </div>
              </div>

              <button class="btn">Atualizar Colaborador</button>
            </form>
          </div>
        </section>
      </body>
    </body>
  )
}

export default UpdateCollab;