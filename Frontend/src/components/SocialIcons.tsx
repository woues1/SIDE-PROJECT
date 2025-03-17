const SocialIcons: React.FC = () => {
    return (
        <div className='flex gap-[20px] pt-3'>
            <a
                href="https://github.com/woues1"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className='text-2xl text-customGray'
            >
                <i className="fab fa-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/toni-hirvikallio-5a383a292/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="text-2xl text-customGray"
            >
                <i className="fab fa-linkedin"></i>
            </a>
            <a
                href="mailto:toni.hirvikallio@gmail.com"
                target="_blank"
                title="Gmail"
                className="text-2xl text-customGray"
            >
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    )
}

export default SocialIcons
