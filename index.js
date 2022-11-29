document.body.onload = init;

function init() {
  document
    .getElementById("contactForm")
    .addEventListener("submit", formToConsole);
  document.getElementById("pfp").addEventListener("mouseover", spinpfp);
  document.getElementById("tank-text").addEventListener("mouseover", showHeart);
  document.getElementById("tank-text").addEventListener("mouseout", hideHeart);
}

function formToConsole() {
  let comment = document.getElementById("comment").value;
  let email = document.getElementById("email").value;
  let newsLetter = "no submission";
  if (document.getElementById("newsLetterYes").checked) {
    newsLetter = "Yes";
  } else if (document.getElementById("newsLetterNo").checked) {
    newsLetter = "No";
  }

  if (comment === "" && email === "" && newsLetter === "no submission") {
    console.warn("You must enter some data to submit this form");
    alert("You must enter some data to submit this form");
  } else {
    console.log("========== Form Submission ==========");
    console.log(`   Email: ${email}`);
    console.log(`   Newsletter: ${newsLetter}`);
    console.log(`   Comment: ${comment}`);
  }
}

function spinpfp() {
  let pfp = document.getElementById("pfp");
  let tankText = document.getElementById("tank-text");
  pfp.removeEventListener("mouseover", spinpfp);
  tankText.removeEventListener("mouseover", showHeart);
  let i = 1;
  spinInterval = setInterval(function () {
    pfp.style.transform = `rotate(${i}deg)`;
    ++i;
    if (i > 359) {
      clearInterval(spinInterval);
      pfp.style.transform = `rotate(0deg)`;
      pfp.addEventListener("mouseover", spinpfp);
      tankText.addEventListener("mouseover", showHeart);
    }
  }, 0);
}

function showHeart() {
  document.getElementById("tank-heart").style.visibility = "visible";
}

function hideHeart() {
  document.getElementById("tank-heart").style.visibility = "hidden";
}
