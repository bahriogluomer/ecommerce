import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import PagesPage from "../pages/PagesPage";

export default function PageBody() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/pages">
          <PagesPage />
        </Route>

        <Route path="*">
          <h2 className="text-red-400">404 - Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}
