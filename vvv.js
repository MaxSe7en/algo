/* USAGE
    var graph = new Graph(paper.get(0), 800, 500);
    graph.max(maxx, maxy)
         .min(minx, miny)
         .ticks(4, function(x, y){
            var attrs = {stroke: "#ffffff", 'stroke-width': '1'};
            graph.hor(y, attrs)
                 .ver(x, attrs);
            graph.xLabel(x, "Label:" + x);
            graph.yLabel(y, "Label:" + y);
         });
    graph.data(data, function(next, prev){
      graph.line(prev.x, prev.y, next.x, next.y, {});
    });
*/


(function(){
    var extend = function(to, source){
      for(var i in source) to[i] = source[i];
      return to;
    };
  
    var each = function(obj, cb, context){
      if(obj.forEach) {
        obj.forEach(cb, context);
      } else {
        for(var i in obj)
          if(obj.hasOwnProperty(i))
            cb.call(context, obj[i], key, obj);
      }
    };
  
    var Bounds = function(){
      this.minx = Math.min();
      this.miny = Math.min();
      this.maxx = Math.max();
      this.maxy = Math.max();
    };
  
    Bounds.prototype = extend(Bounds.prototype, {
      extend : function(x, y){
        if(this.minx > x) this.minx = x;
        if(this.maxx < x) this.maxx = x;
        if(this.miny > y) this.miny = y;
        if(this.maxy < y) this.maxy = y;
      },
  
      shrink : function(factor){
        var iter = ['minx', 'miny', 'maxx', 'maxy'];
        for(var i in iter)
          if(this[iter[i]] < 0)
            this[iter[i]] = this[iter[i]] + factor;
          else
            this[tter[i]] = this[iter[i]] - factor;
      },
  
      grow : function(factor){
        this.shrink(factor * -1);
      },
  
      width : function(){
        return Math.abs(this.maxx - this.minx);
      },
  
      height : function(){
        return Math.abs(this.maxy - this.miny);
      },
  
      setProject : function(w, h){
        this.matrix = Raphael.matrix(1, 0, 0, -1, 0, 0);
        this.matrix.scale(w / this.width(), h / this.height());
        this.matrix.translate(-this.minx, -this.maxy);
      },
  
      projString : function(){
        return this.matrix.toTransformString();
      }
    });
  
  
    var Graph = this.Graph = function(canvas, w, h){
      this.canvas   = Raphael(canvas, w, h);
      this.el       = $(canvas).css({width: w, height: h});
      this.width    = w;
      this.height   = h;
      this.bounds   = new Bounds();
    };
  
    Graph.prototype = extend(Graph.prototype, {
      data: function(data, cb){
        var last;
        var that = this;
        each(data, function(it){
          cb.call(that, it, last);
          last = it;
        })
        return this;
      },
  
      max : function(maxx, maxy) {
        this.bounds.extend(maxx, maxy);
        this.bounds.setProject(this.width, this.height);
        return this;
      },
  
      min : function(minx, miny) {
        this.max(minx, miny);
        return this;
      },
  
      ticks : function(num, cb){
        var xStep = (this.bounds.maxx - this.bounds.minx) / num;
        var yStep = (this.bounds.maxy - this.bounds.miny) / num;
  
        for(var i = 0; i < num + 1; i++)
          cb.call(this, i * xStep + this.bounds.minx, i * yStep + this.bounds.miny);
  
        return this;
      },
  
      point : function(x, y, attr){
        this.canvas.circle(this.x(x), this.y(y), 1).attr(attr);
        return this;
      },
  
      line : function(x1, y1, x2, y2, attr){
        this.canvas
          .path(Raphael.format("M{0},{1}L{2},{3}", this.x(x1), this.y(y1), this.x(x2), this.y(y2)))
          .attr(attr);
        return this;
      },
  
      hor : function(y, attr){
        this.line(this.bounds.minx, y, this.bounds.maxx, y, attr);
        return this;
      },
  
      ver : function(x, attr){
        this.line(x, this.bounds.miny, x, this.bounds.maxy, attr);
        return this;
      },
  
      x : function(x){
        return this.bounds.matrix.x(x, 0);
      },
  
      y : function(y){
        return this.bounds.matrix.y(0, y);
      },
  
      xLabel : function(x, text){
        var div = $("<div />")
                    .addClass("graph-label-x")
                    .css({
                      "top": this.y(this.bounds.miny)
                    }).text(text).appendTo(this.el);
        div.css({left: this.x(x, 0) - div.width() / 2});
      },
  
      yLabel : function(y, text){
        var div = $("<div />")
                    .addClass("graph-label-y")
                    .css({
                      "left": this.x(this.bounds.maxx)
                    }).text(text).appendTo(this.el);
        div.css({top: this.y(y) - div.height() / 2});
      }
    });
  })();

  var graph = new Graph(paper.get(0), 800, 500);
graph.max(maxx, maxy)
     .min(minx, miny)
     .ticks(4, function(x, y){
        var attrs = {stroke: "#ffffff", 'stroke-width': '1'};
        graph.hor(y, attrs)
             .ver(x, attrs);
        graph.xLabel(x, "Label:" + x);
        graph.yLabel(y, "Label:" + y);
     });
graph.data(data, function(next, prev){
  graph.line(prev.x, prev.y, next.x, next.y, {});
});
