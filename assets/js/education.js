AOS.init();

Element.prototype.documentOffsetTop = function () {
  return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};