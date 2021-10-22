const toggle = document.getElementById("dark");

const themeColor = localStorage.getItem('theme') ? localStorage.getItem('theme') :  prefersColorScheme()

setTheme(themeColor);
toggle.addEventListener('click', () => {
    if(toggle.checked){
    document.body.classList = 'dark';
    localStorage.setItem('theme', 'dark')
    }

    else{
    document.body.classList = "light";
    localStorage.setItem('theme', 'light')
    }    
})
function setTheme(theme){
    if(theme == 'dark')
    {
        document.body.classList = 'dark';
        toggle.checked = true;
    }
    else{
        toggle.checked = false;
    }


}
function prefersColorScheme(){
    if(window.matchMedia('(prefers-color-shceme: light)').matches){
        return 'light';
    }
    else{
        return 'dark'
    }
}