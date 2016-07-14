
    function ajaxindicatorstart(text)
    {
		 
		vpw = $(window).width();
		vph = $(window).height();
		
        if($('body').find('#resultLoading').attr('id') != 'resultLoading'){
        $('body').append('<div id="resultLoading" style="display:none"> <div id="loadingIcon" class="centerLoading"><img src="images/loader.gif" style="height:60px;width:60px;"><!--<div>'+text+'</div>--></div><div class="bg"></div> </div>');
        }
        
        $('#resultLoading').css({
            'width':vpw+"px",
            'height':vph+"px",
            'position':'fixed',
            'z-index':'10000000',
            'left': '0px',
            'right':'0px',
            'bottom':'0px',
			'top': '0px',
			'margin':'auto',
			'text-align':'center'
			
        }); 
		
		$('#loadingIcon').css({
          
            'position':'absolute',
            'z-index':'10000001',
            'left': '0px',
            'right':'0px',
            'bottom':'0px',
			'margin':'auto',
			
			'margin-top': ((vph/2)-40)+'px'
			
        }); 
        
        $('#resultLoading .bg').css({
            'background':'#000000',
            'opacity':'0.7',
            'width':'100%',
            'height':'100%',
            'position':'absolute',
            'top':'0',
			'z-index':'9999999',
        });
        
        $('.centerLoading').css({
           
            'text-align': 'center',
            'position': 'absolute',
            'top':'0',
            'left':'0',
            'right':'0',
            'bottom':'0',
            'margin':'auto',
            'font-size':'16px',
            'z-index':'10000001',
            'color':'#ffffff',
			'margin-left': ((vpw/2)-40)+'px',
			'margin-top': ((vph/2)-40)+'px'
            
        });
		
		
		 

        $('#resultLoading .bg').height('100%');
        $('#resultLoading').fadeIn(300);
        $('body').css('cursor', 'wait');
    }

    function ajaxindicatorstop()
    {
        $('#resultLoading .bg').height('100%');
        $('#resultLoading').fadeOut(300);
        $('body').css('cursor', 'default');
    }
    
    function callAjax()
    {
        $.ajax({
            type: "GET",
            url: "fetch_data.php",
            cache: false,
            success: function(res){
                    $('#ajaxcontent').html(res);
            }
        });
    }
  
 
function CheckStatus(statusCode)
{
        var message="";
        switch(statusCode)
        {
            case "0000":
                message="success"; break;
            case "0008":
                message="Failed to complete request. Please try again"; break;
            case "9999":
                message="Server failed to respond, Kindly try again later"; break;
            case "1000":
                message="You phone number is not registered in the system, Kindly contact admin"; break;
            case "1001":
                message="Database exception"; break;
            case "1002":
                message="Please provide all the required values"; break;
            case "1003":
                message="Could not connect to remote DB"; break;
            case "1004":
                message="Database operation failed, Please try again"; break;
            case "1005":
                message="There is no data against these details in the system"; break;
            case "1006":
                message="You are not authorised to make this call"; break;
			 case "1008":
                message="Phone number and password do not match!"; break;
			case "1010":
                message="Incorrect password"; break;
			case "1011":
                message="Phone number must have min 10 digits"; break;
			case "1012":
                message="Incorrect password length"; break;
			case "1008":
                message="Phone number and password do not match!"; break;
			case "1013":
				 message="Your profile is disabled, Kindly contact admin"; break;
			case "1014":
				 message="Kindly set bus stop location for drop"; break;
			case "1015":
				 message="Kindly set bus stop location for pickup"; break;
            default:
                message="Something went wrong at server!, Kindly try again after some time"; break;
        }
        return message;
}

function GetParameterData(url) {
   var  params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    return data;
}

function CreateOption(val,opt) {
    var obj = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = opt;
    option.value = val;
    obj.appendChild(option);
}
  
