(
	function ()
	{
		var minute = ["00", "15", "30", "45"]
		var result = [];
		var generateRandomTime = function ()
		{
			var t = getRandomInt(0, 36);
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
			document.write(res);
			document.write("<br>");
		};
		var getRandomInt = function (min, max)
		{
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		for (var i = 0; i < 100; i++)
		{
			generateRandomTime();
		}
	})();
