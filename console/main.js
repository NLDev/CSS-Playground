var nullhistory = []; //log
var index = 0;
var aptprg = "";
var dir = "/";
var ccode = "FFF"
var lastinput = "";
var link = "";
var e = document.getElementById("nullin").onkeydown = function(e){
	if (e.keyCode == 13){
		var input = document.getElementById("nullin").value.toLowerCase();
		if (input == "" || input == null) return false;
		if (input != lastinput){
			nullhistory.unshift(input);
			if (nullhistory.length > 10) nullhistory.splice(nullhistory.length - 1, 1);
		}
		lastinput = input;
		if (input.match(/^\s*$/)) nullprint("&gt; ### ERROR ###<br><br>&gt; Please enter a command.<br><br>");
		else if (input.replace(/\s/g, "")  == "help"){
			nullprint(
				"user@nulldev:~ $ help<br><br>" +
				"&gt; ### HELP ###<br>" +
				"<br>&gt; <font color=\"#99ff93\">help</font>: Lists aviable commands." +
				"<br>&gt; <font color=\"#99ff93\">ls</font>: Lists all files in the current directory." +
				"<br>&gt; <font color=\"#99ff93\">pwd</font>: Print working directory." +
				"<br>&gt; <font color=\"#99ff93\">cls</font> / <font color=\"#99ff93\">clear</font>: Clears the console window." +
				"<br>&gt; <font color=\"#99ff93\">cd</font>: Change Directory." +
				"<br>&gt; <font color=\"#99ff93\">color</font>: Sets the font color. Enter '<font color=\"#99ff93\">color help</font>' for more informations." +
				"<br>&gt; <font color=\"#99ff93\">echo</font>: Print input in console." +
				"<br>&gt; <font color=\"#99ff93\">reload</font>: Reloads the current web page and resets everything." +
				"<br>&gt; <font color=\"#99ff93\">lsprog</font>: Display list of all aviable programs." +
				"<br>&gt; <font color=\"#99ff93\">apt-get</font>: Downloads a program listed at '<font color=\"#99ff93\">prlist</font>'. Enter '<font color=\"#99ff93\">apt-get help</font>' for more informations." +
				"<br>&gt; <font color=\"#99ff93\">about</font>: Displays informations about <font color=\"#ef8686\">NullOS Shell</font>." +
				"<br>&gt; <font color=\"#99ff93\">github</font>: Shows the URL to my <a href=\"http://github.com/\" target=\"_blank\"><font color=\"#99ff93\"><u>GitHub</u></font></a> account." +
				"<br>&gt; <font color=\"#99ff93\">open</font>: opens a website. Usage: open \[url\]. '<font color=\"#99ff93\">open help</font>' for more informations." +
				"<br>&gt; <font color=\"#99ff93\">delcmd</font>: Deletes command history \(Arrow-Up / Arrow-Down\)." +
				"<br><br>"
			);
		}
		else if (input.replace(/\s/g, "").indexOf('apt-get') >= 0){
			if (input.replace(/\s/g, "")  == "apt-get" || input  == "apt-get help") nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; Usage: apt-get [program name]<br><br>");
			else {
				aptprg = input.replace('apt-get', '').replace(/\s/g, "");
				if (aptprg.replace(/\s/g, "") == "prg1"){
					nullprint("user@nulldev:~ $ apt-get --quiet " + aptprg.replace(/\s/g, "") + "<br><br>&gt; Getting '" + aptprg.replace(/\s/g, "") + "'...<br>");
					nullprint("&gt; Done!<br><br>");
				}
				else if (aptprg.replace(/\s/g, "") == "prg2"){
					nullprint("user@nulldev:~ $ apt-get --quiet " + aptprg.replace(/\s/g, "") + "<br><br>&gt; Getting '" + aptprg.replace(/\s/g, "") + "'...<br>");
					nullprint("&gt; Done!<br><br>");
				}
				else if (aptprg.replace(/\s/g, "") == "prg3"){
					nullprint("user@nulldev:~ $ apt-get --quiet " + aptprg.replace(/\s/g, "") + "<br><br>&gt; Getting '" + aptprg.replace(/\s/g, "") + "'...<br>");
					nullprint("&gt; Done!<br><br>");
				}
				else nullprint("user@nulldev:~ $ apt-get --quiet " + aptprg.replace(/\s/g, "") + "<br><br>&gt; Error: Package '" + aptprg.replace(/\s/g, "") + "' not found.<br><br>");
			}
		}
		else if (input.replace(/\s/g, "").indexOf('open') >= 0){
			if (input.replace(/\s/g, "")  == "open" || input  == "open help") nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; Usage: open [url] (With or without \"http://\")<br><br>");
			else {
				link = input.replace('open', '').replace(/\s/g, "");
				nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; Opening " + link + "...<br><br>");
				if (input.replace(/\s/g, "").indexOf('http://') >= 0) window.location = link;
				else window.location = "http://" + link;
			}
		}
		else if (input.replace(/\s/g, "")  == "ls") if(dir == "/") nullprint("user@nulldev:~ $ " + input + " -a -i --no-group<br><br>&gt; ../<br>&gt; /apps/<br>&gt; /programs/<br>&gt; /bukkit/<br>&gt; /conhost/<br><br>");
		else if (input.replace(/\s/g, "")  == "github"){
			nullprint(
				"user@nulldev:~ $ " + input + "<br><br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMM.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.MMM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__________<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;|&nbsp;Null&nbsp;Dev&nbsp;|<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMMMMMMMMMMMMMMMMM&nbsp;&nbsp;&nbsp;|_&nbsp;&nbsp;&nbsp;______|<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM::-&nbsp;-:::::::-&nbsp;-::MMMM&nbsp;&nbsp;&nbsp;&nbsp;|/<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM~:~&nbsp;00~:::::~&nbsp;00~:~MM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;..&nbsp;MMMMM::.00:::+:::.00::MMMMM&nbsp;..<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.MM:::::&nbsp;._.&nbsp;:::::MM.<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMM;:::::;MMMM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-MM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;M+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMMMM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMMMMMM&nbsp;MM&nbsp;&nbsp;MM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;MM&nbsp;MM&nbsp;MM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM&nbsp;MM&nbsp;MM&nbsp;MM<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.~~MM~MM~MM~MM~~.<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~~~MM:~MM~~~MM~:MM~~~~<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~~~~~==~==~~~==~==~~~~~~<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~~~~~==~==~==~==~~~~~~<br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:~==~==~==~==~~<br><br>" +
				"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Klick <a href=\"http://github.com/NLDev\" target=\"_blank\"><font color=\"#99ff93\"><u>here</u></font></a> for my <font color=\"#ef8686\">GitHub</font>!<br><br>"
			);
		}
		if (input.replace(/\s/g, "").indexOf('echo') >= 0){
			echo = input.replace('echo', '').replace(/\s/g, "");
			nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; " + echo + "<br><br>");
		}
		else if (input.replace(/\s/g, "").indexOf('color') >= 0){
			if (input.replace(/\s/g, "")  == "color" || input  == "color help") nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; Usage: color [color code] <br>&gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color reset : resets the color.<br><br>&gt; Only HTML color codes without '#'. Default = FFFFFF \[white\].<br>&gt; Example: color 00FF00<br><br>");
			else if (input  == "color reset"){
				nullprint("user@nulldev:~ $ " + input + "<br><br>");
				document.getElementById("nullapend").style.color = "#FFFFFF"
				document.getElementById("nullin").value = "";
			}
			else {
				ccode = input.replace('color', '').replace(/\s/g, "");
				nullprint("user@nulldev:~ $ " + input + "<br>user@nulldev:~ $ export PS1=\"\\e\[" + ccode + "m[\\u@\\h \\W]\\$ \\e\[m\"<br><br>");
				document.getElementById("nullapend").style.color = "#" + ccode;
				document.getElementById("nullin").value = "";
			}
		}
		else if (input.replace(/\s/g, "")  == "cls" || input.replace(/\s/g, "")  == "clear"){
			document.getElementById('nullapend').innerHTML = "<br>&gt; ### CONSOLE CLEARED ###<br><br>"
			document.getElementById("nullin").value = ""; 
		}
		else if (input.replace(/\s/g, "")  == "delcmd"){
			nullprint("user@nulldev:~ $ delcmd<br><br>&gt; ### COMMAND HISTORY CLEARED ###<br><br>");
			nullhistory = [];
		}
		else if (input.replace(/\s/g, "")  == "lsprog"){
			nullprint(
				"user@nulldev:~ $ lsprog -a -i --no-group <br><br>&gt; ### PACKAGES ###<br><br>" +
				"&gt; <u>" +
				"No | &nbsp;&nbsp;&nbsp;DATE&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&lt;OS&gt;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;TYPE&nbsp;&nbsp; | NAME |</u><br>" +
				"&gt; 01 | 10.10.2016 | &lt;ANDROID&gt; | .apk/.apk | prg1 |<br>" +
				"&gt; 02 | 10.10.2016 | &lt;WINDOWS&gt; | .zip/.exe | prg2 |<br>" +
				"&gt; 01 | 10.10.2016 | &lt;BUKKIT&gt;&nbsp; | .zip/.jar | prg3 |<br><br>"
			);
		}
		else if (input.replace(/\s/g, "")  == "about"){
			nullprint(
				"user@nulldev:~ $ about<br><br>" +
				"&gt; ### ABOUT <font color=\"#99ff93\">NullOS</font> ###<br><br>" +
				"&gt; NullOS was a simple JavaScript project for implemenmting a command<br>" +
				"&gt; prompt on a website. I wanted to learn JavaScript anyway and<br>" +
				"&gt; this was a great exercise. Click <a href=\"https://github.com/NLDev/CSS-Playground/tree/master/console\" target=\"_blank\"><font color=\"#99ff93\"><u>here</u></font></a> for the GitHub link of this script or<br>" +
				"&gt; type '<font color=\"#99ff93\">github</font>' for my GitHub account!<br><br>"
			);
		}
		else if (input.replace(/\s/g, "")  == "reload"){
			nullprint("user@nulldev:~ $ reload<br><br>&gt; ### RELOADING... ###<br><br>");
			location.reload();
		}
		else if (input.replace(/\s/g, "")  == "pwd") nullprint("user@nulldev:~ $ pwd<br><br>&gt; " + dir + "<br><br>");
		else if (input.replace(/\s/g, "")  == "quit" || input.replace(/\s/g, "")  == "exit"){
			nullprint("user@nulldev:~ $ quit<br><br>&gt; ### QUITTING... ###<br><br>");
			window.location = "https://github.com/NLDev";
		}
		else nullprint("user@nulldev:~ $ " + input + "<br><br>&gt; Command '" + input + "' not found. Please use '<font color=\"#99ff93\">help</font>' for a list of aviable commands.<br><br>");
	}
	else if(e.keyCode == 38){
		if(index < nullhistory.length){
			document.getElementById("nullin").value = nullhistory[index];
			this.selectionStart = this.selectionEnd = this.value.length;
			index++;
		}
		if(index == 0) return false;
		if(index == nullhistory.length) index--;
	}
	else if(e.keyCode == 40) {
		if (index > 0){
			index--;
			document.getElementById("nullin").value = nullhistory[index];
			this.selectionStart = this.selectionEnd = this.value.length;
		}
		else if(index == 0) document.getElementById("nullin").value = "";
	}
};


function nullend(){
	var div = document.getElementById("nullscroller");
	div.scrollTop = div.scrollHeight - div.clientHeight;
}

function nullprint (string) {
	document.getElementById('nullapend').innerHTML = document.getElementById('nullapend').innerHTML + string;
	document.getElementById("nullin").value = "";
	nullend();
}
