$(function(){ 
    //toggel dark mood button
  $('.navbar .fa-toggle-off').click(function(){
     
     $('.fa-toggle-off').css("display","none");
     $('.fa-toggle-on').css("display","block");
     $("body").css({"backgroundColor": "#808080"});
     $(".countries .filterbar .active").css({"color": "white"});
     $(".countries .filterbar button:hover").css({"color": "white"});
     $(".countries .filterbar i .active,.countries .filterbar i:hover").css({"color": "white"});
      //$("").css({"": "", "" : ""});
  });
     //$("").css({"": "", "" : ""});
    
  $('.navbar .fa-toggle-on').click(function(){
     
     $('.fa-toggle-on').css("display","none");
     $('.fa-toggle-off').css("display","block");  
     
  });
    // move .active between countries
    
    $('.countries .filterbar button').click(function(){
       
        $(this).addClass('active').siblings('button').removeClass('active');
        
    });
    
    // countries filter
      //display all
    $('.countries .filterbar #all').click(function(){
        
        $('.egypt,.greece,.turkey,.italy,.england').show(1000);
        
    });
    
     //display egypt
    $('.countries .filterbar #egypt').click(function(){
        
        $('.egypt').show(1000);
        $('.greece,.turkey,.italy,.england').hide(1000);
        
    });
    
    //display greece
    $('.countries .filterbar #greece').click(function(){
        
        $('.greece').show(1000);
        $('.egypt,.turkey,.italy,.england').hide(1000);
        
    });
    
        //display turkey
    $('.countries .filterbar #turkey').click(function(){
        
        $('.turkey').show(1000);
        $('.egypt,.greece,.italy,.england').hide(1000);
        
    });
    
        //display italy
    $('.countries .filterbar #italy').click(function(){
        
        $('.italy').show(1000);
        $('.egypt,.turkey,.greece,.england').hide(1000);
        
    });
    
        //display england
    $('.countries .filterbar #england').click(function(){
        
        $('.england').show(1000);
        $('.egypt,.turkey,.italy,.greece').hide(1000);
        
    });
    
    
    // move .active between view method
    
    $('.countries .filterbar i').click(function(){
       
        $(this).addClass('active').siblings('i').removeClass('active');
        
    });
    
       //list view
        $('.countries .filterbar .fa-bars').click(function(){
       
        $(".countries .photo div").css({"width": "100%" , "height" : "205px" });
            
        $(".countries .photo div .a").css({"display": "block"});
            
        $(".countries .photo img").css({"width": "300px", "float": "left" , "height" : "100%" , "marginRight":"5px" });
            
    });
    
       //grid view
        $('.countries .filterbar .fa-th').click(function(){
       
        $(".countries .photo div").css({"width": "31.3333%" , "height" : "300px" });
            
        $(".countries .photo div .a").css({"display": "none"});
            
        $(".countries .photo img").css({"width": "100%", "float": "none" , "height" : "170px" , "marginRight":"0px" });
            
    });
    
    
    
    
});