import react from 'react';

class About extends react.Component {
    render() {
        return(
            <div className="about-section">
                <div className="inner-container">
                    <h1 className='text-blue-500'>About Us</h1>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
                    veritatis ut! Dolor dolorem quasi temporibus sequi, minus dolores similique
                    dolore. Laboriosam provident, exercitationem quae labore aliquam odit nisi
                    quas nulla.</p>
                    <div className="skills">
                        <span className='text-blue-400'>
                            Web design
                        </span>
                        <span className='text-blue-400'>
                            Machine learning develop
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