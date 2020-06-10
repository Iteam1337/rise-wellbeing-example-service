import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { User } from "./types";

function RegisterForm({ onSubmit }: { onSubmit: (user: User) => void }) {
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{ email: "kim@example.com", password: "hello" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid gap-6">
            <Field
              type="email"
              name="email"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500"
            />
            <Field
              type="password"
              name="password"
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-white font-bold py-2 px-4 rounded ${
                isSubmitting
                  ? "bg-blue-300 hover:bg-blue-300"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
