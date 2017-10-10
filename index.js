function revertFilter() {
  Caman('#bourbon', function() {
    this.revert();
  });
}

function addFilter1() {
  Caman('#bourbon', function() {
    this['hazyDays']();
    this.brightness(-10);
    this.contrast(-5);
    this.vibrance(20);
    this.render();
  });
}

function addFilter2() {
  Caman('#bourbon', function() {
    this['sunrise']();
    // this.brightness(-10);
    this.render();
  });
}

function addFilter3() {
  Caman('#bourbon', function() {
    this['hemingway']();
    this.brightness(-10);
    this.sharpen(20);
    this.sepia(30);
    this.hue(95);
    this.render();
  });
}

function addFilter4() {
  Caman('#bourbon', function() {
    this['pinhole']();
    this.contrast(-20);
    this.render();
  });
}
