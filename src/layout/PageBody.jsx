import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShoppingPage from "../pages/ShoppingPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

export default function PageBody() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shopping">
          <ShoppingPage />
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
        <Route path="/product">
          <ProductDetailPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </main>
  );
}
