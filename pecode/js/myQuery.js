$(document).ready(function(){
    $(".ButtSent").click(function(){
        var error=false;
        $(".first-sent").each(function(){
            if($(this).val()==""){
                error=true;
            }
        })
        if(error===true){
        alert("Будь ласка, заповніть всі поля");
        }        
    });    
    $(".ButtSend").click(function(){
        var error=false;
        $(".sec-sent").each(function(){
            if($(this).val()==""){
                error=true;
            }
        })
        if(error===true){
        alert("Будь ласка, заповніть всі поля");
        }        
    });
}); 