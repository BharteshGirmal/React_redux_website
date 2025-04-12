import { useForm } from "react-hook-form"; // Removed useFormik as it's not needed
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

  const onSubmit = async (data) => {
    console.log(data);
    // You can send the form data and file here
    if (selectedFile) {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("file", selectedFile);

      try {
        const response = await fetch("https://example.com/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("File uploaded successfully!");
        } else {
          alert("File upload failed.");
        }
      } catch (error) {
        alert("Error uploading file:", error);
      }
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Set the selected file to state
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title text-center">Sign Up</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                <b>Username</b>
              </label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is required for the form",
                  minLength: {
                    value: 5,
                    message: "Length of username should be greater than 5",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username should not be greater than 20",
                  },
                })}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              {errors.username && (
                <div className="text-danger">{errors.username.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password value is required",
                })}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                <b>Upload File</b>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
