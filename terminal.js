/* Javascript to control the game's text terminal */

// Initialization.
var terminal= document.getElementById("terminal");
clearTerminal();

// Clear the terminal and present the caret.
function clearTerminal() {
    terminal.value= "";
    terminal.value += " > ";
}

/* When the user clicks a button in the terminal
   execute the corresponding function. */
$('#terminal').keypress( function(e) {
    var code= e.which;
    switch(code) {
        case 13:
            var command= onEnter();
            //Temporary code start..
            console.log(command);
            if (command === "clear") terminal.value= " > ";
            console.log("Scroll height is " + terminal.scrollHeight);
            //Temp code end.
            e.preventDefault();
            break;
        case 8:
            onBackspace(e);
            break;
        default:
            // do nothing.
    }
});

// Check that text to be removed is valid text for removal.
function onBackspace(e) {
    var text= terminal.value;
    var lastChars= text.substring(text.length-3, text.length);
    if (lastChars === " > ") {
        e.preventDefault();
    }
}

// Return the last command entered as a string and move to a newline.
function onEnter() {
    var text= terminal.value;
    var fromIndex= text.lastIndexOf("\n");
    var command= text.substring(fromIndex+4, text.length);
    terminal.value += "\n > ";
    terminal.scrollTop = terminal.scrollHeight;
    return command;
}
