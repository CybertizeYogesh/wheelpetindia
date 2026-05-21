"use client";

import { useMemo, useState } from "react";
import { formFields } from "@/data/siteData";
import styles from "@/styles/sections.module.css";

const initialValues = formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {});

export default function QuoteForm({ compact = false, title = "Book Now!" }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function validate(nextValues) {
    const nextErrors = {};
    formFields.forEach((field) => {
      if (field.required && !nextValues[field.name].trim()) {
        nextErrors[field.name] = "This field is required.";
      }
    });
    if (nextValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Please enter a valid Email address.";
    }
    if (nextValues.phone && nextValues.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Please enter a valid mobile number.";
    }
    return nextErrors;
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("loading");
    window.setTimeout(() => {
      console.info("Sharma Packers Movers quote lead", values);
      setStatus("success");
      setValues(initialValues);
    }, 650);
  }

  return (
    <form className={styles.formGrid} onSubmit={onSubmit} noValidate>
      {title ? <h2>{title}</h2> : null}
      {formFields.map((field) => (
        <label key={field.name}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.label}
            value={values[field.name]}
            onChange={onChange}
            min={field.type === "date" ? today : undefined}
            aria-invalid={errors[field.name] ? "true" : "false"}
          />
          {errors[field.name] ? <span className={styles.error}>{errors[field.name]}</span> : null}
        </label>
      ))}
      <button className="btn" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : compact ? "Submit Button" : "Submit Button"}
      </button>
      {status === "success" ? <div className={styles.success}>Thank you. Our relocation team will contact you shortly.</div> : null}
    </form>
  );
}
