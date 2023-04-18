import react from 'react';

class About extends react.Component {
    render() {
        return(
            <div className="about-section">
                <div className="inner-container">
                    <h1 className='text-blue-500'>About Us</h1>
                    <p className='text-white'>In this web application, the content used is merely a copy of the company Airbnb, with the aim of personal development in software development. Therefore, this project does not aim to compete with the company Airbnb. It should be noted that the use of Airbnb's content is for educational and personal development purposes only and is not intended to be used illegally or without permission.

It is important to highlight that the use of content for educational and personal development purposes is a common practice in the software and technology industry and can be beneficial for individual learning and industry innovation.</p>
                    <div className="skills">
                        <span className='text-blue-400'>
                            Web design
                        </span>
                        <span className='text-blue-400'>
                            Koderx developers
                        </span>
                        <span className='text-blue-400'>
                            Applications desktop develop
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;