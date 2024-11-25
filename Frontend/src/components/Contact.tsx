
function Contact() {
    return (
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold text-center mb-8">Contact Me</h2>
          <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  
