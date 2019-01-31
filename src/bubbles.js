const addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
  function drawBubblePattern() {
        const colorScale = d3.scaleOrdinal()
          //.range(["red", "green", "blue"]);
          .range(["#490A3D","#BD1550","#E97F02","#F8CA00","#8A9B0F"]);
        
        const canvas = d3.select("#painting").node();
        canvas.width = window.innerWidth;  //document.width is obsolete
        canvas.height = window.innerHeight; //document.height is obsolete
        const ctx = canvas.getContext("2d");
        
        ctx.globalAlpha = 0.7;
        ctx.globalCompositeOperation = "hard-light";
        
        const data = d3.range(400)
          .map(function(d) {
            return {
              x: window.innerWidth * Math.random(),
              y: window.innerHeight * Math.random(),
              width: 7+70 * Math.random(),
              height: 7+70 * Math.random(),
              group: Math.floor(10 * Math.random())
            }
          })
        
        
        const render = function(arr) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
        
          arr.forEach(function(d) {
            ctx.fillStyle = colorScale(d.group);
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.width/2, 0, 2*Math.PI);
            ctx.fill();
          });
        };
        
        d3.timer(function(t) {
          data.forEach(function(d) {
            d.x += (2*Math.random() - 1);
            d.y += (2*Math.random() - 1);
          });
        
          render(data);
        });
    }

    drawBubblePattern();

    addEvent(window, "resize", function(event) {
        drawBubblePattern();
      });
