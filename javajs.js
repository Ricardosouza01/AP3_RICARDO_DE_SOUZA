
function fSubmit() {
	

	  var correctanswer = document.getElementById("oi");
	  var form = document.getElementById('form');
	  

	  form.addEventListener('submit', function(event) {
	    if (correctanswer.checked) {
	      document.getElementById("div-certo").style.display = 'block';
	      document.getElementById("div-errado").style.display = 'none';
	      

	     }

	     else {
	      document.getElementById("div-certo").style.display = 'none';
	      document.getElementById("div-errado").style.display = 'block';
	      } 
	      

	     event.preventDefault();
	    
	  });
	    
	}

