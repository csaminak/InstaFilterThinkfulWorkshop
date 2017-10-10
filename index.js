function revertFilter() {
  Caman('#bourbon', function() {
    this.revert();
  });
}

function addFilter() {
  Caman('#bourbon', function() {
    this['hazyDays']();
    this.brightness(-10);
    this.contrast(-5);
    this.vibrance(20);
    this.render();
  });
}
