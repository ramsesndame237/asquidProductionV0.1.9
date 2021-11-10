var element = $('.floating-chat');
var myStorage = localStorage;

if (!myStorage.getItem('chatID')) {
    myStorage.setItem('chatID', createUUID());
}

setTimeout(function() {
    element.addClass('enter');
}, 1000);

element.click(openElement);

function openElement() {
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    element.find('#sendMessage').click(sendNewMessage);
    messages.scrollTop(messages.prop("scrollHeight"));
}

function closeElement() {
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    element.find('#sendMessage').off('click', sendNewMessage);
    element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
    setTimeout(function() {
        element.find('.chat').removeClass('enter').show()
        element.click(openElement);
    }, 500);
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function sendNewMessage() {
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    var messagesContainer = $('.messages');

    messagesContainer.append([
        '<li class="self">',
        newMessage,
        '</li>'
    ].join(''));

    // clean out old message
    userInput.html('');
    // focus on input
    userInput.focus();

    messagesContainer.finish().animate({
        scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
}

function onMetaAndEnter(event) {
    if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
        sendNewMessage();
    }
}

var canvasEl = document.getElementById('c');
var canvas = new fabric.Canvas(canvasEl);

// Add text to canvas
var newText = new fabric.IText('Hello', {
  fontFamily: 'Arial'
});

canvas.add(newText);
var newText = new fabric.IText('Hello', {
  fontFamily: 'Arial'
});

canvas.add(newText);

// Text formatting actions
var underline = document.getElementById('btn-underline');
var bold = document.getElementById('btn-bold');
var italic = document.getElementById('btn-italic');

underline.addEventListener('click', function() {
  dtEditText('underline');
});

bold.addEventListener('click', function() {
  dtEditText('bold');
}); 

italic.addEventListener('click', function() {
  dtEditText('italic');
}); 

// Functions
function dtEditText(action) {
    var a = action;
    var o = canvas.getActiveObject();
    var t;

    // If object selected, what type?
    if (o) {
        t = o.get('type');
    }

    if (o && t === 'i-text') {
        switch(a) {
            case 'bold':				
                var isBold = dtGetStyle(o, 'fontWeight') === 'bold';
                dtSetStyle(o, 'fontWeight', isBold ? '' : 'bold');
            break;

            case 'italic':
                var isItalic = dtGetStyle(o, 'fontStyle') === 'italic';
                dtSetStyle(o, 'fontStyle', isItalic ? '' : 'italic');
            break;

            case 'underline':
                var isUnderline = dtGetStyle(o, 'textDecoration') === 'underline';
                dtSetStyle(o, 'textDecoration', isUnderline ? '' : 'underline');
            break;
            canvas.renderAll();
        }
    }
}

// Get the style
function dtGetStyle(object, styleName) {
    return object[styleName];
}

// Set the style
function dtSetStyle(object, styleName, value) {
    object[styleName] = value;
    object.set({dirty: true});
    canvas.renderAll();
}


var text= "Happy Birthday"



text1 = new fabric.IText("Text", {
        id: "companyText",
        fontSize: 38,
        selectable: true,
        left: 180,
        top: 11,
        fontWeight:900,
        text: "Company Name"
})
    canvas.add(text1)
    
    $("#curve").on('click', function () {
    var objIsActive = canvas.getActiveObject();
    var headingText = [];
        var startAngle = -158;
        var textLength = objIsActive.length;

var r = getTranslationDistance(objIsActive);
var j=-1;
var angleInterval = 116/textLength;
for(var iterator=(-textLength/2), i=textLength-1; iterator<textLength/2;iterator++,i--) {
  
    var rotation = 90-(startAngle+(i)*angleInterval) ;
   
    headingText.push(new fabric.IText(objIsActive[i], {
      
        angle : j*((startAngle)+(i*angleInterval)),
      shadow: 'rgba(0,0,0,0.5) 5px 5px 5px',
     fontSize:28,
        left: (r)*Math.cos((Math.PI/180)*rotation),
        top: (r)*Math.sin((Math.PI/180)*rotation)
       
    }));
      
}

var group2 = new fabric.Group(headingText, { left: 0, top: canvas.height/2 , fontFamily: 'Arial',  strokeWidth: 1,
        
        strokeStyle:"#fff"});
canvas.add(group2);
console.log(group2)

function getTranslationDistance(objIsActive){
    var boundingRectangle = $("<div id='tempdiv' style='display:table-cell;font-family:Arial; font-size:28px;'>"+objIsActive+"</div>").appendTo("#main");
    
    var translationDistance = $(boundingRectangle).width();
    $(boundingRectangle).remove();
    return translationDistance;
}
    
    })
