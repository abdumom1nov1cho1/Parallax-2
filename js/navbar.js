export const toggleSidebar = () => {
  const sidebarToggler = document.querySelector(".nav-toggle");
  const closeSidebarBtn = document.querySelector(".hide-navbar");
  const sidebar = closeSidebarBtn.closest(".nav");
  const sidebarOverlay = document.querySelector(".nav-overlay");

  sidebarToggler.addEventListener("click", () => {
    showSidebar(sidebar, sidebarOverlay);
  });

  closeSidebarBtn.addEventListener("click", () => {
    hideSidebar(sidebar, sidebarOverlay);
  });

  sidebarOverlay.addEventListener('click', ()=> {
	hideSidebar(sidebar, sidebarOverlay)
  })
};

const showSidebar = (sidebar, sidebarOverlay) => {
  sidebarOverlay.classList.add("open");
  sidebarOverlay.style.transition = "transform 0.5s ease";

  sidebar.classList.add("open");
  sidebar.style.transition = "transform 0.3s ease 0.5s";
};

const hideSidebar = (sidebar, sidebarOverlay) => {
  sidebar.classList.remove("open");
  sidebar.style.transition = "transform 0.5s ease";

  sidebarOverlay.classList.remove("open");
  sidebarOverlay.style.transition = "transform 0.5s ease 0.3s";
};
