$(document).ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
                var username=$('input[type="text"]').val();
                var password=$('input[type="password"]').val();
                if(username=='' && password==''){
                    alert("Username or password is not entered");
            }
                else{
                    $ajax({
                        url:"http://localhost:5500/users",   
                        type:'GET',
                        data:{
                            "Username":Username,
                            "Password":Password,
                    },
                        success:(x)=>{
                            alert(username+" Login Successfull..");
                            console.log(x);
                            window.location="http://127.0.0.1:5500/html/registration.html"
                        }
                    })
                }
            })

    })
    
    
    



        


    
    










    
        


                
    