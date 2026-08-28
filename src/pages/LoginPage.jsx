import { ErrorMessage, Field, Form, Formik } from "formik";
import "./CSS/RegisterPage.css";
import * as Yup from "yup";

const LoginPage = () => {
  const initialLoginValues = {
    email: "",
    lozinka: "",
  };

  // const validateRegister = (values) => {
  //   const errors = {};
  //   //Ime i prezime - obavezna polja
  //   if (!values.ime.trim()) {
  //     errors.ime = "Ime je obavezno.";
  //   }
  //   if (!values.prezime.trim()) {
  //     errors.prezime = "Prezime je obavezno.";
  //   }
  //   //Email - obavezan i format
  //   if (!values.email) {
  //     errors.email = "Email je obavezan.";
  //   } else if (!values.email.includes("@")) {
  //     errors.email = "Email nije ispravan.";
  //   }

  //   //Lozinka - obavezna i minimalna duzina
  //   if (!values.lozinka.trim()) {
  //     errors.lozinka = "Lozinka je obavezna.";
  //   } else if (!values.lozinka.length < 6) {
  //     errors.lozinka = "Lozinka mora imati barem 6 karaktera.";
  //   }

  //   //Potvrda lozinke - obavezna i mora se poklapati sa lozinkom
  //   if (!values.potvrdaLozinke.trim()) {
  //     errors.potvrdaLozinke = "Potvrda lozinke je obavezna.";
  //   } else if (values.potvrdaLozinke !== values.lozinka) {
  //     errors.potvrdaLozinke = "Lozinke se ne poklapaju.";
  //   }

  //   //Pol - obavezno (mora biti izabrnao jedno od radio dugmadi)
  //   if (!values.pol.trim()) {
  //     errors.pol = "Izaberite pol.";
  //   }

  //   //Datum rodjenja - obavezan
  //   if (!values.datumRodjenja) {
  //     errors.datumRodjenja = "Datum rodjenja je obavezan.";
  //   }

  //   //Broj telefona - obavezan i mora sadrzati samo cifre
  //   if (!values.brojTelefona) {
  //     errors.brojTelefona = "Broj telefona je obavezan.";
  //   } else if (!/^\d+$/.test(values.brojTelefona)) {
  //     errors.brojTelefona = "Dozvoljene su samo cifre.";
  //   }

  //   return errors;
  // };

  const handleLoginSubmit = (values) => {
    console.log("Podaci za prijavu: ", values);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email nije ispravan.")
      .required("Email je obavezan."),
    lozinka: Yup.string()
      .min(6, "Lozinka mor aimati bar 6 karaktera.")
      .required("Lozinka je obavezna."),
  });

  return (
    <Formik
      initialValues={initialLoginValues}
      validationSchema={LoginSchema}
      onsubmit={handleLoginSubmit}
    >
      <Form className="register-form">
        <h2 className="register-title">Prijava</h2>
        <div className="register-form-group">
          <label htmlFor="email">Email:</label>
          <div className="register-input-wrapper">
            <Field
              id="email"
              name="email"
              type="email"
              className="register-form-control"
            />
          </div>
          <ErrorMessage
            name="email"
            className="register-error"
            component="div"
          />
        </div>

        <div className="register-form-group">
          <label htmlFor="lozinka">Lozinka:</label>
          <div className="register-input-wrapper">
            <Field
              id="lozinka"
              name="lozinka"
              type="password"
              className="register-form-control"
            />
          </div>
          <ErrorMessage
            name="lozinka"
            className="register-error"
            component="div"
          />
        </div>

        <button type="submit" className="register-button">
          Prijavi se
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
