function revertFilter() {
  Caman('#bourbon', function() {
    this.revert();
  });
}

function addFilter() {
  Caman('#bourbon', function() {
    this.brightness(10);
    this.render();
  });
}
