const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ================================
// RESEND
// ================================
const resend = new Resend(process.env.RESEND_API_KEY);

// ================================
// HOME
// ================================
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running");
});

// ================================
// CONTACT FORM
// ================================
app.post("/api/contact", async (req, res) => {
  try {
    const { Name, Email, Service, Message } = req.body;

    if (!Name || !Email || !Message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required",
      });
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: Email,
      subject: `New Portfolio Contact - ${Name}`,
      text: `
Name: ${Name}
Email: ${Email}
Service: ${Service || "Not specified"}

Message:
${Message}
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

// ================================
// JOB OPPORTUNITY FORM
// ================================
app.post("/api/job-opportunity", async (req, res) => {
  try {
    const {
      Company,
      RecruiterName,
      Email,
      JobRole,
      JobType,
      WorkMode,
      Location,
      Salary,
      Message,
    } = req.body;

    if (!Company || !RecruiterName || !Email || !JobRole || !Message) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

   const result = await resend.emails.send({
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  replyTo: Email,
  subject: `New Job Opportunity - ${JobRole} - ${Company}`,
  text: `
NEW JOB OPPORTUNITY

Company: ${Company}
Recruiter / HR: ${RecruiterName}
HR Email: ${Email}

Job Role: ${JobRole}
Job Type: ${JobType || "Not specified"}
Work Mode: ${WorkMode || "Not specified"}
Location: ${Location || "Not specified"}
Salary / CTC: ${Salary || "Not specified"}

Job Description:
${Message}
  `,
});

console.log("RESEND RESULT:", result);
    res.json({
      success: true,
      message: "Job opportunity sent successfully!",
    });

  } catch (error) {
    console.error("Job opportunity email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send job opportunity",
    });
  }
});

// ================================
// START SERVER
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});