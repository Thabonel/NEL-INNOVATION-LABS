import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    aiChallenge: '',
    timeline: '',
    budget: ''
  });

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

    // TODO: Implement actual form submission logic
    console.log('Form submitted:', formData);

    // Success message
    alert('Thank you for your interest! We\'ll analyze your requirements and respond within 24 hours with next steps.');

    // Reset form
    setFormData({
      companyName: '',
      email: '',
      aiChallenge: '',
      timeline: '',
      budget: ''
    });
  };

  return (
    <section id="contact-form" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                >
                  Send Project Details
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