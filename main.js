window.onload = function() {

    var x = 0, y = 0,
        speed = 5,
        angle = 30,
        context,
        car_image = new Image();

    car_image.src = "car.png";

    var car = {
        init: function() {
            var canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");

            window.addEventListener("keydown", this.keypress_handler, false);
            window.addEventListener("keyup", this.keyup_handler, false);
            self = this;
            setInterval(function () {
                self.draw();
            }, 30);
        },
        draw: function() {
            context = canvas.getContext("2d");
            context.clearRect(0, 0, 1200, 1200);
            x += speed * Math.cos(Math.PI / 180 * angle);
            y += speed * Math.sin(Math.PI / 180 * angle);
            context.save();
            context.translate(x, y);
            context.rotate(Math.PI / 180 * angle);
            context.drawImage(car_image, -(car_image.width / 2), -(car_image.height / 2));
            context.restore();
        },
        keyup_handler: function () {
            document.getElementsByClassName("speed")[0].innerHTML = speed;
            document.getElementsByClassName("angle")[0].innerHTML = angle;
        },
        keypress_handler: function (event) {
            if (event.keyCode == 87) {
                speed += 1;
            }
            if (event.keyCode == 83) {
                if (speed > 0) {
                    speed -= 1;
                }
            }
            if (event.keyCode == 65) {
                angle -= 5;
            }
            if (event.keyCode == 68) {
                angle += 5;
            }
        }
    };

    car.init();
};