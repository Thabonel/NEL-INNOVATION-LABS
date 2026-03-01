import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    aiChallenge: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.companyName || !formData.email || !formData.aiChallenge) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Encode form data for Netlify
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    // Submit to Netlify
    const submitData = {
      "form-name": "contact",
      "companyName": formData.companyName,
      "email": formData.email,
      "aiChallenge": formData.aiChallenge,
      "timeline": formData.timeline || "",
      "budget": formData.budget || ""
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(submitData)
    })
    .then(() => {
      // Don't check response.ok - Netlify Forms may not return standard 200
      setIsSubmitted(true);
      setIsSubmitting(false);
      console.log('Form submitted successfully:', submitData);
    })
    .catch((error) => {
      alert('Form submission failed. Please try again.');
      setIsSubmitting(false);
      console.error('Form submission error:', error);
    });
  };

  // Success state
  if (isSubmitted) {
    return (
      <section id="contact-form" className="section-spacing bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="space-y-8">
                <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <div className="text-3xl font-bold text-bg-primary">✓</div>
                </div>

                <div>
                  <h2 className="headline-card mb-4">Thank You!</h2>
                  <p className="body-large text-text-secondary mb-6">
                    Your project inquiry has been received successfully. We'll analyze your requirements and respond within
                    <span className="text-accent"> 24 hours</span> with next steps.
                  </p>

                  {/* Show submitted details */}
                  <div className="bg-bg-primary p-6 rounded-lg border border-border mb-6 text-left">
                    <h3 className="text-text-primary font-semibold mb-4">Submission Details:</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-accent font-medium">Company:</span> {formData.companyName}</div>
                      <div><span className="text-accent font-medium">Email:</span> {formData.email}</div>
                      <div><span className="text-accent font-medium">AI Challenge:</span> {formData.aiChallenge}</div>
                      {formData.timeline && <div><span className="text-accent font-medium">Timeline:</span> {formData.timeline}</div>}
                      {formData.budget && <div><span className="text-accent font-medium">Budget:</span> {formData.budget}</div>}
                    </div>
                  </div>

                  <p className="body-base text-text-secondary">
                    Our team will review your AI challenge and get back to you at <span className="text-accent">{formData.email}</span>
                    with a tailored approach for your project.
                  </p>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block font-semibold mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="aiChallenge" className="block font-semibold mb-2">
                  What's your biggest AI challenge? *
                </label>
                <textarea
                  id="aiChallenge"
                  name="aiChallenge"
                  value={formData.aiChallenge}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input resize-none"
                  placeholder="e.g., We need to automate document processing for 50,000 files daily, or we want to add intelligent search to our platform..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block font-semibold mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="form-input"
                    disabled={isSubmitting}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (1-3 months)</option>
                    <option value="near-term">Near-term (3-6 months)</option>
                    <option value="planned">Planned (6-12 months)</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="form-input"
                    disabled={isSubmitting}
                  >
                    <option value="">Select budget</option>
                    <option value="under-50k">Under $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k-plus">$250k+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Details'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;