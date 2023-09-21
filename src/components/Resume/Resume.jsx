// A4Component.jsx
import React, { useState } from 'react';



function Resume(props) {
  
  let details = props.detail;


  return (
    <div class=" bg-white p-0 w-full h-full box-border shadow-lg">
 <div className="grid grid-cols-12 gap-4 h-full ">
  {/* Left Sidebar */}
  <div className="col-span-4 bg-gray-200 p-4">
    <div className="text-center">
      {/* Your profile picture */}
      <img src="profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
      <h1 className="text-xl font-semibold mt-4">{details.personalDetails.name}</h1>
      <p className="text-gray-600">Your Profession</p>
    </div>
    {/* Contact Information */}
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Contact</h2>
      <p>Email: {details.personalDetails.email}</p>
      <p>Phone: {details.personalDetails.phone}</p>
      <p>LinkedIn: linkedin.com/in/yourprofile</p>
    </div>
  </div>

  {/* Main Content */}
  <div className="col-span-8 bg-white p-4 rounded-lg">
    {/* Summary */}
    <section>
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p>
        A highly motivated and skilled professional with experience in web development and machine learning.
        Strong problem-solving abilities and a passion for staying up-to-date with the latest technology trends.
      </p>
    </section>

    {/* Education */}
    <section className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      <div>
        <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
        <p>University Name, Graduation Year</p>
      </div>
      {/* Add more education entries if needed */}
    </section>

    {/* Experience */}
    <section className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      <div>
        <h3 className="font-semibold">Software Engineer</h3>
        <p>Company Name, Start Date - End Date</p>
        <ul className="list-disc pl-6">
          <li>Developed and maintained web applications.</li>
          <li>Collaborated with cross-functional teams to deliver projects on time.</li>
          {/* Add more experience details if needed */}
        </ul>
      </div>
    </section>
  </div>
</div>

  </div>
  
  );
}

export default Resume;
