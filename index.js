document.body.onload = init;

function init() {
  document
    .getElementById("contactForm")
    .addEventListener("submit", formToConsole);
  document.getElementById("pfp").addEventListener("mouseover", spinpfp);
}

function formToConsole() {
  let user = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let newsLetter = "no submission";
  if (document.getElementById("newsLetterYes").checked) {
    newsLetter = "Yes";
  } else if (document.getElementById("newsLetterNo").checked) {
    newsLetter = "No";
  }
  let date = document.getElementById("date").value;

  if (
    user === "" &&
    email === "" &&
    newsLetter === "no submission" &&
    date === ""
  ) {
    console.warn("You must enter some data to submit this form");
    alert("You must enter some data to submit this form");
  } else {
    console.log("========== Form Submission ==========");
    console.log(`   Username: ${user}`);
    console.log(`   Email: ${email}`);
    console.log(`   Newsletter: ${newsLetter}`);
    console.log(`   Date: ${date}`);
  }
}

function spinpfp() {
  document.getElementById("pfp").removeEventListener("mouseover", spinpfp);
  let pfp = document.getElementById("pfp");
  let i = 1;
  spinInterval = setInterval(function () {
    pfp.style.transform = `rotate(${i}deg)`;
    ++i;
    if (i > 359) {
      clearInterval(spinInterval);
      pfp.style.transform = `rotate(0deg)`;
      document.getElementById("pfp").addEventListener("mouseover", spinpfp);
    }
  }, 0);
}
