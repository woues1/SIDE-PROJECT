import SkillsDisplay from "./SkillsDisplay";

function About() {

    return (
        <section className='py-24 min-h-screen bg-gray-100  text-gray-900 dark:bg-gray-900 dark:text-white' >
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
                        <SkillsDisplay />
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                            alt="Placeholder profile picture"
                            className="rounded-full w-48 h-48 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

