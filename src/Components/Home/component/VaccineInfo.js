// VaccineInfo.js
import React, { useState } from "react";

// Descriptions for each vaccine
const vaccineDescriptions = {
  Sinopharm: `
    **Sinopharm** is an inactivated virus vaccine developed by China National Pharmaceutical Group (CNBG).
    - **Type**: Inactivated virus vaccine.
    - **Efficacy**: 79% in clinical trials.
    - **Storage**: Normal refrigerator temperatures (2-8°C).
    - **Side Effects**: Pain, fever, fatigue, muscle pain (rare severe effects).
    `,
  Moderna: `
    **Moderna** is an mRNA vaccine developed by Moderna, Inc.
    - **Type**: mRNA vaccine.
    - **Efficacy**: Over 94% efficacy.
    - **Storage**: Ultra-cold storage (-20°C).
    - **Side Effects**: Soreness, headache, fever (rare myocarditis).
    `,
  Pfizer: `
    **Pfizer-BioNTech** is an mRNA-based vaccine developed by Pfizer and BioNTech.
    - **Type**: mRNA vaccine.
    - **Efficacy**: Around 95% efficacy.
    - **Storage**: Ultra-cold storage (-70°C).
    - **Side Effects**: Pain, tiredness, headache (rare myocarditis).
    `,
};

// A reusable card component for displaying vaccine information
const VaccineCard = ({ title, description }) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="bg-blue-500 text-white p-4 text-center font-bold text-2xl">
        {title}
      </div>
      <div className="p-6 text-gray-700">
        <p className="whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
};

const VaccineInfo = () => {
  const [vaccineDescription, setVaccineDescription] = useState(""); // State for vaccine descriptions

  const vaccines = [
    { id: "Sinopharm", title: "Sinopharm" },
    { id: "Moderna", title: "Moderna" },
    { id: "Pfizer", title: "Pfizer" },
  ];

  // Handle the selection of the vaccine from the dropdown
  const handle_selection = (e) => {
    const selectedVaccine = vaccines.find(
      (vaccine) => vaccine.id === e.target.value
    ).title;
    setVaccineDescription(vaccineDescriptions[selectedVaccine]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10 mb-6 text-gray-800">
        Vaccine Information
      </h1>

      <div className="mb-6">
        <select
          onChange={handle_selection}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Vaccine</option>
          {vaccines.map((vaccine) => (
            <option key={vaccine.id} value={vaccine.id}>
              {vaccine.title}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected vaccine description in a card */}
      {vaccineDescription ? (
        <VaccineCard
          title="Vaccine Description"
          description={vaccineDescription}
        />
      ) : (
        <p className="text-gray-600">
          Please select a vaccine to see the details.
        </p>
      )}
    </div>
  );
};

export default VaccineInfo;
