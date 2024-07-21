import React from 'react';

function FAQs() {
  return (
    <div className=" mx-auto my-6">
      <div className="text-2xl font-bold mb-4">FAQs</div>
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold" id="what-happens-when-i-update-my-email-address-or-mobile-number-">
            What happens when I update my email address (or mobile number)?
          </h4>
          <p className="text-gray-600">
            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold" id="when-will-my-flipkart-account-be-updated-with-the-new-email-address-or-mobile-number-">
            When will my Flipkart account be updated with the new email address (or mobile number)?
          </h4>
          <p className="text-gray-600">
            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold" id="what-happens-to-my-existing-flipkart-account-when-i-update-my-email-address-or-mobile-number-">
            What happens to my existing Flipkart account when I update my email address (or mobile number)?
          </h4>
          <p className="text-gray-600">
            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold" id="does-my-seller-account-get-affected-when-i-update-my-email-address-">
            Does my Seller account get affected when I update my email address?
          </h4>
          <p className="text-gray-600">
            Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
