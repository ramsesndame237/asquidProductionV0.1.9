/**
 * mise en place du customisateur de produits asquid 
 * déclaration de la zone de travail 
 */
var image2 = document.createElement('img');


var canvas = new fabric.Canvas('canvasUpload');
/**
 * this function is to initialise the line guide 
 */
// initCenteringGuidelines(canvas);
// initAligningGuidelines(canvas);

/**this function is to do the responsive off the <canvas id="canvasUpload"></canvas>
 */
var widthscrencan = (window.innerWidth > 0) ? window.innerWidth : screen.width; // capture width screen onload
var canvasScale = 1; //global  
var SCALE_FACTOR = 1.2;


window.onload = function() {
    if (widthscrencan <= 360) {
        zoomIn();
    } else if ((widthscrencan >= 361) && (widthscrencan <= 768)) {
        zoomIn768();
    } else if ((widthscrencan >= 769) && (widthscrencan <= 992)) {
        zoomIn992();
    } else if ((widthscrencan >= 993) && (widthscrencan <= 1200)) {
        zoomIn1200();
    } else if ((widthscrencan >= 1300) && (widthscrencan <= 1880)) {
        zoomIn1300();
    }else if(widthscrencan >= 1880){
        zoomIn1500()
    }
};

window.onload = function () {
    if (localStorage.getItem("editAgain") == 'true') {
    console.log("edited")
    json = localStorage.getItem("canvasSaveAs")
     canvas.loadFromJSON(json, function() {
        canvas.renderAll();
    });
}
}



function zoomIn() {
    var SCALE_FACTOR = .37;
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }


    canvas.renderAll();
}


function zoomIn768() {
    ZoomOut()
    var SCALE_FACTOR = .45;
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}


function zoomIn992() {
    var SCALE_FACTOR = .5;
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }


    canvas.renderAll();
}


function zoomIn1200() {
    var SCALE_FACTOR = .9;
     zoom -= SCALE_FACTOR;
    canvasScale = canvasScale * SCALE_FACTOR;
    document.querySelector(".containerSurfaceArea").style.transform = "scale(" + zoom + ")";

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }
    canvas.renderAll();
}


function zoomIn1300() {
    var SCALE_FACTOR = 0.8;
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}
function zoomIn1500(){
    var SCALE_FACTOR = 1.01;
    canvasScale = canvasScale * SCALE_FACTOR;

    canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
    canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;

        var tempScaleX = scaleX * SCALE_FACTOR;
        var tempScaleY = scaleY * SCALE_FACTOR;
        var tempLeft = left * SCALE_FACTOR;
        var tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();

}

/**
 * function pour zoomer et dézommer 
 */
var zoom = 1;
var zoomStep = 0.2;
function ZoomIn(){
    console.log($(".containerSurfaceArea"))
    document.querySelector(".containerSurfaceArea").style.transform = "scale(" + zoom + ")";

    zoom += zoomStep;

}
function ZoomOut(){
    if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.querySelector(".containerSurfaceArea").style.transform = "scale(" + zoom + ")";
      }

}


/**
 * customisation des bordure de l'objet selection 
 */
fabric.Canvas.prototype.customiseControls({
    tl: {
        action: 'rotate',
        cursor: 'progress',
    },
    tr: {
        action: 'scale',
    },
    bl: {
        action: 'remove',
        cursor: 'pointer',
    },
    br: {
        action: 'moveUp',
        cursor: 'pointer',
    },
    mb: {
        action: 'moveDown',
        cursor: 'pointer',
    },
    mr: {
        action: function(e, target) {
            target.set({
                left: 200,
            });
            canvas.renderAll();
        },
        cursor: 'pointer',
    },
    mt: {
        action: {
            'rotateByDegrees': 30,
        },
        cursor: 'pointer',
    },
    // only is hasRotatingPoint is not set to false
    mtr: {
        action: 'rotate',
        cursor: 'cow.png',
    },
});

// basic settings
fabric.Object.prototype.customiseCornerIcons({
    settings: {
        borderColor: '#33ccff',
        cornerSize: 25,
        cornerShape: 'circle',
        strokeWidth:5,
        cornerPadding: 5,
        cornerBackgroundColor: '#919da1',
    },
    tl: {
        icon: '../../../dist/assets/images/Customisateur/icons/rotate.svg',
    },
    tr: {
        icon: '../../../dist/assets/images/Customisateur/icons/resize.svg',
    },
    // ml: {
    //     icon: '//maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png',
    // },
    bl: {
        icon: '../../../dist/assets/images/Customisateur/icons/remove.svg',
        settings: {
            cornerSize: 25,
        }
    },
    mr: {
        icon: '../../../dist/assets/images/Customisateur/icons/diagonal-resize.svg',
    },
    // only is hasRotatingPoint is not set to false
    mtr: {
        icon: '../../../dist/assets/images/Customisateur/icons/rotate.svg',
    },
}, function() {
    canvas.renderAll();
});
fabric.Object.prototype.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
})


/**
 * cette fonction permet de faire rougir la zone lorsqu'elle est déborder 
 */

canvas.on({
    'object:moving': boundingBox,
    'object:scaling': boundingBox,
    'object:rotating': boundingBox,
});

function boundingBox(bbox) {
    // detecting sides of the canvas
    console.log(bbox)
    if (bbox.target.width + bbox.target.left > canvas.width ||
        bbox.target.height + bbox.target.top > canvas.height ||
        bbox.target.top < 0 ||
        bbox.target.left < 0) {
        //$('#demo').css('box-shadow', '0 0 20px red');
        var cd = document.getElementById('canvasUpload');
        var cdStyle = cd.style;
        cdStyle.boxShadow = '0 0 20px red';
    } else {
        //$('#demo').css('box-shadow'. '0 0 20px #a8a8a8');
        var cd = document.getElementById('canvasUpload');
        var cdStyle = cd.style;
        cdStyle.boxShadow = '0 0 0px #a8a8a8';
    }
}


/**
 * auto import default text 
 */

var myFunc = function() {
    text1 = new fabric.IText("Text", {
        id: "companyText",
        fontSize: 38,
        selectable: true,
        left: 180,
        top: 11,
        fontWeight:900,
        text: "Company Name"
    })
    text1.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    });
    canvas.add(text1)
    text1.bringToFront();
    canvas.setActiveObject(text1);
    document.querySelector('#companyText').addEventListener('keyup', function() {
        text1.text = document.getElementById('companyText').value;
        canvas.renderAll();
    });
    text2 = new fabric.IText("Text", {
        id: "yourbuisness",
        fontSize: 20,
        fontWeight:100,
        selectable: true,
        left: 274,
        top: 71,
        text: "Your business"
    })
    text2.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    });
    canvas.add(text2)
    text2.bringToFront();
    document.querySelector("#yourbuisness").addEventListener('keyup', function() {
        text2.text = document.querySelector("#yourbuisness").value
        canvas.renderAll()
        canvas.setActiveObject(text2);

    })
    text3 = new fabric.IText("Text", {
        id: "activity",
        fontSize: 20,
        fontWeight: 'lighter',
        selectable: true,
        left: 143,
        top: 109,
        text: "• Activity n°1  •  Activity n°2   • Activity n°3"
    })
    text3.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    });
    canvas.add(text3)
    text3.bringToFront();
    document.querySelector("#activity").addEventListener('keyup', function() {
        text3.text = document.querySelector("#activity").value
        canvas.renderAll()
        canvas.setActiveObject(text3);

    })
    text4 = new fabric.IText("Text", {
        id: "informationAdd",
        fontSize: 20,
        fontWeight:'lighter',
        selectable: true,
        left: 234,
        top: 146,
        text: "Additional information"
    })
    text4.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    });

    canvas.add(text4)
    text4.bringToFront();
    document.querySelector("#informationAdd").addEventListener('keyup', function() {
        text4.text = document.querySelector("#informationAdd").value
        canvas.renderAll()
        canvas.setActiveObject(text4);

    })
    text5 = new fabric.IText("Text", {
        id: "adresseInformation",
        fontSize: 20,
        selectable: true,
        fontWeight: 900,
        color:'#002633',
        left: 136,
        top: 180,
        text: "04 00 000 000 - example@adsquid.com.au"
    })
    text5.setControlsVisibility({
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        mtr: false
    });
    canvas.add(text5)
    text5.bringToFront();
    document.querySelector("#adresseInformation").addEventListener('keyup', function() {
        text5.text = document.querySelector("#adresseInformation").value
        canvas.renderAll()
        canvas.setActiveObject(text5);
        console.log("modification")

    })
    document.querySelector("#textCompany").addEventListener('click', function () {
        console.log("k")
    })
}();

var objIsActive = canvas.getActiveObject();
objIsActive.setControlsVisibility({
    br: false,
    ml: false,
    mt: false,
    mr: false,
    mb: false,
    mtr: false
});

objIsActive.customiseCornerIcons({
    settings: {
        borderColor: '#33ccff',
        cornerSize: 25,
        cornerShape: 'circle',
        cornerPadding: 10,
        cornerBackgroundColor: '#919da1',
    },
    tl: {
        icon: '../../../dist/assets/images/Customisateur/icons/rotate.svg',
    },
    tr: {
        icon: '../../../dist/assets/images/Customisateur/icons/resize.svg',
    },
    bl: {
        icon: '../../../dist/assets/images/Customisateur/icons/remove.svg',
        settings: {
            cornerSize: 25,
        }
    },
}, function() {
    canvas.renderAll();
});

//this function is to duplicate element selection 


$('#duplicate-item').on('click', function(event) {
    event.preventDefault();

    if (canvas.getActiveObject()) {
        var actObj = canvas.getActiveObject();
        console.log('active object' + actObj);
        var clone = fabric.util.object.clone(canvas.getActiveObject());
        clone.set({ left: actObj.left + Math.random() * 20, top: actObj.top + Math.random() * 20 });
        clone.setCoords();
        canvas.add(clone);
        canvas.renderAll();
    }
});



/**
 * function to add text in the input 
 * 
 */
   var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".TextContainer"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var inputs
    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++;
            let id = x
         //text box increment
            $(wrapper).append('<div class="textInputToCanvas d-lg-flex d-md-flex d-sm-flex"><div><input  data-id="'+x+'" class="addInput"  type="text" name="mytext[]" id="data_item_'+ id +'"/> <div class="imageTextTocanvas remove_field"><img src="dist/assets/images/Customisateur/Trash.png" alt=""></div></div></div>'); //add input box
            
        }
        inputs = $(".addInput")
           console.log(inputs)
               
                inputs.keyup(function (event) {
                    console.log(event)
                    console.log($(this).data('id'));
                     id = $(this).data('id');
                    newtext = $(this).val();
                    input = $(this);

                        objs = canvas.getObjects();
                        objs.forEach(function(obj) {
                            if (obj && obj.text == val) {
                            obj.setText(newtext);
                            canvas.renderAll();
                            }
                        });
                })
        var addToDeText = "inputs"+x
          addToDeText = new fabric.IText('Double Tap and Type', {
                left: 100,
                 top: 100,
                id: addToDeText,    
                fontSize: 20,
                fontWeight:100,
            });

            addToDeText.setControlsVisibility({
                br: false,
                ml: false,
                mt: false,
                mr: false,
                mb: false,
                mtr: false
            });
            canvas.add(addToDeText);
            addToDeText.bringToFront();
            canvas.setActiveObject(addToDeText);
            $('#fill, #font').trigger('change');
    });


    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
        e.preventDefault();
        $(this).parent('div').remove();
        var removeInputs ="inputs" + x
        canvas.remove(removeInputs);
        console.log(removeInputs)
        x--;
    });
/**
 * function pour changer la couleur de fond de l'image choisi
 */


$("#picker1").colorPick({
    'initialColor': '#ecf0f1',
    'palette': ["#002633", "#33ccff", "#919DA1", "#6B4506", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#fff"],
    'onColorSelected': function() {
        let backgContain = $('.canvasAree img').attr('src')
        console.log(backgContain)
        console.log("The user has selected the color: " + this.color)
        this.element.css({
            'backgroundColor': this.color,
            'color': this.color
        });
        if (backgContain == "") {
            let back = document.querySelector(".canvasAree")
            back.style.background = this.color
            canvas.setBackgroundImage(null);
            canvas.backgroundColor = this.color
            canvas.renderAll()
            console.log("vide")
        } else {
            console.log("okay")
            canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
            var mySVGsToInject = document.querySelector('.inject-me');

            if (mySVGsToInject !== null) {
                console.log(mySVGsToInject)

                // Options
                var injectorOptions = {
                    evalScripts: 'once',
                    pngFallback: 'assets/png',
                    each: function(svg) {
                        // Callback after each SVG is injected
                        console.log('SVG injected: ' + svg.getAttribute('id'));
                        console.log(svg)
                        svg.style.fill = this.color
                    }
                };

                // Trigger the injection
                SVGInjector(mySVGsToInject, injectorOptions, function(totalSVGsInjected) {
                    // Callback after all SVGs are injected
                    console.log('this is the ijection option  ' + injectorOptions + ' SVG(s)!');
                    console.log(totalSVGsInjected)
                    mySVGsToInject.style.fill = this.color
                });
                setTimeout(() => {
                    mySVGsToInject = document.querySelector("svg")
                    console.log(mySVGsToInject)
                    console.log("oooaojqdfijoqdsfioj")
                    mySVGsToInject.style.fill = this.color
                    console.log(mySVGsToInject)
                    var svg = mySVGsToInject;
                    svgData = new XMLSerializer().serializeToString(svg);
                    base64Image = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
                    let data = base64Image
                    console.log(data)
                    fabric.Image.fromURL(data, function(img) {
                        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                        scaleX: canvas.width / img.width,
                        scaleY: canvas.height / img.height
                        });
                    });

                }, 500);
            } else {
                mySVGsToInject = document.querySelector("svg")
                console.log(mySVGsToInject)
                console.log("oooaojqdfijoqdsfioj")
                mySVGsToInject.style.fill = this.color
                 var svg = mySVGsToInject;
                    svgData = new XMLSerializer().serializeToString(svg);
                    base64Image = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
                    let data = base64Image
                    console.log(data)
                    fabric.Image.fromURL(data, function(img) {
                        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                        scaleX: canvas.width / img.width,
                        scaleY: canvas.height / img.height
                        });
                    });

            }

        }
        canvas.renderAll();
    }
});

/**
 * this function is to change the color of the text 
 */

$("#picker2").colorPick({
    'initialColor': '#002633',
    'palette': ["#002633", "#33ccff", "#919DA1", "#6B4506", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
    'onColorSelected': function() {
        var obj = canvas.getActiveObject();
        console.log("The user has selected the color: " + this.color)
        this.element.css({
            'backgroundColor': this.color,
            'color': this.color
        });
        if (obj) {
            // old api
            // obj.setFill($(this).val());
            obj.set("fill", this.color);
            console.log("nous y sommes :" +
                obj)
        }
        canvas.renderAll();
    }
});

//cette fonction c'est pour changer la taille du texte selectionner
function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
    var obj = canvas.getActiveObject()
    if (obj) {
        obj.set("fontSize", val);
        console.log(obj)
    }
    canvas.renderAll();

}
//cette fonction c'est pour augmenter l'espacement entre les lettre du mot selectionner

function SpaceLineChange(val) {
    document.getElementById('SpaceLine').innerHTML = val;
    var obj = canvas.getActiveObject()
    if (obj) {
        obj.set("charSpacing", val)
    }
    canvas.renderAll();

}

/**
 * this function is to upload job image 
 */
function uploadMetierImage() {
    let imageMetier = $(".imageToSelect")
    console.log(imageMetier)
    for (let i = 0; i < imageMetier.length; i++) {

        imageMetier[i].addEventListener("click", function() {
            if (imageMetier[i].classList.contains("activeToolsItem")) {
                imageMetier[i].classList.remove("activeToolsItem")
            } else {
                imageMetier[i].classList.add("activeToolsItem")
                console.log($(this).find('img').attr('src'))
                let urlImage = $(this).find('img').attr('src')
                fabric.Image.fromURL(urlImage, function(img) {
                    var oImg = img.set({
                        left: canvas.getWidth() / 2,
                        top: canvas.getHeight() / 2,
                        scaleX: 0.09,
                        scaleY: 0.09,
                        originX: 'center',
                        originY: 'center',
                    });
                    oImg.setControlsVisibility({
                        br: false,
                        ml: false,
                        mt: false,
                        mr: false,
                        mb: false,
                        mtr: false
                    });
                    canvas.add(oImg).renderAll();
                    canvas.setActiveObject(oImg);
                });

            }
        })

    }
}



/**
 * this function is to change the font family of the text is active 
 */

let fontSelect = $(".fontSelect").on('DOMSubtreeModified', function() {
    let obj = canvas.getActiveObject
    if (obj) {
        console.log(obj)
        canvas.getActiveObject().set("fontFamily", $(this).html());
        canvas.renderAll();
    }
})

/**
 * this function is to put the text in bold
 */

let boldButon = document.querySelector("#WeightModify")
let italiqueButton = document.querySelector("#ObliqueText")
let souligneBouton = document.querySelector("#soulignerText")
console.log(boldButon)
boldButon.addEventListener('click', function() {
    dtEditText('bold'); 
})
    /**
     * this function is to put a text in oblique
     */

italiqueButton.addEventListener("click", function () {
     dtEditText('italic');
})

/**
 * this function is to underline a text 
 */
souligneBouton.addEventListener("click", function() {
   dtEditText('underline');
})

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

/**
 * this function is to align text 
 */
var align = ["left", "center", "right"];

function changeAlign(){
    var val = align[Math.floor(Math.random() * align.length)];
    let obj = canvas.getActiveObject()
    obj.set('textAlign',val);
    canvas.renderAll();
}



/**
 * this function is for upload logo in sidebare 
 */

document.getElementById('logoImport').addEventListener("change", function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function(img) {
            var oImg = img.set({
                left: canvas.getWidth() / 2,
                top: canvas.getHeight() / 2,
                scaleX: 0.2,
                scaleY: 0.2,
                originX: 'center',
                originY: 'center',
            });
            oImg.setControlsVisibility({
                br: false,
                ml: false,
                mt: false,
                mr: false,
                mb: false,
                mtr: false
            });
            canvas.add(oImg).renderAll();
            canvas.setActiveObject(oImg);
        });
    };
    reader.readAsDataURL(file);

    function sliderChange(val) {
        document.getElementById('output').innerHTML = val;
    }
});
$('.imageBackgroundLayout').on('load', function () {
    let data = $('.imageBackgroundLayout').attr('src')
    selectBackground = localStorage.getItem("selectBackground")
    console.log(selectBackground)
    if (data != "") {
        canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
        fabric.Image.fromURL(data, function(img) {
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height
            });
        });
    } 
});
$('#background0').on('click', function () {
    canvas.setBackgroundImage(null);
    canvas.setBackgroundColor(null, canvas.renderAll.bind(canvas));
        canvas.renderAll()
})

/**
 * this function is to delele selecte obeject 
 */

let inputText = document.querySelectorAll(".textInputToCanvas")

function deleteTextField(n){

    if (n == 0) {
        canvas.remove(text1);
        console.log(inputText[n])
        inputText[n].style.setProperty("display", "none", "important");
    } else if (n == 1) {
        canvas.remove(text2)
        inputText[n].style.setProperty("display", "none", "important");
    } else if (n == 2) {
        canvas.remove(text3)
        inputText[n].style.setProperty("display", "none", "important");
    } else if (n == 3) {
        canvas.remove(text4)
        inputText[n].style.setProperty("display", "none", "important");
    } else if (n == 4) {
        canvas.remove(text5)
        inputText[n].style.setProperty("display", "none", "important");
    }
    canvas.renderAll()
}

/**
 * this part is for setting configuration
 */
 var gridGroup;
 var grid = 50;
 $('#SafetyArea').on('click',function(){
     if($('#SafetyArea').is(':checked')){
         $(".canvasAree").addClass("SafeLineRemove")
         $("#canvasUpload").addClass("canvasBorderChange")
     }else{
        $(".canvasAree").removeClass("SafeLineRemove")
        $("#canvasUpload").removeClass("canvasBorderChange")
     }
 })

 $("#Rules").on('click',function(){
     if($("#Rules").is(':checked')){
         $(".rulesContainer").addClass("hide")
     }else{
        $(".rulesContainer").removeClass("hide")
     }
 })

 $("#GridLines").on('click',function(){
    if($("#GridLines").is(':checked')){
        for (var i = 0; i < (canvas.width / grid); i++) {
            canvas.add(new fabric.Line([i * grid, 0, i * grid, canvas.width], {
               stroke: '#ccc',
               selectable: false
            }));
            canvas.add(new fabric.Line([0, i * grid, canvas.width, i * grid], {
               stroke: '#ccc',
               selectable: false
            }))
         }
         canvas.on('object:moving', function(options) { 
            options.target.set({
              left: Math.round(options.target.left / grid) * grid,
              top: Math.round(options.target.top / grid) * grid
            });
          });
    }else{
        canvas.remove(grid);
    }
 })

/**
 * this function is to add QRcode on the canvas 
 */

 function mainQrCode() {
    const generateBtn = document.querySelector(".buttonQRcodeSend");
    const dataBox = document.getElementById("linkQrcode");
    const qrcode = document.getElementById("qrcode");
    const qrdiv = document.getElementById("qrdiv");

    const errorClassName = "error";
    const shakeClassName = "shake";
    const dataBoxClassName = "dataBox";
    const toHideClassName = "hide";
    const qrdivClassName = "qrdiv";

    var QR_CODE = new QRCode("qrcode", {
        width: 260,
        height: 260,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

    generateBtn.onclick = function(e) {
        const data = dataBox.value;
        if (data) {
            generateQRCode(data);
        } else {
            markDataBoxError();
        }
    };

    dataBox.onfocus = function(e) {
        const classList = dataBox.classList;

        if (classList.contains(errorClassName)) {
            // Removing error class
            dataBox.className = dataBoxClassName;
        }
    };


    function markDataBoxError() {
        const prevClassName = dataBox.className;
        dataBox.className =
            prevClassName + " " + errorClassName + " " + shakeClassName;
        vibrate();
        setTimeout(() => {
            // Reset class
            dataBox.className = prevClassName + " " + errorClassName;
        }, 500);
    }

    function generateQRCode(data) {
        QR_CODE.clear();
        QR_CODE.makeCode(data);
        // Show QRCode div
        qrdiv.className = qrdivClassName;
        setTimeout(() => {
            let data =qrcode.getElementsByTagName('img')[0].src
            fabric.Image.fromURL(data, function(img) {
                var oImg = img.set({
                    left: canvas.getWidth() / 2,
                    top: canvas.getHeight() / 2,
                    scaleX: 0.2,
                    scaleY: 0.2,
                    originX: 'center',
                    originY: 'center',
                });
                oImg.setControlsVisibility({
                    br: false,
                    ml: false,
                    mt: false,
                    mr: false,
                    mb: false,
                    mtr: false
                });
                canvas.add(oImg).renderAll();
                canvas.setActiveObject(oImg);

             });

        }, 500);
    }

    function vibrate() {
        if (Boolean(window.navigator.vibrate)) {
            window.navigator.vibrate([100, 100, 100]);
        }
    }
}
/**
 * this function is for selected the background 
 */
 window.addEventListener("storage", function () {
    document.querySelector('.my-key').textContent = e.key;
    document.querySelector('.my-old').textContent = e.oldValue;
    document.querySelector('.my-new').textContent = e.newValue;
    document.querySelector('.my-url').textContent = e.url;
    document.querySelector('.my-storage').textContent = e.storageArea;
}, false);

/**
 * save canvas 
 */
 var state = [];
 var mods = 0;
 canvas.on(
    'object:modified', function () {
    updateModifications(true);
},
    'object:added', function () {
        updateModifications(true);
        canvas.loadFromJSON(json, function() {
            canvas.renderAll();
        });
        
});

function updateModifications(savehistory) {
    if (savehistory === true) {
        myjson = JSON.stringify(canvas);
        state.push(myjson);
    }
    canvas.loadFromJSON(myjson, function() {
        canvas.renderAll();
    });
}

function saveAs(){
    var json = canvas.toJSON();
    canvas.loadFromJSON(json, function() {
        canvas.renderAll();
         dataURL = canvas.toDataURL();
        console.log(dataURL)
        localStorage.setItem("imageToPreview",JSON.stringify(dataURL))
    });
    localStorage.setItem('canvasSaveAs',JSON.stringify(json))
}

undo = function undo() {
    console.log("undo")
    if (mods < state.length) {
        canvas.clear().renderAll();
        canvas.loadFromJSON(state[state.length - 1 - mods - 1]);
        canvas.renderAll();
        //console.log("geladen " + (state.length-1-mods-1));
        //console.log("state " + state.length);
        mods += 1;
        //console.log("mods " + mods);
    }
}

redo = function redo() {
    console.log("redo")
    if (mods > 0) {
        canvas.clear().renderAll();
        canvas.loadFromJSON(state[state.length - 1 - mods + 1]);
        canvas.renderAll();
        //console.log("geladen " + (state.length-1-mods+1));
        mods -= 1;
        //console.log("state " + state.length);
        //console.log("mods " + mods);
    }
}

/**
 * this function saveCanvasLayerContent(canvas) {
     
 }
 */

function saveToCanvas() {
     this.saveAs()
    console.log("nous pouvons bien save le produit")
    var dataURL
     
     /**
      * we have to transform the canvas to image to preview it on the preview page 
      */
       window.location = "../../../PreviewCanvas.html"

}


/**
 * this function is for resizing the canvas on screen 
 */
var bounds = [
    {min:0,max:500,func:ZoomOut},
    {min:501,max:850,func:ZoomOut},
    {min:851,func:ZoomIn}
];

var resizeFn = function(){
    var lastBoundry; // cache the last boundry used
    return function(){
        var width = window.innerWidth;
        var boundry, min, max;
        for(var i=0; i<bounds.length; i++){
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max 
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);            
            }
        }
    }
};
$(window).resize(resizeFn());
$(document).ready(function(){
    $(window).trigger('resize');
});


/**
 * this part is for the chat part 
 * 
 */

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

canvas.on('mouse:down', (options) => {
    console.log(options)
    if (options.target == null) {
        console.log("bonjour");
        let layoutHeader = document.querySelector(".LayoutCustomTools")
            layoutHeader.style.display = "flex";
            let textContainer = document.querySelector(".TextCustomTools")
            textContainer.style.display="none" 
        
    } else {
            if (options.target.type == 'i-text') {
            console.log('on canvas mousedown', options.target ? options.target.type : '');
            let layoutHeader = document.querySelector(".LayoutCustomTools")
            layoutHeader.style.display = "none";
            let textContainer = document.querySelector(".TextCustomTools")
            textContainer.style.display="flex"  
        } 
    }
   
});     



