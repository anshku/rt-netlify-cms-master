import CMS from "netlify-cms-app";
import AboutPage from "../templates/about-page";
import IndexPage from "../templates/index-page";
CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
});

CMS.registerWidget(`about-page`, AboutPage);
CMS.registerWidget(`index-page`, IndexPage);
