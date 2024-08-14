// selects the memu icon during responsiveness
const menuBar = document.querySelector("#menu");
// const navbar = document.querySelector(".nabar")
const navlinks = document.querySelector(".navlinks");
const navbuttons = document.querySelector(".navbuttons")
const navlinkList = document.querySelector("#navlink-list");
const navbuttonList = document.querySelector("#navbuttons-list");


//handles the topbar during small screen responsiveness
menuBar.onclick = () => {
    // console.log(navlinks);
    // navlinks.style.display = "block";
    // navlinkList.style.display = "block";
    // navbuttons.style.display = "block";
    // navbuttonList.style.display = "block";
    navbuttonList.classList.toggle("responsive")
    console.log(navbuttonList);
}