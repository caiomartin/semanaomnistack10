import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

// CONCEIRO REACT
// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicação
// Propriedade: Informação que um componete PAI passa para o componete FILHO 
// Estado: Infromações mantidas pelo componente (Lembrar: imutabilidade) 



function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="usernametechs_github" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="usernameteclatitudehs_github" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        
         </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Caio Martins"/>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g/">Acessar perfil Github</a>
          </li>  

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Caio Martins"/>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g/">Acessar perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Caio Martins"/>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g/">Acessar perfil Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Caio Martins"/>
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/diego3g/">Acessar perfil Github</a>
          </li>
        </ul>
        

      </main>
    </div>
  );
}

export default App;
