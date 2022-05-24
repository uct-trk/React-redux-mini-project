import React from "react";
import { Grid, GridRow } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
export default function Dashboard() {
  return (
    <>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Grid>
        <GridRow>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>

          <Grid.Column width={13}>
            <Route exact path={"/"} component={ProductList} />
            <Route exact path={"/products"} component={ProductList} />
            <Route path={"/products/:name"} component={ProductDetail} />
            <Route path={"/cart"} component={CartDetail} />
            <Route path={"/product/add"} component={ProductAdd} />
          </Grid.Column>
        </GridRow>
      </Grid>
    </>
  );
}
