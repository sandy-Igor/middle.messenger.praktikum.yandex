import "./style.scss"
import authPage from "./pages/auth/auth";
import registerPage from "./pages/register/register";
import pageNotFound from "./pages/errors/pageNotFound";
import pageServerError from "./pages/errors/pageServerError";
import changeProfilePage from "./pages/changeProfile/changeProfile";
import profilePage from "./pages/profile/profile";
import changePassPage from "./pages/changePassword/changePassword";
import chatPage from "./pages/chat/chat";

let content = authPage();
window.addEventListener("load", (e) => {
    const path = window.location.pathname;
    switch (path) {
        case "/register" : content = registerPage();
        break;
        case "/pnf" : content = pageNotFound();
        break;
        case "/pse" : content = pageServerError();
        break;
        case "/changeProfilePage" : content = changeProfilePage();
        break;
        case "/profilePage" : content = profilePage();
        break;
        case "/changePassPage": content = changePassPage();
        break;
        case "/chatPage": content= chatPage();
    }
    return document.body.innerHTML = content;
})




