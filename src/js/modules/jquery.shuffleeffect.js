/*!
 * jQuery Shuffle Effect
 * version: 1.0
 *
 * Examples and documentation at: http://katoshun.com/blog/shuffle-effect.html
 */

jQuery.fn.extend({

	shuffleEffect: function(duration) {

		if(duration == null) duration = 50;
		var arrLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		var $this = jQuery(this);
		var strDefault = $this.text();
		var nLength = strDefault.length - 1;
		var i = 0;
		var strText = "";
		var tid = setInterval(function() {
			if(i < nLength+1){
				var strShuffle = "";
				for(var j=0; j<nLength-i; j++){
					strShuffle += arrLetter[Math.floor(Math.random() * arrLetter.length)];
				}
				strText += strDefault.charAt(i);
				$this.css({display:"block"}).text(strText + strShuffle);
				i++;
			} else {
				clearInterval(tid);
			}
		}, duration);

	}

});
