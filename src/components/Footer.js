import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-inner'>
                    <div className='footer-logo'>
                        <img src='https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/IMG_7537_web.jpg' />
                        <p>Thank you for visiting.</p>
                    </div>
                    <ul className='footer-list'>
                        <li>Email: kenichiderumo@gmail.com</li>
                        <li><a href="https://www.linkedin.com/in/ken-obata/" target="_blank">LinkedIn</a> </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
