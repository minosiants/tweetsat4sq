;(function($){
	
	$(document).ready(function(){
		
		var metaContent=function(prop){
			return $('meta[property="'+prop+'"]').attr('content');
		};	
		 	
		var geocode=function(){
			return metaContent("playfoursquare:location:latitude")+","+metaContent("playfoursquare:location:longitude")+",0.250km"; 
		};
		var $container=$("#shareSocial").parent().append("<div style='margin:2px;'></div>");
		var $query=$("<input class='formStyle notranslate' style='display:inline'></input>").val(metaContent("og:title")).appendTo($container);
		
		
		
		var $t=$("<div id='tweets' class='tips'></div>");
		$('body').append($t);
		
		$("<button class='greenButton' style='display:inline'>Find local tweets</button>").click(function(event){
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
		}).appendTo($container);
		
	});//document 
	
	

})(jQuery.noConflict());








