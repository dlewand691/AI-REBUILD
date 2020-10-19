window.addEventListener("load", function() {
    // set up our WebGL context and append the canvas to our wrapper
    const curtains = new Curtains({
        container: "canvas",
        autoResize: true,
        watchScroll: false,
        renderingScale: 0.3
    });
    
    function check() {
            const top_of_element = $(".curtain").offset().top;
            const bottom_of_element = $(".curtain").offset().top + $(".curtain").outerHeight();
            const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            const top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // the element is visible, do something
                curtains.enableDrawing();
            } else {
                // the element is not visible, do something else
                curtains.disableDrawing();
            }
        }

        window.addEventListener("scroll", check, false, {passive: true});
    
    // get our plane element
    const planeElement = document.getElementsByClassName("plane")[0];
    
    // set our initial parameters (basic uniforms)
    const params = {
        vertexShaderID: "plane-vs", // our vertex shader ID
        fragmentShaderID: "plane-fs", // our fragment shader ID
        uniforms: {
            time: {
                name: "uTime", // uniform name that will be passed to our shaders
                type: "1f", // this means our uniform is a float
                value: 0,
            },
        },
    };
    
    // create our plane
    const plane = curtains.addPlane(planeElement, params);
    
    let initial = 500;
    let incrementer = 0.5;
    let scrollSpeed = 0;
    $('.curtain').scroll(function () {
        check();
        if (scrollSpeed < 28) { // prevent too flickery animation loops
            scrollSpeed += 1.5;
            incrementer = 0.5;
        }
    });

    let baseSpeed = 0.05;
    $('.curtain').on('increaseAnimationSpeed', function () {
        baseSpeed = 0.07;
    });
    
    let once = true;
    
    // if our plane has been successfully created
    if (plane) {
            plane.onRender(function () {
                if (once) {
                    $('.curtain').trigger('canvasReady');
                    once = false;
                }
                // use the onRender method of our plane fired at each requestAnimationFrame call
                if (initial > 0) {
                    if (initial < 10) {
                        // plane.uniforms.time.value += 0.5;
                        plane.uniforms.time.value += 0.15;
                    } else {
                        // plane.uniforms.time.value += 0.75;
                        plane.uniforms.time.value += 0.175;
                    }
                    initial--;
                } else {
                    if (scrollSpeed > 0) {
                        incrementer += .035;
                        plane.uniforms.time.value += (1 / incrementer);
                        scrollSpeed--;
                        if (scrollSpeed === 0) {
                            baseSpeed = 1.2;
                        }
                    } else {
                        if(baseSpeed > 0.07) {
                            baseSpeed = baseSpeed - 0.05;
                        }
                        plane.uniforms.time.value += baseSpeed; // update our time uniform value
                    }
                }
            });
        }
    
}, {passive: true});



// window.onload = function() {
//   // set up our WebGL context and append the canvas to our wrapper
//   var webGLCurtain = new Curtains({
//     container: "canvas",
//     autoResize: true,
//     watchScroll: false,
//     renderingScale: 0.5
//   });
// 
//   // if there's any error during init, we're going to catch it here
//   webGLCurtain.onError(function() {
//     // we will add a class to the document body to display original images
//     document.body.classList.add("no-curtains");
//   });
// 
//   // get our plane element
//   var planeElement = document.getElementsByClassName("plane")[0];
// 
//   // set our initial parameters (basic uniforms)
//   var params = {
//     vertexShaderID: "plane-vs", // our vertex shader ID
//     fragmentShaderID: "plane-fs", // our framgent shader ID
//     //crossOrigin: "", // codepen specific
//     uniforms: {
//       time: {
//         name: "uTime", // uniform name that will be passed to our shaders
//         type: "1f", // this means our uniform is a float
//         value: 0,
//       },
//     }
//   }
// 
//   // create our plane mesh
//   var plane = webGLCurtain.addPlane(planeElement, params);
// 
//   // if our plane has been successfully created
//   // we use the onRender method of our plane fired at each requestAnimationFrame call
//   plane && plane.onRender(function() {
//     plane.uniforms.time.value++; // update our time uniform value
//   });
// 
// }