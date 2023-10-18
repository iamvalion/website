function dismissItem(element)
{
    for (let i = 0; i < 9; i++) {
        setTimeout(function() {
            element.style.opacity = 1 - (i * 0.1);
        }, 15 * i);
    }
    setTimeout(function() {
        if (element.id == "page-alert")
        {
            localStorage.setItem("dismissedPageAlert", "true");
        }
        element.remove();
    }, 150);
}

/*
On Page Load
*/

/* Alerts */

// Determines whether or not the page alert(s) should be shown or not
if (localStorage.getItem('dismissedPageAlert')){
    document.getElementById("page-alert").remove();
}

// Sets the parent element of each dismiss button (alerts, modals, etc.) to be dismissed on the button's click
let dismissButtons = document.querySelectorAll(".dismiss-button");
dismissButtons.forEach(dismissButton => dismissButton.setAttribute("onclick", "dismissItem(this.parentNode)"));

/* Footer Copyright */

document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
