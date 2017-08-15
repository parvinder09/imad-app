console.log('Loaded!');
var button=document.getElementById('counter');

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
}

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('btn_submit');
submit.onclick=function(){
    //make a request to server
    
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('name_list');
    ul.innerHTML=list;
}