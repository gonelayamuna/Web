  <script src="jquery-1.4.2.min.js"></script>
	<script>
$(window).load(function(){
		var pages = $('#container li'), current=0;
		var currentPage,nextPage;
		var timeoutID;
		var buttonClicked=0;

		var handler1=function(){
			buttonClicked=1;
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
				else
					current=current-1;
				nextPage = pages.eq(current);	

				nextPage.css("marginLeft",-604);
				nextPage.show();
				nextPage.animate({ marginLeft: 0 }, 800,function(){
					currentPage.hide();
				});
				currentPage.animate({ marginLeft: 604 }, 800,function(){
					$('#container .button').bind('click',handler1);
				});
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
				nextPage = pages.eq(current);	

				nextPage.css("marginLeft",604);
				nextPage.show();
				nextPage.animate({ marginLeft: 0 }, 800,function(){
				});
				currentPage.animate({ marginLeft: -604 }, 800,function(){
					currentPage.hide();
					$('#container .button').bind('click',handler1);
				});
			}		
		}

		var handler2=function(){
			if (buttonClicked==0)
			{
			$('#container .button').unbind('click');
			currentPage= pages.eq(current);
			if (current >= pages.length-1)
				current=0;
			else
				current=current+1;
			nextPage = pages.eq(current);	
			nextPage.css("marginLeft",604);
			nextPage.show();
			nextPage.animate({ marginLeft: 0 }, 800,function(){
			});
			currentPage.animate({ marginLeft: -604 }, 800,function(){
				currentPage.hide();
				$('#container .button').bind('click',handler1);
			});
			timeoutID=setTimeout(function(){
				handler2();	
			}, 4000);
			}
		}

		$('#container .button').click(function(){
			clearTimeout(timeoutID);
			handler1();
		});

		timeoutID=setTimeout(function(){
			handler2();	
			}, 4000);
		
});

</script>
		