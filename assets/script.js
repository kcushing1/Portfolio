//icons for the skills I have
const skillLogoArr = [
  {
    skill: "html",
    logo: "./assets/images/logos/html-logo.png",
  },
  {
    skill: "css",
    logo: "./assets/images/logos/css-logo.png",
  },
  {
    skill: "js",
    logo: "./assets/images/logos/JavaScript-logo.png",
  },
  {
    skill: "bootstrap",
    logo: "./assets/images/logos/Bootstrap_logo.png",
  },
  {
    skill: "moment",
    logo: "./assets/images/logos/moment-logo.png",
  },
  {
    skill: "jquery",
    logo: "./assets/images/logos/jquery-logo.png",
  },
  {
    skill: "node",
    logo: "./assets/images/logos/node-logo.png",
  },
  {
    skill: "api",
    logo: "./assets/images/logos/api-logo.png",
  },
];

//append logos to screen
function appendSkillLogos() {
  for (let i = 0; i < skillLogoArr.length; i++) {
    $("." + skillLogoArr[i].skill).append(`
      <div class="card h-5 greyblue border-0">
        <div class="card-body logo-size">
          <img class="card-img-top" src="${skillLogoArr[i].logo}" alt="${skillLogoArr[i].skill}">
        </div>
      </div>
  `);
  }
} //end appendSkillLogos

appendSkillLogos();

//on hover, change image of myself to a different image
$("#main-img").hover(
  function () {
    $("#main-img").removeAttr();
    $("#main-img").attr("src", "./assets/images/imgA.JPG");
  },
  function () {
    $("#main-img").removeAttr(),
      $("#main-img").attr("src", "./assets/images/img_main.JPG");
  }
);
