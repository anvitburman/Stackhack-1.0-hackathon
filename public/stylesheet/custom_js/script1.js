$(document).ready(function(){


    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    

    if(next_fs.attr('id')=='view'){
      document.getElementById("getName").innerHTML=document.getElementById("name").value;
      document.getElementById("getEmail").innerHTML=document.getElementById("email").value;
      document.getElementById("getMobile").innerHTML=document.getElementById("mobile").value;
      document.getElementById("getRegType").innerHTML=document.getElementById("reg_type").value;
      document.getElementById("getNoTickets").innerHTML=document.getElementById("ticket").value;
      var ip=document.getElementById("docs");
      if (ip.files && ip.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#getImg')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(ip.files[0]);
      }
    }
          
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
    return false;
    })
    
    });

