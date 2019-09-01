const changeThemeButtons = document.querySelectorAll('[name=theme]');

const rootStyles = document.documentElement.style;

const lightTheme = {
    '--bg-color'    : "#eee",
    '--bg-color-2'  : "#fff",
    '--text-color'  : "#53575A",
    '--accent-color': "#007BDF",
    '--font'        : "'Open Sans', sans-serif"
}

const darkTheme = {
    '--bg-color'    : "#53575A",
    '--bg-color-2'  : "#282D31",
    '--text-color'  : "#eee",
    '--accent-color': "#ff3c32",
    '--font'        : "'Lato', sans-serif"
}

for(let button of changeThemeButtons){
    button.addEventListener('change', e => {
        if(e.target.id === 'dark'){
            changeTheme(darkTheme)
        }
        else if(e.target.id === 'light'){
            changeTheme(lightTheme)
        }
    })
}

const changeTheme = theme => {
    let cssVars = Object.keys(theme);
    for(let cssVar of cssVars){
        rootStyles.setProperty(cssVar, theme[cssVar]);
    }
}