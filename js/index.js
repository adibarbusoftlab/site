$(function(){
  $('#nav').click(function() {
    $(this).toggleClass('open');
  });
});

(function ($) {
    $(document).ready(function () {
  	
        var $cookie = $('#eucookies');
        var $button = $('#eucookies button');
        if (document.cookie.indexOf('displayCookieInfo') === -1) {
		// add auxiliary space at the bottom of the page - when scroll down at the bottom of the page the cookie message will be shown beloow the existing content
		var height =  $("#eucookies").height()+25
		$('#eucookiesbottom').height(height);
		
        $cookie.slideDown( "slow" );	
        }
		
        $button.on('click', function () {
            var expiry = new Date();
            expiry.setDate(expiry.getDate() + 31 * 1);
            document.cookie = 'displayCookieInfo' + '=' + escape('no') + ';path=/' + ';expires=' + expiry.toGMTString();
            $cookie.fadeOut();
			$('#eucookiesbottom').height(0); // hide div when the cookie message disappear
        });
		
    });
}(jQuery));