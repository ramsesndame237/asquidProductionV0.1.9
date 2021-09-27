       
        var canvas = new fabric.Canvas('canvasUpload');
        var SVG = SVG || {};
        
        //this function is to resize the canvas according on screen size 
        var widthscrencan = (window.innerWidth > 0) ? window.innerWidth : screen.width; // capture width screen onload
var canvasScale = 1; //global  
var SCALE_FACTOR = 1.2;


window.onload = function () {
    
    if (widthscrencan <=360){ 
       zoomIn();
     }
    else if ((widthscrencan >=361) && (widthscrencan <= 768)){ 
          zoomIn768();
    }
    else if ((widthscrencan >=769) && (widthscrencan <= 992)){ 
          zoomIn992();
    }
    else if ((widthscrencan >=993) && (widthscrencan <= 1200)){ 
          zoomIn1200();
    }
    else  if (widthscrencan >=1700){ 
         zoomIn1400();
    }
    else if(widthscrencan >= 1300){
        zoomIn1300()
    }

};



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
    alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn'); 
  }
  
  
  function zoomIn768() {
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
        alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn768'); 

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
          alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn992'); 

        }
        
        
        function zoomIn1200() {
          var SCALE_FACTOR = .9;
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
          alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn1200'); 


        }
        
        
        function zoomIn1300() {
          var SCALE_FACTOR = .65;
          var SCALE_FACTORHEIGTH =1;
          canvasScale = canvasScale * SCALE_FACTOR;

          canvas.setHeight(canvas.getHeight() * SCALE_FACTORHEIGTH);
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
          alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn1300'); 

  
        }
              function zoomIn1400() {
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
          alert('Display Area Width : '+widthscrencan+'px Function Called zoomIn1300'); 

  
        }









         initCenteringGuidelines(canvas);
         initAligningGuidelines(canvas);
        var HideControls = {
            'tl':true,
            'tr':false,
            'bl':true,
            'br':true,
            'ml':true,
            'mt':true,
            'mr':true,
            'mb':true,
            'mtr':true
        };
        

        document.getElementById('file').addEventListener("change", function(e) {
                        var file = e.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function(f) {
                            var data = f.target.result;
                            fabric.Image.fromURL(data, function(img) {
                                var oImg = img.set({
                                    left: 50,
                                    top: 100,
                                    angle: 00
                                }).scale(0.3);
                                img.setControlsVisibility(HideControls);
                                canvas.add(oImg).renderAll();
                                canvas.setActiveObject(oImg);
                            });
                        };
                        reader.readAsDataURL(file);function sliderChange(val) {
                document.getElementById('output').innerHTML = val;
            }
        });
             document.getElementById('logoImport').addEventListener("change", function(e) {
                        var file = e.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function(f) {
                            var data = f.target.result;
                            fabric.Image.fromURL(data, function(img) {
                                var oImg = img.set({
                                    left: 50,
                                    top: 100,
                                    angle: 00
                                }).scale(0.3);
                                img.setControlsVisibility(HideControls);
                                canvas.add(oImg).renderAll();
                                canvas.setActiveObject(oImg);
                            });
                        };
                        reader.readAsDataURL(file);function sliderChange(val) {
                document.getElementById('output').innerHTML = val;
            }
        });

//add a custom corner to the cavas element 

            function addDeleteBtn(x, y){
                $(".deleteBtn").remove();
                var btnLeft = x-15;
                var btnTop = y-15;
                var deleteBtn = '<div class="deleteBtn" style="background:red;position:absolute;top:'+btnTop+'px;left:'+btnLeft+'px; border:solid 1px; overflow:hidden; z-index:100;cursor:pointer;width:35px;height:35px; border-radius:50%;" >   <img src="html.png" style="width:100%;height:100%;" /> </div>';
                $(".canvas-container").append(deleteBtn);
            }
            canvas.on('object:selected',function(e){
                    addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
            });
            canvas.on('mouse:down',function(e){
                if(!canvas.getActiveObject())
                {
                    $(".deleteBtn").remove();
                }
            });
            canvas.on('object:modified',function(e){
                addDeleteBtn(e.target.oCoords.tr.x, e.target.oCoords.tr.y);
            });
            canvas.on('object:scaling',function(e){
                $(".deleteBtn").remove();
            });
            canvas.on('object:moving',function(e){
                $(".deleteBtn").remove();
            });
            canvas.on('object:rotating',function(e){
                $(".deleteBtn").remove();
            });
            $(document).on('click',".deleteBtn",function(){
                if(canvas.getActiveObject())
                {
                    canvas.remove(canvas.getActiveObject());
                    $(".deleteBtn").remove();
                }
            });

            
        $('.visualContent img').on('click',function(event){
              event.stopPropagation();
            event.stopImmediatePropagation();
            var imagesBack = $(this).attr('src')
            console.log(imagesBack)
            fabric.loadSVGFromURL(imagesBack,function(objects,options) {

                    var loadedObjects = fabric.util.groupSVGElements(objects, options);

                    loadedObjects.set({
                        width: $("#canvasUpload").width(),
                        height: 450
                    });
                    SVG.testObject = loadedObjects;
                    canvas.sendToBack(loadedObjects)
                        
                    canvas.add(loadedObjects);
                    canvas.renderAll();
            });
            
        })








        function addText() {
            var oText = new fabric.IText('Double Tap and Type', {
                left: 100,
                top: 100,
            });



            canvas.add(oText);
            oText.bringToFront();
            canvas.setActiveObject(oText);
            $('#fill, #font').trigger('change');
        }

        var myFunc = function() {
            text1 = new fabric.IText("Text", {
                id: "companyText",
                fontSize: 70,
                selectable: true,
                left: 300,
                top: 30,
                text: "Company Name"
            })

            canvas.add(text1)
            text1.bringToFront();
            canvas.setActiveObject(text1);
            document.querySelector('#companyText').addEventListener('keyup', function() {
                text1.text = document.getElementById('companyText').value;
                canvas.renderAll();
            });
            text2 = new fabric.IText("Text", {
                id: "yourbuisness",
                fontSize: 40,
                selectable: true,
                left: 450,
                top: 150,
                text: "Your business"
            })
            canvas.add(text2)
            text2.bringToFront();
            document.querySelector("#yourbuisness").addEventListener('keyup', function() {
                text2.text = document.querySelector("#yourbuisness").value
                canvas.renderAll()
                canvas.setActiveObject(text2);

            })
            text3 = new fabric.IText("Text", {
                id: "activity",
                fontSize: 40,
                selectable: true,
                left: 230,
                top: 230,
                text: "• Activity n°1 • Activity n°2 • Activity n°3"
            })
            canvas.add(text3)
            text3.bringToFront();
            document.querySelector("#activity").addEventListener('keyup', function() {
                text3.text = document.querySelector("#activity").value
                canvas.renderAll()
                canvas.setActiveObject(text3);

            })
            text4 = new fabric.IText("Text", {
                id: "informationAdd",
                fontSize: 30,
                selectable: true,
                left: 430,
                top: 330,
                text: "Additional information"
            })

            canvas.add(text4)
            text4.bringToFront();
            document.querySelector("#informationAdd").addEventListener('keyup', function() {
                text4.text = document.querySelector("#informationAdd").value
                canvas.renderAll()
                canvas.setActiveObject(text4);

            })
            text5 = new fabric.IText("Text", {
                id: "adresseInformation",
                fontSize: 30,
                selectable: true,
                left: 280,
                top: 400,
                text: "04 00 000 000 - example@adsquid.com.au"
            })
            canvas.add(text5)
            text5.bringToFront();
            document.querySelector("#adresseInformation").addEventListener('keyup', function() {
                text5.text = document.querySelector("#adresseInformation").value
                canvas.renderAll()
                canvas.setActiveObject(text5);

            })

        }();
        $('#font').change(function() {
            var obj = canvas.getActiveObject();

            if (obj) {
                obj.setFontFamily($(this).val());
                obj.set("fontFamily", this.value);
            }

            canvas.renderAll();
        });

        //cette fonction c'est pour changer la taille du texte selectionner
        function sliderChange(val) {
            document.getElementById('output').innerHTML = val;
            var obj = canvas.getActiveObject()
            if(obj){
                obj.set("fontSize", val);
                console.log(obj)
            }
            canvas.renderAll();
            
       }
       //cette fonction c'est pour augmenter l'espacement entre les lettre du mot selectionner

       function SpaceLineChange(val){
           document.getElementById('SpaceLine').innerHTML = val;
           var obj = canvas.getActiveObject()
           if(obj){
               obj.set("charSpacing",val)
           }
           canvas.renderAll();

       }
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
        

        //this function is to duplicate element selection 

        $('#duplicate-item').on('click', function(event) {
            event.preventDefault();
            
            if(canvas.getActiveObject()) {
            var actObj = canvas.getActiveObject();  
                console.log('active object'+actObj);      
            var clone = fabric.util.object.clone(canvas.getActiveObject());
            clone.set({left: actObj.left+Math.random()*20,top: actObj.top+Math.random()*20});
                clone.setCoords();
                canvas.add(clone); 
                canvas.renderAll();
            }
        });

        // this function is to import svg image 


        //this function is to zoom and dézomme the arrea

        canvas.on('mouse:wheel', function(opt) {
            var delta = opt.e.deltaY;
            var zoom = canvas.getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
            });
            var shiftKeyDown = true;
            var mouseDownPoint = null;
            canvas.on('mouse:move', function(options) {
            if (shiftKeyDown && mouseDownPoint) {
                var pointer = canvas.getPointer(options.e, true);
                var mouseMovePoint = new fabric.Point(pointer.x, pointer.y);
                canvas.relativePan(mouseMovePoint.subtract(mouseDownPoint));
                mouseDownPoint = mouseMovePoint;
                keepPositionInBounds(canvas);
            }
            });
