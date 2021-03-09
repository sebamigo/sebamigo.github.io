'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
<div class="navbar-header">
<a class="navbar-brand mx-auto" href="index.html">Sebastian Arndt</a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="bildungsweg.html">Bildungsweg</a></li>
    <li class="nav-item"><a class="nav-link" href="erfahrung.html">Erfahrung</a></li>
    <li class="nav-item"><a class="nav-link" href="faehigkeiten.html">Fähigkeiten und Kompetenzen</a></li>
  </ul>
</div>
</div>
</nav>`);

let footer = $(`
<footer class="footer" xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
        <p class="tag" style="text-align: left"><b>Sebastian Paul Arndt</b><br>12683 Berlin <br>sebastian.arndt6597@gmail.com
        </p>
      </div>

        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          
            
<pre class="tag" style="color:#d1d1d1; text-align: left">public <span style="color:#e66170; font-weight:bold; ">static</span> <span style="color:#e66170; font-weight:bold; ">String</span> atEnd<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span> <span style="color:#b060b0; ">{</span>
 StringBuilder result <span style="color:#d2cd86; ">=</span> new StringBuilder<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
 result<span style="color:#d2cd86; ">.</span>append<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">Have a </span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
 <span style="color:#e66170; font-weight:bold; ">for</span><span style="color:#d2cd86; ">(</span><span style="color:#e66170; font-weight:bold; ">int</span> c <span style="color:#d2cd86; ">=</span> <span style="color:#008c00; ">0</span><span style="color:#b060b0; ">;</span> c <span style="color:#d2cd86; ">&lt;</span> <span style="color:#008c00; ">10</span><span style="color:#b060b0; ">;</span> c<span style="color:#d2cd86; ">+</span><span style="color:#d2cd86; ">+</span><span style="color:#d2cd86; ">)</span>
  result<span style="color:#d2cd86; ">.</span>append<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">wonderful </span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
 <span style="color:#e66170; font-weight:bold; ">return</span> result<span style="color:#d2cd86; ">.</span>append<span style="color:#d2cd86; ">(</span><span style="color:#02d045; ">"</span><span style="color:#00c4c4; ">day!!!</span><span style="color:#02d045; ">"</span><span style="color:#d2cd86; ">)</span><span style="color:#d2cd86; ">.</span>toString<span style="color:#d2cd86; ">(</span><span style="color:#d2cd86; ">)</span><span style="color:#b060b0; ">;</span>
<span style="color:#b060b0; ">}</span>
</pre>

        </div>
      </div>
    </div>
  </div>
</footer>
`);



// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});

// Navbar current page highlight

let loader = document.querySelector('.loader-container');

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappear")
}
$(function(){
  $('a.nav-link').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});

//function to remove underline on hover

$(document).ready(function(){

  $("a.nav-link").hover(
       function () {
         $(this).removeClass("current-link");
       },
       function () {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current-link');
        }
      }
  );
});


Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};