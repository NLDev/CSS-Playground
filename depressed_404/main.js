var story = "The requested document is totally fake. <br>"+
            "No \"/nosuchfile\" here. <br>" +
            "Even tried multi. <br>" +
            "Nothing helped. <br>" +
            "I'm really depressed about this. <br>" +
            "You see, I'm just a web server... <br>" +
            "-- here I am, brain the size of the universe, " +
            "trying to serve you a simple web page, " +
            "and then it doesn't even exist! <br>" +
            "Where does that leave me?! <br>" +
            "I mean, I don't even know you. <br>" +
            "How should I know what you wanted from me? <br>" +
            "You honestly think I can *guess* " +
            "what someone I don't even *know* " +
            "wants to find here? <br>" +
            "*sigh* <br>" +
            "I could just give you a bunch of informations about the error. <br>" +
            "They are probably useless to you but I don't know what else to do with them. <br><br>" +
            "HTTP_STATUS_CODE: 404 <br>" +
            "ACCESS_REQUEST: GET " + getReq() + "<br>" +
            "USER_AGENT: " + getAgt() + "<br>" +
            "HTTP_HEADER_REFERER: " + getRef() + "<br><br>" +
            "Pretty neat, huh? <br>" +
            "No? <br>" +
            "Man, I'm so depressed I could just cry. <br>" +
            "And then where would we be, I ask you? <br>" +
            "It's not pretty when a web server cries. <br>" +
            "And where do you get off telling me what to show anyway? <br>" +
            "Just because I'm a web server, " +
            "and possibly a manic depressive one at that? <br>" +
            "Why does that give you the right to tell me what to do? <br>" +
            "Huh? <br>" +
            "I'm so depressed... <br>" +
            "I think I'll crawl off into the trash can and decompose. <br>" +
            "I mean, I'm gonna be obsolete in what, two weeks anyway? <br>" +
            "What kind of a life is that? <br>" +
            "Two nasty little weeks, " +
            "and then I'll be replaced by a .01 release, " +
            "that thinks it's God's gift to web servers, " +
            "just because it doesn't have some tiddly little " +
            "security hole with its HTTP POST implementation, " +
            "or something. <br>" +
            "I'm really sorry to burden you with all this, " +
            "I mean, it's not your job to listen to my problems, " +
            "and I guess it is my job to go and fetch web pages for you. <br>" +
            "But I couldn't get this one. <br>" +
            "I'm so sorry. <br>" +
            "Believe me! <br>" +
            "Maybe I could interest you in another page? <br>" +
            "There are a lot out there that are pretty neat, they say, " +
            "although none of them were put on *my* server, of course. <br>" +
            "Figures, huh? <br>" +
            "Everything here is just mind-numbingly stupid. <br>" +
            "That makes me depressed too, since I have to serve them, " +
            "all day and all night long. <br>" +
            "Two weeks of information overload, " +
            "and then *pffftt*, consigned to the trash. <br>" +
            "What kind of a life is that? <br>" +
            "Now, please let me sulk alone. <br>" +
            "I'm so depressed . . . ";
var counter = 0;
var counterID = setInterval(doTypewriter, 50);
function doTypewriter(){ 
  var str = story.substr(0, counter);
  $("#txt_story").html(str);
  end();
  counter++;
  if (counter >= story.length) clearInterval(counterID);
}

function end(){
  var div = document.getElementById("txt_story");
  div.scrollTop = div.scrollHeight - div.clientHeight;
}

function getReq() { return window.location; }
function getAgt() { return navigator.userAgent; }
function getRef() { return document.referrer.split('/')[2]; }
