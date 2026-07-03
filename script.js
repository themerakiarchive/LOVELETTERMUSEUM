// meraki archive — scripts will go here
console.log("meraki archive loaded");
function toggleDropdown() {
  const dropdown = document.getElementById('brandDropdown');
  dropdown.classList.toggle('active');
}

// close dropdown when clicking anywhere else
document.addEventListener('click', function(e) {
  if (!e.target.closest('.brand-wrapper')) {
    document.getElementById('brandDropdown').classList.remove('active');
  }
});