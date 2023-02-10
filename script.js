{
  /* <span id="temp" class="fa"></span> */
}

const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "#f8b627";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
  }, 1500);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "#d63031";
  }, 2500);

  setTimeout(() => {
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#fff";
  }, 3000);
};

tempLoad();

setInterval(tempLoad, 3500);
