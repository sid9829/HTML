/*
Solution of assignment 4:
Expected output:
Hello sid
Good Bye sachin
Good Bye sankoo
Good Bye sam
Hello yogi
Hello prits
Hello sanju
Hello vishal
Hello vijay
Good Bye manoj
*/

(function() {
    var names = ["sid", "sachin", "sankoo", "sam", "yogi", "prits", "sanju", "vishl", "vijay", "manoj"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();