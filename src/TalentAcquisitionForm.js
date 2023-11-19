import React, { useState } from "react";
import Header from './Header'
const TalentAcquisitionForm = () => {
  // State for Basic Details
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dob: "",
  });

  // State for Document Collection
  const [documentCollection, setDocumentCollection] = useState({
    class10Marksheet: "",
    class12Marksheet: "",
    graduationMarksheet: "",
    postGraduationMarksheet: "",
    resumeCV: "",
    recommendationLetter: "",
    salarySlips: "",
    others: "",
  });

  // State for Statement of Purpose
  const [statementOfPurpose, setStatementOfPurpose] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  // State for Interview Availability
  const [interviewAvailability, setInterviewAvailability] = useState({
    interviewEmail: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  });
  const timeZones = [
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers",
    "Africa/Asmara",
    "Africa/Bamako",
    "Africa/Bangui",
    "Africa/Banjul",
    "Africa/Bissau",
    "Africa/Blantyre",
    // ... (other time zones)
    "UTC",
  ];

  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const handleTimeZoneChange = (e) => {
    setSelectedTimeZone(e.target.value);
  };
  const interviewTypes = ["On-site", "Virtual"];

  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data
    console.log("Form Submitted:", {
      basicDetails,
      documentCollection,
      statementOfPurpose,
      interviewAvailability,
    });
  };

  const [counter, setCounter] = useState(1);

  const sbmt = (e) => {
    e.preventDefault();
    setCounter((counter) => counter + 1);
  };
  const dsbmt = (e) => {
    e.preventDefault();
    setCounter((counter) => counter - 1);
  };
  return (
    <>
    <Header />
      <form className="Container" onSubmit={handleSubmit}>
        {/* Basic Details Section */}
        {counter === 1 && (
          <div className="sub-container">
            <h2>Basic Details</h2>
            <div className="same-line">
              <label>Name *</label>
              <input
                type="text"
                value={basicDetails.name}
                onChange={(e) =>
                  setBasicDetails({ ...basicDetails, name: e.target.value })
                }
                required
              />
            </div>
            <div className="same-line">
              <label>Email *</label>
              <input
                type="email"
                value={basicDetails.email}
                onChange={(e) =>
                  setBasicDetails({ ...basicDetails, email: e.target.value })
                }
                required
              />
            </div>
            <div className="same-line ">
              <label>Mobile Number</label>
              <input
                type="tel"
                value={basicDetails.mobileNumber}
                onChange={(e) =>
                  setBasicDetails({
                    ...basicDetails,
                    mobileNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="same-line lil">
              <label>Date Of Birth</label>
              <input
                type="date"
                value={basicDetails.dob}
                onChange={(e) =>
                  setBasicDetails({ ...basicDetails, dob: e.target.value })
                }
              />
            </div>
            {/* <button className="sub" type="submit" onClick={dsbmt}>
              Previous
            </button> */}
            <button className="sub" type="submit" onClick={sbmt}>
              Next
            </button>
          </div>
        )}

        {/* Document Collection Section */}
        {/* ... (similar structure to Basic Details) */}
        {counter === 2 && (
          <div className="sub-container" id="2">
            <h2>Document Collection Section</h2>
            <div className="same-line hid-label custom-file-input">
              <label>Class 10 Marksheet *</label>
              <input
                type="file"
                value={documentCollection.class10Marksheet}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    class10Marksheet: e.target.value,
                  })
                }
                placeholder="choose a file"
                required
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Class 12 Marksheet *</label>
              <input
                type="file"
                value={documentCollection.class12Marksheet}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    class12Marksheet: e.target.value,
                  })
                }
                placeholder="choose a file"
                required
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Graduation Marksheet *</label>
              <input
                type="file"
                value={documentCollection.graduationMarksheet}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    graduationMarksheet: e.target.value,
                  })
                }
                placeholder="choose a file"
                required
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Post Graduation Marksheet</label>
              <input
                type="file"
                value={documentCollection.postGraduationMarksheet}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    postGraduationMarksheet: e.target.value,
                  })
                }
                placeholder="choose a file"
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Resume/CV *</label>
              <input
                type="file"
                value={documentCollection.resumeCV}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    resumeCV: e.target.value,
                  })
                }
                placeholder="choose a file"
                required
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Letter Of Recommendation</label>
              <input
                type="file"
                value={documentCollection.recommendationLetter}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    recommendationLetter: e.target.value,
                  })
                }
                placeholder="choose a file"
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Salary Slips</label>
              <input
                type="file"
                value={documentCollection.salarySlips}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    salarySlips: e.target.value,
                  })
                }
                placeholder="choose a file"
              />
            </div>
            <div className="same-line hid-label custom-file-input">
              <label>Others</label>
              <input
                type="file"
                value={documentCollection.others}
                onChange={(e) =>
                  setDocumentCollection({
                    ...documentCollection,
                    others: e.target.value,
                  })
                }
                placeholder="choose a file"
              />
            </div>
            <button className="sub" type="submit" onClick={dsbmt}>
              Previous
            </button>
            <button className="sub" type="submit" onClick={sbmt}>
              Next
            </button>
          </div>
        )}

        {/* Statement of Purpose Section */}
        {/* ... (similar structure to Basic Details, but with textarea for each question) */}
        {counter === 3 && (
          <div className="sub-container" id="3">
            <h2>Statement of Purpose Section</h2>
            <div className="same-line input-text">
              <label>
                Tell me about a time you were asked to do something you had
                never done before. How did you react? What did you learn? *
              </label>
            </div>
            <div className="same-line input-text">
              <textarea
                rows="8"
                cols="90"
                type="text"
                value={statementOfPurpose.q1}
                onChange={(e) =>
                  setStatementOfPurpose({
                    ...statementOfPurpose,
                    q1: e.target.value,
                  })
                }
                maxlength="300"
                required
              />
            </div>
            <div className="same-line input-text">
              <label>
                Tell me about the last time something significant didn’t go
                according to plan at work. What was your role? What was the
                outcome? *
              </label>
              <textarea
                type="text"
                rows="8"
                cols="90"
                value={statementOfPurpose.q2}
                onChange={(e) =>
                  setStatementOfPurpose({
                    ...statementOfPurpose,
                    q2: e.target.value,
                  })
                }
                maxlength="300"
                required
              />
            </div>
            <div className="same-line input-text">
              <label>
                What are the three things that are most important to you in a
                job? *
              </label>
              <textarea
                type="text"
                rows="8"
                cols="90"
                value={statementOfPurpose.q3}
                onChange={(e) =>
                  setStatementOfPurpose({
                    ...statementOfPurpose,
                    q3: e.target.value,
                  })
                }
                maxlength="300"
                required
              />
            </div>
            <button className="sub" type="submit" onClick={dsbmt}>
              Previous
            </button>
            <button className="sub" type="submit" onClick={sbmt}>
              Next
            </button>
          </div>
        )}

        {/* Interview Availability Section */}
        {/* ... (similar structure to Basic Details, but with additional fields) */}
        {counter === 4 && (
          <div className="sub-container" id="4">
            <h2>Interview Availability Section</h2>
            <div className="same-line">
              <label>Email *</label>
              <input
                type="email"
                value={interviewAvailability.interviewEmail}
                onChange={(e) =>
                  setInterviewAvailability({
                    ...interviewAvailability,
                    interviewEmail: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="same-line">
              <label>Location *</label>
              <input
                type="text"
                value={interviewAvailability.location}
                onChange={(e) =>
                  setInterviewAvailability({
                    ...interviewAvailability,
                    location: e.target.value,
                  })
                }
              />
            </div>
            <div className="same-line">
              <label>Interview Date *</label>
              <input
                type="date"
                value={interviewAvailability.interviewDate}
                onChange={(e) =>
                  setInterviewAvailability({
                    ...interviewAvailability,
                    interviewDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="same-line">
              <label>Interview Time *</label>
              <input
                type="time"
                value={interviewAvailability.interviewEmail}
                onChange={(e) =>
                  setInterviewAvailability({
                    ...interviewAvailability,
                    interviewEmail: e.target.value,
                  })
                }
              />
            </div>

            <div className="same-line">
              <label htmlFor="timezoneDropdown">Select a Time Zone:</label>
              <select
                id="timezoneDropdown"
                style={{ width: "10rem", height: "2.5rem" }}
                value={selectedTimeZone}
                onChange={handleTimeZoneChange}
              >
                <option style={{ margin: "30px" }} value="">
                  Select a time zone
                </option>
                {timeZones.map((timezone, index) => (
                  <option
                    key={index}
                    style={{ margin: "30px" }}
                    value={timezone}
                  >
                    {timezone}
                  </option>
                ))}
              </select>
              {/* <p>Selected Time Zone: {selectedTimeZone}</p> */}
            </div>
            <div className="same-line">
              <label htmlFor="interviewTypeDropdown">
                Select Interview Type:
              </label>
              <select
                id="interviewTypeDropdown"
                value={selectedType}
                onChange={handleTypeChange}
                style={{ width: "10rem", height: "2.5rem" }}
              >
                <option value="">Select interview type</option>
                {interviewTypes.map((type, index) => (
                  <option key={type} style={{ margin: "30px" }} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="sub"
              type="submit"
              // style={{ backgroundColor: "blue" }}
              onClick={dsbmt}
            >
              Previous
            </button>
            <button className="sub" type="submit" onSubmit={handleSubmit}>
              Submit
            </button>
          </div>
        )}
        {/* Submit Button */}
      </form>
    </>
  );
};

export default TalentAcquisitionForm;
