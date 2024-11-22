export default function ContactSection() {
    return (
      <section className="py-16   bg-gradient-to-tr from-amber-300  bg-green-400">
        <div className="container mx-auto  px-2 md:px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 font-grotesk">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Address Section */}
            <div className="bg-amber-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 font-grotesk underline">Our Address</h3>
              <p className="text-gray-600 font-sora">
              Yennehole, Karkala Taluk  <br />
              -Udupi District, Karnataka, 574101
              </p>
            </div>
  
            {/* Mobile Number Section */}
            <div className="bg-amber-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 font-grotesk underline ">Call Us</h3>
              <p className="text-gray-600 font-sora">
                <strong>Mobile Number:</strong> <br />
                <a href="tel:+123456789" className="text-blue-500 hover:text-blue-700">
                9916690889 ,9845838931
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }