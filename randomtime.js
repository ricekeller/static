(
	function ()
	{
		var range=1;
		var div=$("#result");
		$("#rangeSelect").change(function(evt){
			var newRange=1;
		});

		$("#refresh").click(function  (evt) {
			div.empty();
			for (var i = 0; i < 1000; i++)
			{
				generateRandomTime();
			}
		});

		var minute = ["00", "15", "30", "45"]
		var result = [];
		var generateRandomTime = function ()
		{
			var end;
			if(range===1)
			{
				end=40;
			}
			else if(range===2)
			{
				end=48;
			}
			var t = getRandomInt(0, end);
			var h = Math.floor(t / 4);
			var m = minute[t - h * 4];
			h += 8;
			var isPM = false;
			var suf = "AM";
			if (h > 11)
			{
				suf = "PM";
				if (h > 12)
				{
					h -= 12;
				}
			}
			var res = h + ":" + m + " " + suf;
			result.push(res);
			div.append("<p>"+res+"</p>");
		};
		var getRandomInt = function (min, max)
		{
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
	})();
