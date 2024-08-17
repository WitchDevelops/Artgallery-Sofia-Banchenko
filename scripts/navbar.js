// open and close the menu
const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
};

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};

// show and hide the top menu on scroll

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myNav").style.top = "0";
  } else {
    document.getElementById("myNav").style.top = "-50px";
  }
};
