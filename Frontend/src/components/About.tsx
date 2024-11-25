
function About() {
    return (
        <section className="py-24 bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-6 md:px-12">

                <h2 className="text-4xl font-semibold text-center mb-8">About Me</h2>

                <div className="lg:flex lg:space-x-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <p className="text-lg leading-relaxed mb-4">
                            Hi! I'm a passionate developer focused on building creative and responsive web applications. With a background in front-end development, I enjoy writing clean, efficient code and creating intuitive user interfaces.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I specialize in JavaScript and React, and I love learning new technologies to improve my skills. My goal is to deliver high-quality code and improve user experiences through thoughtful design and development.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold">Skills</h3>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>JavaScript</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>React</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>Node.js</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>Express</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>HTML & CSS</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-400 mr-2">✔</span>
                                    <span>Tailwind CSS</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="Profile Picture"
                            className="rounded-full w-48 h-48 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

