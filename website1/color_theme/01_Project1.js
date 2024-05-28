const buttons = document.querySelectorAll('.button');
const body = document.querySelector('#ALLContents')
const header2 = document.querySelector('h2')
const header3 = document.querySelector('h3')

buttons.forEach( function(button) {
   console.log(button);
   button.addEventListener('click', function(e){
      console.log(e)
      console.log(e.target)
      if(e.target.id == "grey"){
         body.style.backgroundColor = e.target.id;
         header2.style.color = 'black';
         header3.style.color = 'black';
      }
      if(e.target.id == "white"){
         body.style.backgroundColor = e.target.id;
         header2.style.color = 'red';
         header3.style.color = 'red';
      }
      if(e.target.id == "black"){
         body.style.backgroundColor = e.target.id;
         header2.style.color = 'white';
         header3.style.color = 'white';
      }
      if(e.target.id == 'red'){
         body.style.backgroundColor = e.target.id;
         header2.style.color = 'black';
         header3.style.color = 'black';
      }
   });
});