function buscar(){

fetch('http://localhost:8080/users')
.then(Response => Response.json())
.then(json=> {
document.getElementById('nome').innerHTML = json.map(post =>  ` <h3>${post.id},${post.name} , ${post.email} , ${post.phone}</h3> `).join('')


})
}


  /*const response = fetch('http://localhost:8080/users')
  .then((responseData) => {
      return responseData.json()
  })
  .then(function(jsonData){
    console.log(jsonData)

  })
*/


function deletar (){

  fetch('http://localhost:8080/users/1', {
    method: 'DELETE',
  })
  .then(res => res.json()) // or res.json()
  .then(res => console.log(res))

}



/*
function update (){

  fetch("http://localhost:8080/users",
  
  {
  
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method : "Put",
      body: JSON. stringify({
          name: name.value
   
      
      })
  })
  .then(function(res){ console.log(res)})
  .catch(function(res){ console.log(res)})
  window.alert("atualizacao");
  
  };
*/
 
  

 
 
 
 
 