import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const errormsg = (props) => {
  return <div className="text-danger">{props.children}</div>;
};

function Formiks(props) {
  const [mydata, setMydata] = useState([]);

  const initialValues = {
    fname: "",
    lname: "",
  };

  const submitdata = (values) => {
    console.log(values);
    // setMydata([values]);
    setMydata([...mydata,values ]);
  };

  const validationsss = Yup.object().shape({
    fname: Yup.string().required("required first namme"),
    lname: Yup.string().required("required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitdata}
        validationSchema={validationsss}
      >
        <Form>
          <div className="mb-3">
            <Field
              placeholder="First Name"
              className="form-control"
              type="text"
              name="fname"
            />
            <ErrorMessage name="fname" component={errormsg} />
          </div>
          <div className="mb-3">
            <Field
              placeholder="Last Name"
              className="form-control"
              type="text"
              name="lname"
            />
            <ErrorMessage name="lname" component={errormsg} />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <ul>
        {mydata.length > 0 &&
          mydata.map((sandip, index) => (
            <li key={index}>
              <span>{sandip.fname}</span>
              <span className="ml-2">{sandip.lname}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Formiks;
