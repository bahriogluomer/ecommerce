import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";

export default function PageBody() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductListPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <h2 className="text-red-400">404 - Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}
