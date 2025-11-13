import { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { FormInput } from '../components/form/FormInput';
import { FormSelect } from '../components/form/FormSelect';
import { FormTextarea } from '../components/form/FormTextarea';
import { FormRadio } from '../components/form/FormRadio';
import { FormCheckbox } from '../components/form/FormCheckbox';
import { ChildDetailsForm } from '../components/form/ChildDetailsForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ApplyNowPageProps {
  onNavigate: (path: string) => void;
}

interface ChildFormData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  intendedStartDate: string;
}

export function ApplyNowPage({ onNavigate }: ApplyNowPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.1 });
  
  // Form state - Group A: Parent/Guardian Details
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [nationality, setNationality] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [preferredContact, setPreferredContact] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('');
  
  // Form state - Group B: Children Details
  const [numberOfChildren, setNumberOfChildren] = useState('');
  const [childrenData, setChildrenData] = useState<ChildFormData[]>([
    { firstName: '', lastName: '', gender: '', dateOfBirth: '', intendedStartDate: '' }
  ]);
  
  // Form state - Group C: Tell us more
  const [enquiryDetails, setEnquiryDetails] = useState('');
  
  // Form state - Group D: Visit our school
  const [wantToVisit, setWantToVisit] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [interestedInBoarding, setInterestedInBoarding] = useState('');
  const [campusOfInterest, setCampusOfInterest] = useState('');
  
  // Form state - Group E: Marketing Consent
  const [marketingConsent, setMarketingConsent] = useState(false);
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle number of children change
  const handleNumberOfChildrenChange = (value: string) => {
    setNumberOfChildren(value);
    const count = parseInt(value) || 0;
    const newChildrenData = Array.from({ length: count }, (_, i) => 
      childrenData[i] || { firstName: '', lastName: '', gender: '', dateOfBirth: '', intendedStartDate: '' }
    );
    setChildrenData(newChildrenData);
  };

  // Handle child data change
  const handleChildDataChange = (index: number, data: ChildFormData) => {
    const newChildrenData = [...childrenData];
    newChildrenData[index] = data;
    setChildrenData(newChildrenData);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Group A validation
    if (!title) newErrors.title = 'Title is required';
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!telephone) newErrors.telephone = 'Contact telephone is required';
    if (!countryOfResidence) newErrors.countryOfResidence = 'Country/Region is required';
    
    // Group B validation
    if (!numberOfChildren) {
      newErrors.numberOfChildren = 'Please specify number of children';
    } else {
      childrenData.forEach((child, index) => {
        if (!child.firstName) newErrors[`child${index}FirstName`] = 'Required';
        if (!child.lastName) newErrors[`child${index}LastName`] = 'Required';
        if (!child.gender) newErrors[`child${index}Gender`] = 'Required';
        if (!child.dateOfBirth) newErrors[`child${index}DateOfBirth`] = 'Required';
        if (!child.intendedStartDate) newErrors[`child${index}IntendedStartDate`] = 'Required';
      });
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally submit to your backend
      console.log('Form submitted:', {
        parentDetails: { title, firstName, lastName, companyName, email, telephone, nationality, countryOfResidence, preferredContact, hearAboutUs },
        children: childrenData,
        enquiryDetails,
        visitDetails: { wantToVisit, preferredTime, preferredDate, interestedInBoarding, campusOfInterest },
        marketingConsent
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', onClick: () => onNavigate('/') },
    { label: 'Admissions', onClick: () => onNavigate('/admissions') },
    { label: 'Apply Now' }
  ];

  if (submitted) {
    return (
      <div className="bg-[#fffae9]">
        {/* Hero Section with Breadcrumbs */}
        <section className="relative min-h-[40vh] md:min-h-[65vh] bg-[#1a5336] overflow-hidden flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a5336] to-[#14432b]" />
          
          {/* Breadcrumbs inside Hero */}
          <nav 
            className="relative z-20 w-full px-4 md:px-20 pt-3 pb-2"
            style={{ marginTop: '76px' }}
            aria-label="Breadcrumb"
          >
            <div className="max-w-[1200px] mx-auto flex items-center gap-2 flex-wrap">
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />}
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="font-['Lexend_Deca'] text-sm text-[#fffae9]/90 hover:text-[#fffae9] transition-colors focus:outline-none focus:text-[#fffae9] focus:underline whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="font-['Lexend_Deca'] text-sm text-[#fffae9]/70 whitespace-nowrap">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          <div className="relative z-10 w-full px-4 md:px-20 max-w-[1200px] mx-auto flex-1 flex flex-col justify-center pb-16 md:pb-24 pt-4">
            <motion.h1
              className="font-['Crimson_Pro'] text-white text-[32px] md:text-[56px] mb-4 max-w-[22ch]"
              style={{ lineHeight: '1.1' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Thank You
            </motion.h1>
          </div>
        </section>
        
        {/* Success Message */}
        <section className="py-16 md:py-24 px-4 md:px-20">
          <div className="max-w-[760px] mx-auto text-center">
            <div className="w-20 h-20 bg-[#1a5336] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-6">
              Enquiry Submitted Successfully
            </h2>
            
            <p className="font-['Lexend_Deca'] text-[#212121] mb-4" style={{ lineHeight: '1.5' }}>
              Thank you for your interest in LHBS. We have received your enquiry and a member of our admissions team will be in touch with you shortly.
            </p>
            
            <p className="font-['Lexend_Deca'] text-[#666] mb-8" style={{ lineHeight: '1.5' }}>
              Please check your email for a confirmation message. If you don't receive it within 24 hours, please contact us directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/')}
                className="px-8 h-12 bg-[#1a5336] text-white font-['Arial'] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
              >
                Return to Home
              </button>
              
              <button
                onClick={() => onNavigate('/contact/book-tour')}
                className="px-8 h-12 border-2 border-[#1a5336] text-[#1a5336] font-['Arial'] font-bold hover:bg-[#1a5336] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
              >
                Book a School Tour
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#fffae9]">
      {/* Hero Section with Breadcrumbs */}
      <section className="relative min-h-[40vh] md:min-h-[65vh] bg-[#1a5336] overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a5336] to-[#14432b]" />
        
        {/* Breadcrumbs inside Hero */}
        <nav 
          className="relative z-20 w-full px-4 md:px-20 pt-3 pb-2"
          style={{ marginTop: '76px' }}
          aria-label="Breadcrumb"
        >
          <div className="max-w-[1200px] mx-auto flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4 text-[#fffae9]/70" />}
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="font-['Lexend_Deca'] text-sm text-[#fffae9]/90 hover:text-[#fffae9] transition-colors focus:outline-none focus:text-[#fffae9] focus:underline whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="font-['Lexend_Deca'] text-sm text-[#fffae9]/70 whitespace-nowrap">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-20 max-w-[1200px] mx-auto flex-1 flex flex-col justify-center pb-16 md:pb-24 pt-4">
          <motion.h1
            className="font-['Crimson_Pro'] text-white text-[32px] md:text-[56px] mb-4 max-w-[22ch]"
            style={{ lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Apply Now
          </motion.h1>
          
          <motion.p
            className="font-['Lexend_Deca'] text-white/95 text-[16px] md:text-[18px] max-w-[65ch]"
            style={{ lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start your LHBS journey with our simple application process
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-12 md:py-16 px-4 md:px-20">
        <motion.div
          className="max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 text-center">
            <h2 className="font-['Crimson_Pro'] text-[32px] md:text-[40px] text-[#1a5336] mb-4">
              Enquiry Form
            </h2>
            <p className="font-['Lexend_Deca'] text-[#666]" style={{ lineHeight: '1.5' }}>
              Please complete the form below and our admissions team will be in touch shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="bg-white p-6 md:p-10 border border-[#d0d0d0]">
            {/* Group A: Parent/Guardian Details */}
            <div className="mb-10 md:mb-12">
              <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-6 pb-3 border-b-2 border-[#FABA1E]">
                Parent/Guardian Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormSelect
                  label="Title"
                  name="title"
                  value={title}
                  onChange={setTitle}
                  options={[
                    { value: 'mr', label: 'Mr' },
                    { value: 'mrs', label: 'Mrs' },
                    { value: 'ms', label: 'Ms' },
                    { value: 'dr', label: 'Dr' },
                    { value: 'prof', label: 'Prof' }
                  ]}
                  required
                  error={errors.title}
                />
                
                <FormInput
                  label="First name"
                  name="firstName"
                  value={firstName}
                  onChange={setFirstName}
                  required
                  error={errors.firstName}
                />
                
                <FormInput
                  label="Last name"
                  name="lastName"
                  value={lastName}
                  onChange={setLastName}
                  required
                  error={errors.lastName}
                />
                
                <FormInput
                  label="Company name"
                  name="companyName"
                  value={companyName}
                  onChange={setCompanyName}
                  helpText="Optional"
                />
                
                <FormInput
                  label="Email address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  error={errors.email}
                />
                
                <FormInput
                  label="Contact telephone number"
                  name="telephone"
                  type="tel"
                  value={telephone}
                  onChange={setTelephone}
                  required
                  error={errors.telephone}
                />
                
                <FormInput
                  label="Nationality"
                  name="nationality"
                  value={nationality}
                  onChange={setNationality}
                />
                
                <FormSelect
                  label="Country/Region of residence"
                  name="countryOfResidence"
                  value={countryOfResidence}
                  onChange={setCountryOfResidence}
                  options={[
                    { value: 'vn', label: 'Vietnam' },
                    { value: 'us', label: 'United States' },
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'sg', label: 'Singapore' },
                    { value: 'jp', label: 'Japan' },
                    { value: 'kr', label: 'South Korea' },
                    { value: 'cn', label: 'China' },
                    { value: 'au', label: 'Australia' },
                    { value: 'other', label: 'Other' }
                  ]}
                  required
                  error={errors.countryOfResidence}
                />
              </div>
              
              <div className="mt-6">
                <FormRadio
                  label="Preferred contact method"
                  name="preferredContact"
                  value={preferredContact}
                  onChange={setPreferredContact}
                  options={[
                    { value: 'phone', label: 'Phone' },
                    { value: 'email', label: 'Email' }
                  ]}
                  layout="horizontal"
                />
              </div>
              
              <div className="mt-6">
                <FormSelect
                  label="How did you hear about us?"
                  name="hearAboutUs"
                  value={hearAboutUs}
                  onChange={setHearAboutUs}
                  options={[
                    { value: 'agent', label: 'Agent' },
                    { value: 'company', label: 'Company recommendation' },
                    { value: 'advisor', label: 'Educational advisor' },
                    { value: 'online', label: 'Online advert' },
                    { value: 'referral-word', label: 'Referral (word-of-mouth)' },
                    { value: 'referral-school', label: 'Referral (from another school)' },
                    { value: 'sibling', label: 'Sibling already attending' }
                  ]}
                />
              </div>
            </div>

            {/* Group B: Children Details */}
            <div className="mb-10 md:mb-12">
              <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-6 pb-3 border-b-2 border-[#FABA1E]">
                Children Details
              </h3>
              
              <div className="mb-6">
                <FormSelect
                  label="Number of children"
                  name="numberOfChildren"
                  value={numberOfChildren}
                  onChange={handleNumberOfChildrenChange}
                  options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' }
                  ]}
                  required
                  error={errors.numberOfChildren}
                />
              </div>
              
              {numberOfChildren && (
                <div className="space-y-6">
                  {childrenData.map((child, index) => (
                    <ChildDetailsForm
                      key={index}
                      index={index}
                      data={child}
                      onChange={handleChildDataChange}
                      errors={errors}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Group C: Tell us more */}
            <div className="mb-10 md:mb-12">
              <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-6 pb-3 border-b-2 border-[#FABA1E]">
                Tell Us More
              </h3>
              
              <FormTextarea
                label="Tell us more about your enquiry"
                name="enquiryDetails"
                value={enquiryDetails}
                onChange={setEnquiryDetails}
                placeholder="Please share details about your interests such as facilities, curriculum, fees, specific programs, etc."
                rows={6}
                maxLength={1000}
                showCharCount
                helpText="Optional - Share any specific questions or interests"
              />
            </div>

            {/* Group D: Visit our school */}
            <div className="mb-10 md:mb-12">
              <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-6 pb-3 border-b-2 border-[#FABA1E]">
                Visit Our School
              </h3>
              
              <div className="space-y-6">
                <FormRadio
                  label="Would you like to visit us?"
                  name="wantToVisit"
                  value={wantToVisit}
                  onChange={setWantToVisit}
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'not-now', label: 'Not at the moment' }
                  ]}
                  layout="horizontal"
                />
                
                {wantToVisit === 'yes' && (
                  <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-6">
                    <FormSelect
                      label="Preferred time"
                      name="preferredTime"
                      value={preferredTime}
                      onChange={setPreferredTime}
                      options={[
                        { value: 'morning', label: 'Morning' },
                        { value: 'afternoon', label: 'Afternoon' }
                      ]}
                    />
                    
                    <FormInput
                      label="Preferred date"
                      name="preferredDate"
                      type="date"
                      value={preferredDate}
                      onChange={setPreferredDate}
                    />
                  </div>
                )}
                
                <FormSelect
                  label="Are you interested in Boarding?"
                  name="interestedInBoarding"
                  value={interestedInBoarding}
                  onChange={setInterestedInBoarding}
                  options={[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                  ]}
                />
                
                <FormSelect
                  label="Campus of interest"
                  name="campusOfInterest"
                  value={campusOfInterest}
                  onChange={setCampusOfInterest}
                  options={[
                    { value: 'not-sure', label: 'Not sure' },
                    { value: 'hanoi-main', label: 'Hanoi Main Campus' },
                    { value: 'hcmc', label: 'Ho Chi Minh City Campus' },
                    { value: 'danang', label: 'Da Nang Campus' }
                  ]}
                  helpText="Select the campus you're most interested in visiting"
                />
              </div>
            </div>

            {/* Group E: Marketing Consent */}
            <div className="mb-10">
              <h3 className="font-['Crimson_Pro'] text-[24px] md:text-[28px] text-[#1a5336] mb-6 pb-3 border-b-2 border-[#FABA1E]">
                Stay Connected
              </h3>
              
              <FormCheckbox
                label="I'd like to receive updates about news, events and admissions"
                name="marketingConsent"
                checked={marketingConsent}
                onChange={setMarketingConsent}
              />
              
              <p className="font-['Lexend_Deca'] text-xs text-[#666] mt-4" style={{ lineHeight: '1.5' }}>
                By submitting this form, you agree to our{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy-policy')}
                  className="text-[#1a5336] underline hover:text-[#14432b] focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
                >
                  Privacy Policy
                </button>
                {' '}and{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('/cookie-policy')}
                  className="text-[#1a5336] underline hover:text-[#14432b] focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
                >
                  Cookie Policy
                </button>
                . We are committed to protecting your personal information.
              </p>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-[#d0d0d0]">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 h-12 bg-[#1a5336] text-white font-['Arial'] font-bold hover:bg-[#14432b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
              >
                Submit Enquiry
              </button>
              
              <button
                type="button"
                onClick={() => onNavigate('/contact/contact-us')}
                className="font-['Lexend_Deca'] text-sm text-[#1a5336] underline hover:text-[#14432b] focus:outline-none focus:ring-2 focus:ring-[#1a5336]"
              >
                Or contact admissions directly
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
