function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    function scrollToTarget() {
      const targetSection = document.querySelector('#myTopnav');
      
      // Scroll to the target section using scrollIntoView
      targetSection.scrollIntoView({
      });
  }
  
  // Call the scrollToTarget function when needed
  scrollToTarget();
  }