import React from 'react'

const Contact = () => {
    return (
        <div className={`container mx-auto px-4 py-8`}>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
                Welcome to Ekomm Ecommerce Service. We are here to assist you with any questions or concerns you may have.
                Please feel free to reach out to us through the contact details provided below.
            </p>

            <div class="mb-4">
                <h3 class="text-lg font-semibold">Ekomm Ecommerce Service</h3>
                <p>
                    <strong>Address:</strong> 123 E-commerce Street, Suite 456, Shopping City, EC 78910 <br />
                    <strong>Phone:</strong> +1 (234) 567-8900
                </p>
            </div>

            <p className="text-gray-700">
                Our support team is available from Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24
                hours. Thank you for choosing Ekomm Ecommerce Service!
            </p>

        </div>
    )
}

export default Contact

