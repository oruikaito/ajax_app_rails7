function post (){
  const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fromData = new FormData(form);
      const XHR = new XMLHttpRequest();
      XHR.open("POST", "/posts", true);
      XHR.responseType = "json";
      XHR.send(FormData);
    });
 };
 
 window.addEventListener('turbo:load', post);