function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;

    };
    this.perimeter = function () {
        return 2 * Math.PI * this.radius  
    };

};
