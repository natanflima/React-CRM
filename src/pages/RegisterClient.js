import "./RegisterClient.css";
import { createCustomer } from "../services/customerService";
import { useState } from "react";

function RegisterClient() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState()
  const [address, setAddress] = useState()
  async function handleRegister(e){ //formulario nao carrega quando for chamado, na função vai ser cirado o usuario
    e.preventDefault()
    const body = {
      name: nome,
      email: email,
      phone: telefone,
      address: address
    }
    const result = await createCustomer(body)
    if (result){
      window.location.href = "/Menu"
    }
  }
  return (
    <body>
      <section class="section-login">
        <div class="box-form">
          <div class="logo">
            <span>Cadastro de Cliente</span>
          </div>
          <form onSubmit={handleRegister} class="form register">
            <div class="flex">
              <div class="form-control">
                <label for="name-input">Nome<span> *</span> </label>
                <input onChange={(e) => setNome(e.target.value)} type="text" id="name-input" required />
              </div>
            </div>
            <div class="flex">
              <div class="form-control">
                <label for="email-input"> Email<span> *</span> </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email-input" required />
              </div>
            </div>
            <div class="form-control">
              <label for="tel-input"> Telefone<span> *</span> </label>
              <input onChange={(e) => setTelefone(e.target.value)} type="tel" id="tel-input" required />
            </div>
            <div class="form-control">
              <label for="address-input"> Endereço<span> *</span> </label>
              <input onChange={(e) => setAddress(e.target.value)} type="text" id="address-input" required /> 
              {/* antes tava {setNome} */}
            </div>
            <button class="btn">Cadastrar</button>
          </form>
        </div>
      </section>
    </body>
  )
}

export default RegisterClient;