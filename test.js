        var Pixel = function(x, y, clr, size) {
            var pixel = this.createElement("div");
            pixel.style.backgroundColor = clr + "";
            pixel.style.position = "absolute";
            pixel.style.left = x + "px";
            pixel.style.top = y + "px";
            pixel.style.backgroundColor = clr;
            pixel.style.width = size + "px";
            pixel.style.height = size + "px";
            this.body.appendChild(pixel);
        };
        Pixel(200, 200, "blue", 10);
