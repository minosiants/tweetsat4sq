;(function($){
	
	$(document).ready(function(){
		
		var metaContent=function(prop){
			return $('meta[property="'+prop+'"]').attr('content');
		};	
		 
		var $container=$("#shareSocial").parent().append("<div style='margin:2px;'></div>");
		var $query=$("<input class='formStyle notranslate t4sq-query'></input>").val(metaContent("og:title")).appendTo($container);
		var $submit=$("<button class='t4sq-submit greenButton' style='display:inline'>Find local tweets</button>").appendTo($container);
		var $radius=$("<input class='formStyle notranslate t4sq-radius' value='0.250'></input>").appendTo($container);
		$("<span>km.</span><p class='t4sq-helpText'>Radius of the search</p>").appendTo($container);
			
		var geocode=function(){
			return metaContent("playfoursquare:location:latitude")+","+metaContent("playfoursquare:location:longitude")+","+$radius.val()+"km"; 
		};
		
		var $t=$("<div id='tweets' class='tips'></div>");
		$('body').append($t);
		
		$submit.click(function(event){
			$t.empty().jTweetsAnywhere({
			    searchParams:['q='+$query.val(), 'geocode='+geocode(), 'result_type=recent'],
			    count: 20 ,
			    showTweetFeed: {
			    	showGeoLocation:true,			    	
			        showSource: true,
			        paging: {
			            mode: 'endless-scroll'
			        },
			        autoConformToTwitterStyleguide: true,
			        autorefresh:{
			        	mode:"trigger-insert",
			        	interval: 60
			        },
			        showTimestamp: {
			            refreshInterval: 15
			        }
			    }			    
			});
		});
		
	});//document 
	
	

})(jQuery.noConflict());








