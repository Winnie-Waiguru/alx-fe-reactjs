import { useFormik } from "formik";

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) errors.username("Username required");
      if (!values.email) errors.email("Email required");
      if (!values.password) errors.password("Password required");
    },
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username && <div>{formik.errors.username}</div>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <div>{formik.errors.password}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikForm;
