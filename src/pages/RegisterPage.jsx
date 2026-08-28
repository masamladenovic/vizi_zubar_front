import { ErrorMessage, Field, Form, Formik } from "formik";
import "./CSS/RegisterPage.css";
import * as Yup from "yup";
import { useState } from "react";

const RegisterPage = () => {
  const [korak, setKorak] = useState(1);

  const initialRegisterValues = {
    ime: "",
    prezime: "",
    email: "",
    lozinka: "",
    potvrdaLozinke: "",
    pol: "",
    datumRodjenja: "",
    brojTelefona: "",
  };

  const validateRegister = (values) => {
    const errors = {};
    //Ime i prezime - obavezna polja
    if (!values.ime.trim()) {
      errors.ime = "Ime je obavezno.";
    }
    if (!values.prezime.trim()) {
      errors.prezime = "Prezime je obavezno.";
    }
    //Email - obavezan i format
    if (!values.email) {
      errors.email = "Email je obavezan.";
    } else if (!values.email.includes("@")) {
      errors.email = "Email nije ispravan.";
    }

    //Lozinka - obavezna i minimalna duzina
    if (!values.lozinka.trim()) {
      errors.lozinka = "Lozinka je obavezna.";
    } else if (!values.lozinka.length < 6) {
      errors.lozinka = "Lozinka mora imati barem 6 karaktera.";
    }

    //Potvrda lozinke - obavezna i mora se poklapati sa lozinkom
    if (!values.potvrdaLozinke.trim()) {
      errors.potvrdaLozinke = "Potvrda lozinke je obavezna.";
    } else if (values.potvrdaLozinke !== values.lozinka) {
      errors.potvrdaLozinke = "Lozinke se ne poklapaju.";
    }

    //Pol - obavezno (mora biti izabrnao jedno od radio dugmadi)
    if (!values.pol.trim()) {
      errors.pol = "Izaberite pol.";
    }

    //Datum rodjenja - obavezan
    if (!values.datumRodjenja) {
      errors.datumRodjenja = "Datum rodjenja je obavezan.";
    }

    //Broj telefona - obavezan i mora sadrzati samo cifre
    if (!values.brojTelefona) {
      errors.brojTelefona = "Broj telefona je obavezan.";
    } else if (!/^\d+$/.test(values.brojTelefona)) {
      errors.brojTelefona = "Dozvoljene su samo cifre.";
    }

    return errors;
  };

  const handleRegisterSubmit = (values) => {
    console.log("Podaci za registraciju: ", values);
  };

  const RegisterSchema = Yup.object().shape({
    ime: Yup.string().required("Ime je obavezno."),
    prezime: Yup.string().required("Prezime je obavezno."),
    email: Yup.string()
      .email("Email nije ispravan.")
      .required("Email je obavezan."),
    lozinka: Yup.string()
      .min(6, "Lozinka mor aimati bar 6 karaktera.")
      .required("Lozinka je obavezna."),
    potvrdaLozinke: Yup.string()
      .oneOf([Yup.ref("lozinka"), "Lozinke se ne poklapaju."])
      .required("Portvrda lozinke je obavezna."),
    pol: Yup.string().required("Pol je obavezan."),
    datumRodjenja: Yup.string().required("Datum rodjenja je obavezan."),
    brojTelefona: Yup.string().required("Broj telefona je obavezan."),
  });

  return (
    <Formik
      initialValues={initialRegisterValues}
      validationSchema={RegisterSchema} //validateRegister
      onsubmit={handleRegisterSubmit}
    >
      <Form className="register-form">
        <h2 className="register-title">Registracija</h2>

        {korak === 1 && (
          <>
            <div className="register-form-group">
              <label htmlFor="ime">Ime:</label>
              <div className="register-input-wrapper">
                <Field
                  id="ime"
                  name="ime"
                  type="text"
                  className="register-form-control"
                />
              </div>
              <ErrorMessage
                name="ime"
                className="register-error"
                component="div"
              />
            </div>

            <div className="register-form-group">
              <label htmlFor="prezime">Prezime:</label>
              <div className="register-input-wrapper">
                <Field
                  id="prezime"
                  name="prezime"
                  type="text"
                  className="register-form-control"
                />
              </div>
              <ErrorMessage
                name="prezime"
                className="register-error"
                component="div"
              />
            </div>

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

            <div className="register-form-group">
              <label htmlFor="potvrdaLozinke">Ponovite lozinku:</label>
              <div className="register-input-wrapper">
                <Field
                  id="potvrdaLozinke"
                  name="potvrdaLozinke"
                  type="password"
                  className="register-form-control"
                />
              </div>
              <ErrorMessage
                name="potvrdaLozinke"
                className="register-error"
                component="div"
              />
            </div>
            <button type="button" onClick={() => setKorak(2)}>
              Sledeci korak
            </button>
          </>
        )}

        {korak === 2 && (
          <>
            <div className="register-form-group">
              <label>Pol:</label>

              <div className="register-radio-group">
                <label>
                  <Field name="pol" type="radio" value="Muški" />
                  Muški
                </label>

                <label>
                  <Field name="pol" type="radio" value="Ženski" />
                  Ženski
                </label>
              </div>

              <ErrorMessage
                name="pol"
                className="register-error"
                component="div"
              />
            </div>

            <div className="register-form-group">
              <label htmlFor="datumRodjenja">Datum rođenja:</label>

              <div className="register-input-wrapper">
                <Field
                  id="datumRodjenja"
                  name="datumRodjenja"
                  type="date"
                  className="register-form-control"
                />
              </div>

              <ErrorMessage
                name="datumRodjenja"
                className="register-error"
                component="div"
              />
            </div>

            <div className="register-form-group">
              <label htmlFor="brojTelefona">Broj telefona:</label>

              <div className="register-input-wrapper">
                <Field
                  id="brojTelefona"
                  name="brojTelefona"
                  type="tel"
                  className="register-form-control"
                />
              </div>

              <ErrorMessage
                name="brojTelefona"
                className="register-error"
                component="div"
              />
            </div>

            <button type="submit" className="register-button">
              Registruj se
            </button>
          </>
        )}
      </Form>
    </Formik>
  );
};

export default RegisterPage;
