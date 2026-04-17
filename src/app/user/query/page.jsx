"use client";
import React, { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      
      if (selectedFile.size > 2 * 1024 * 1024) {
        alert("File size should be less than 2MB");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comment) {
      alert("All fields are required!");
      return;
    }

    console.log({
      ...formData,
      file: file ? file.name : null,
    });

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      comment: "",
    });
    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Query Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Comment</label>
            <textarea
              name="comment"
              placeholder="Write your message..."
              value={formData.comment}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block mb-1 font-medium">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2 file:bg-amber-500 file:text-white file:border-0 file:rounded file:px-3 file:py-1 file:cursor-pointer"
            />

            {file && (
              <p className="text-sm text-gray-600 mt-2">
                Selected: {file.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default Page;