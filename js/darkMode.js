// const enableDarkMode = (sectionBg) => {
//   sectionBg.forEach((section) => {
//     section.classList.remove("lightMode");
//     section.classList.add("darkMode");
//   });
//   document.body.style.color = "#fff";
//   localStorage.setItem("dark", "enabled");
// };

// const disableDarkMode = (sectionBg) => {
//   sectionBg.forEach((section) => {
//     section.classList.remove("darkMode");
//     section.classList.add("lightMode");
//   });
//   document.body.style.color = "#000";
//   localStorage.setItem("dark", null);
// };

// export const darkMode = () => {
//   let darkMode = localStorage.getItem("dark");
//   let darkModeToggle = document.querySelector(".light-mode");
//   const sectionBg = document.querySelectorAll(".darkMode");

//   if (darkMode === "enabled") {
//     enableDarkMode(sectionBg);
//   }

//   darkModeToggle.addEventListener("click", () => {
//     darkMode = localStorage.getItem("dark");
//     if (darkMode !== "enabled") {
//       enableDarkMode(sectionBg);
//     } else {
//       disableDarkMode(sectionBg);
//     }
//   });
// };
