import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    callApiTodosUsuarios(){      
      // Github fetch library : https://github.com/github/fetch
      // Call the API page
      fetch('http://localhost:8080/usuario/')
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);     
      })
    }

    callApiUmUsuario(id){
      // Github fetch library : https://github.com/github/fetch
      // Call the API page
      fetch('http://localhost:8080/usuario/'+id)
      .then((result) => {
        // Get the result
        // If we want text, call result.text()        
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);     
      })
    }

    callApiDeletaUsuario(id){
      // Github fetch library : https://github.com/github/fetch
      // Call the API page
      fetch('http://localhost:8080/usuario/'+id,{
        method: 'DELETE'        
      })
      .then((result) => {
        // Get the result
        // If we want text, call result.text()        
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        console.log(jsonResult);     
      })
    }

  render() {
    return (
<div>
<button onClick={() => this.callApiTodosUsuarios()}>
  Lista todos os usuários no console.log
</button>
<br></br>
<br></br>
<br></br>
<input id="IdUsuario" placeholder="Id do usuário"></input>

<button onClick={() => this.callApiUmUsuario(document.getElementById('IdUsuario').value)}>Lista um usuário</button>
<button onClick={() => this.callApiDeletaUsuario(document.getElementById('IdUsuario').value)}>Deleta usuário</button>

</div>
    );
  }
}

export default App;
