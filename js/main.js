$(document).ready(function(){
   
    $(document).on('click',".lockIphone",function(){
        $('.navmenu-fixed-right').removeClass('in');
        $('body').removeClass('lockIphone');
    });

	$('.navbar-settings').click(function(){
        if(!$('.navmenu-fixed-right').hasClass('in')){
            $('.navmenu-fixed-right').addClass('in');
            
            setTimeout(function(){
                $('body').addClass('lockIphone');
            }, 500);

        } else {
            $('.navmenu-fixed-right').removeClass('in');
            $('body').removeClass('lockIphone');    
        }

    });

    

});