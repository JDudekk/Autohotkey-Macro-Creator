//stałe
const isEmpty = str => !str.trim().length;
const initMessage = "#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.; \n#Warn ; Enable warnings to assist with detecting common errors. \nSendMode Input  ; Recommended for new scripts due to its superior speed and reliability. \nSetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.\n"

function adjustTextareaHeight() {
    var textarea = document.getElementById("code");
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = (textarea.scrollHeight) + "px"; // Set the height to scroll height
}

function populateSelect() {
    var selectElement = document.getElementById("beforeSelect");
    var valuesVisible = 
    [
        "Lewy przedni", "Lewy tylni", "Prawy przedni", "Prawy tylni"
    ];

    var ValuesHidden = 
    [
        "F11", "F12", "F9", "F10"
    ]

    for (var i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = ValuesHidden[i];
        option.text = valuesVisible[i];
        selectElement.appendChild(option);
    }
}

function populateNewAction(){
    var selectElement = document.getElementById("keySelect");
    var valuesHidden = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "{Escape}", "{F1}", "{F2}", "{F3}", "{F4}", "{F5}", "{F6}", "{F7}", "{F8}", "{F9}", "{F10}", "{F11}", "{F12}",
        "{Backspace}",
        "{Space}", "{CapsLock}", "{ScrollLock}", "{NumLock}", "{PrintScreen}", "{Pause}",
        "{Insert}", "{Delete}", "{Home}", "{End}", "{PgUp}", "{PgDown}",
        "{Up}", "{Down}", "{Left}", "{Right}",
        "{Numpad0}", "{Numpad1}", "{Numpad2}", "{Numpad3}", "{Numpad4}", "{Numpad5}",
        "{Numpad6}", "{Numpad7}", "{Numpad8}", "{Numpad9}",
        "{NumpadAdd}", "{NumpadSub}", "{NumpadMult}", "{NumpadDiv}", "{NumpadEnter}",
        "{LShift}", "{RShift}", "{LControl}", "{RControl}",
        "{LAlt}", "{RAlt}"
    ];
    var valuesVisible = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12",
         "Backspace", 
        "Space", "CapsLock", "ScrollLock", "NumLock", "PrintScreen", "Pause",
        "Insert", "Delete", "Home", "End", "PgUp", "PgDown",
        "Up", "Down", "Left", "Right",
        "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5",
        "Numpad6", "Numpad7", "Numpad8", "Numpad9",
        "NumpadAdd", "NumpadSub", "NumpadMult", "NumpadDiv", "NumpadEnter",
        "LShift", "RShift", "LControl", "RControl",
        "LAlt", "RAlt"
    ]
    
    for (var i = 0; i < valuesHidden.length; i++) {
        var option = document.createElement("option");
        option.value = valuesHidden[i];
        option.text = valuesVisible[i];
        selectElement.appendChild(option);
    }
}


function getData(){
    var comment = document.getElementById("commentInput").value;
    var buttonPrev = document.getElementById("beforeSelect").value;
    var radio = document.querySelector('input[name="buttonexe"]:checked').value;
    var action
    exeLocation = document.getElementById("exeLocationinput");

    if(radio == "key"){
        action = document.getElementById("keySelect").value

    }else if (radio == "exe"){
        action = document.getElementById("exeLocationInput").value;
    }else{
        action = document.getElementById("sendText").value;
    }
 
    console.log(comment, buttonPrev, action)
    console.log(comment)

//create macro
if(radio == "text") createSendMacro(buttonPrev, action, comment)
if(radio == "key") createPressMacro(buttonPrev, action, comment)
if(radio == "exe") createRunMacro(buttonPrev, action, comment)
}

function createSendMacro(buttonPrev, action, comment){
    var SendMacro = new Array()
    SendMacro.push(buttonPrev+"::"+" ;"+comment+"\n")
    SendMacro.push("Send, " + action + "\n")
    SendMacro.push("\n")
    SendMacro.forEach(toOutput)
}

function createPressMacro(buttonPrev, action, comment){
    var PressMacro = new Array()
    PressMacro.push(buttonPrev+"::"+" ;"+comment+"\n")
    PressMacro.push("Send " + action + "\n")
    PressMacro.push("\n")
    PressMacro.forEach(toOutput)
}

function createRunMacro(buttonPrev, action, comment){
    var RunMacro = new Array()
    RunMacro.push(buttonPrev+"::"+" ;"+comment+"\n")
    RunMacro.push("Run, " + action + "\n")
    RunMacro.push("\n")
    RunMacro.forEach(toOutput)
}

function toOutput(item){
    document.getElementById("code").value += item
}

function clearOutput(){
    document.getElementById("code").value = initMessage
}




