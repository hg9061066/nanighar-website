export const submitToGoogleForm = async (formData: Record<string, string>) => {
  // Replace YOUR_FORM_ID with the long ID from your Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse";

  const data = new URLSearchParams();
  
  Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]); 
  });

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors", 
      body: data,
    });
    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false };
  }
};