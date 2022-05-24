import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import ProductService from "../services/productService";
import CTextInput from "../utilities/customFormControls/CTextInput";
export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  // validasyon (doğrulama) yapmamızı sağlar
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          let productService = new ProductService();
          productService.addProduct(values);
        }}
      >
        <Form className="ui form">
          {/*  Custom Hook kullanıldı */}
          <CTextInput name="productName" placeholder="Ürün adı" />
          {/* <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
          {/*   <FormField>
            <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
          <CTextInput name="unitPrice" placeholder="Ürün fiyatı" />
          <Button color="green" type="submit">
            Ürün Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
