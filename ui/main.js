console.log('Loaded!');
/*var button=document.getElementById('counter');


button.onclick=function(){
    
    var request= new XMLHttpRequest();
   
    //create new request object
    request.onreadystatechange = function(){
       
        if(request.readyState===XMLHttpRequest.DONE){
          
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
            }
        }
    }
    
   
   //make request
   request.open("GET","http://parvindersharma09.imad.hasura-app.io/counter",true);
   request.send();
}*/


var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make a request to server
    
    var request= new XMLHttpRequest();
   
    //create new request object
    request.onreadystatechange = function(){
       
        if(request.readyState===XMLHttpRequest.DONE){
          
            if(request.status===200){
               alert('Logged in successfully');
            }
            else if(request.status==403){
                alert("Forbidden");
            }
        }
    }
    
   
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
   //make request
   request.open("POST","http://parvindersharma09.imad.hasura-app.io/login",true);
   request.send(JSON.stringify({username:username,password:password}));
    
    
}