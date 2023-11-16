area.value = localStorage.getItem('area');
area.oninput = () =>  
{ 
  localStorage.setItem('area', area.value) 
};

let isDarkMode = false;
function changeColor() {
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    isDarkMode = false;
  } else {
    document.body.classList.add('dark-mode');
    isDarkMode = true;
  }
}