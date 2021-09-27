// fabric.Object.prototype.transparentCorners = false;
// fabric.Object.prototype.padding = 5;

 
// var $ = function(id){return document.getElementById(id)};


// var canvas = this.__canvas = new fabric.Canvas('c');
//   canvas.setHeight(300);
//     canvas.setWidth(500);
// console.log(canvas)
//         function Addtext() { 
//         canvas.add(new fabric.IText('Tap and Type', { 
//         left: 50,
//         top: 100,
//         fontFamily: 'arial black',
//         fill: '#333',
//             fontSize: 50
//         }));
// }

// document.getElementById('text-color').onchange = function() {
//         canvas.getActiveObject().setFill(this.value);
//         canvas.renderAll();
//     };
// document.getElementById('text-color').onchange = function() {
//         canvas.getActiveObject().setFill(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-bg-color').onchange = function() {
//         canvas.getActiveObject().setBackgroundColor(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-lines-bg-color').onchange = function() {
//         canvas.getActiveObject().setTextBackgroundColor(this.value);
//         canvas.renderAll();
//     };

//     document.getElementById('text-stroke-color').onchange = function() {
//         canvas.getActiveObject().setStroke(this.value);
//         canvas.renderAll();
//     };	

//     document.getElementById('text-stroke-width').onchange = function() {
//         canvas.getActiveObject().setStrokeWidth(this.value);
//         canvas.renderAll();
//     };				

//     document.getElementById('font-family').onchange = function() {
//         canvas.getActiveObject().setFontFamily(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-font-size').onchange = function() {
//         canvas.getActiveObject().setFontSize(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-line-height').onchange = function() {
//         canvas.getActiveObject().setLineHeight(this.value);
//         canvas.renderAll();
//     };
    
//     document.getElementById('text-align').onchange = function() {
//         canvas.getActiveObject().setTextAlign(this.value);
//         canvas.renderAll();
//     };
    

// radios5 = document.getElementsByName("fonttype");  // wijzig naar button
// for(var i = 0, max = radios5.length; i < max; i++) {
//     radios5[i].onclick = function() {
        
//         if(document.getElementById(this.id).checked == true) {
//             if(this.id == "text-cmd-bold") {
//                 canvas.getActiveObject().set("fontWeight", "bold");
//             }
//             if(this.id == "text-cmd-italic") {
//                 canvas.getActiveObject().set("fontStyle", "italic");
//             }
//             if(this.id == "text-cmd-underline") {
//                 canvas.getActiveObject().set("textDecoration", "underline");
//             }
//             if(this.id == "text-cmd-linethrough") {
//                 canvas.getActiveObject().set("textDecoration", "line-through");
//             }
//             if(this.id == "text-cmd-overline") {
//                 canvas.getActiveObject().set("textDecoration", "overline");
//             }
            
            
            
//         } else {
//             if(this.id == "text-cmd-bold") {
//                 canvas.getActiveObject().set("fontWeight", "");
//             }
//             if(this.id == "text-cmd-italic") {
//                 canvas.getActiveObject().set("fontStyle", "");
//             }  
//             if(this.id == "text-cmd-underline") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }
//             if(this.id == "text-cmd-linethrough") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }  
//             if(this.id == "text-cmd-overline") {
//                 canvas.getActiveObject().set("textDecoration", "");
//             }
//         }
        
        
//         canvas.renderAll();
//     }
// }

// var canvas = new fabric.Canvas('c')

// var text= "Happy Birthday"
// var headingText = [];
// var startAngle = -58;
// var textLength = text.length;

// var r = getTranslationDistance(text);
// var j=-1;
// var angleInterval = 116/textLength;
// for(var iterator=(-textLength/2), i=textLength-1; iterator<textLength/2;iterator++,i--) {
  
//     var rotation = 90-(startAngle+(i)*angleInterval) ;
   
//     headingText.push(new fabric.IText(text[i], {
      
//         angle : j*((startAngle)+(i*angleInterval)),
//       shadow: 'rgba(0,0,0,0.5) 5px 5px 5px',
//      fontSize:28,
//         left: (r)*Math.cos((Math.PI/180)*rotation),
//         top: (r)*Math.sin((Math.PI/180)*rotation)
       
//     }));
      
// }

// var group2 = new fabric.Group(headingText, { left: 0, top: canvas.height/2 , fontFamily: 'Arial',  strokeWidth: 1,
        
//         strokeStyle:"#fff"});
// canvas.add(group2);
// console.log(group2)

// function getTranslationDistance(text){
//     var boundingRectangle = $("<div id='tempdiv' style='display:table-cell;font-family:Arial; font-size:28px;'>"+text+"</div>").appendTo("#main");
    
//     var translationDistance = $(boundingRectangle).width();
//     $(boundingRectangle).remove();
//     return translationDistance;
// }

var canvas = new fabric.Canvas('c2');

function upload(e) {
    console.log("olkau")
   var fileType = e.target.files[0].type;
   var url = URL.createObjectURL(e.target.files[0]);

   if (fileType === 'image/png') { //check if png
      fabric.Image.fromURL(url, function(img) {
         img.set({
            width: 180,
            height: 180
         });
         canvas.add(img);
      });
   } else if (fileType === 'image/svg+xml') { //check if svg
      fabric.loadSVGFromURL(url, function(objects, options) {
         var svg = fabric.util.groupSVGElements(objects, options);
         svg.scaleToWidth(180);
         svg.scaleToHeight(180);
         canvas.add(svg);
      });
   }
}

// var canvas = new fabric.Canvas('canvas');
// document.getElementById('file').addEventListener("change", function (e) {
//     console.log("dsqfqdsfdqsfdsfqdsopifdsioufqsioudfiod^sqfiosd^f")
//   var file = e.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function (f) {
//     var data = f.target.result;                    
//     fabric.Image.fromURL(data, function (img) {
//       var oImg = img.set({left: 0, top: 0, angle: 00,width:100, height:100}).scale(0.9);
//       canvas.add(oImg).renderAll();
//       var a = canvas.setActiveObject(oImg);
//       var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
//     });
//   };
//   reader.readAsDataURL(file);
// });