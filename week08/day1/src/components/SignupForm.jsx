import { useState } from "react";

export function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const [errors, setErrors] = useState({});

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (form.name.length < 2) {
      newErrors.name = "Name is too short";
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Invalid email";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password is too short";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("Submitted:", form);
  }
  const canSubmit = form.name && form.email && form.password;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        placeholder="name"
        onChange={(e) => updateField("name", e.target.value)}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <input
        type="text"
        value={form.email}
        placeholder="email"
        onChange={(e) => updateField("email", e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <input
        type="password"
        value={form.password}
        placeholder="password"
        onChange={(e) => updateField("password", e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button type="submit" disabled={!canSubmit}>
        {" "}
        Sign Up
      </button>
    </form>
  );
}
