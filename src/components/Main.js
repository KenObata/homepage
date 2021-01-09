import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
    render() {
        const lessonList = [
            {
                name: 'Resume and who I am',
                image: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/resume.png',
                introduction: 'My current job is Software Dev Co-op at D-Wave System (R&D Division of the company). After my co-op ends, I will finish my degree in CS & Math from University of Victoria.',
                URL: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/Ken+Obata+Resume.pdf',
                sourcecode: '',
            },
            {
                name: 'Launched Web App by Go',
                image: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/consolidated_job_portal.png',
                introduction: 'Designed and built a web service to get/post job openings from multiple platforms by Golang. Users can track their application. Tech Stacks are Golang, Postgres, Redis, JavaScript, AWS-EKS, Kubernetes, and Docker.',
                URL: 'http://canadianintern.link/',
                sourcecode: 'https://github.com/KenObata/Golang-Web-Scraping',
            },//ahttps://s3-ap-northeast-1.amazonaws.com/canadianintern.link/consolidated_job_portal.png
            {
                name: 'Bitcoin trade bot',
                image: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/golang.png',
                introduction: 'I have developed a bitcoin trading bot by golang.',
                URL: 'https://github.com/KenObata/golang-bitcoin-trading-bot',
                sourcecode: 'https://github.com/KenObata/golang-bitcoin-trading-bot',
            },
            {
                name: 'Academic Research',
                image: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/research.png',
                introduction: 'During Summer 2020, I have done a research project, investigating about Randomized Algorithm and Probability Analysis.',
                URL: 'https://s3-ap-northeast-1.amazonaws.com/canadianintern.link/Obata.pdf',
                sourcecode: '',
            },
        ];

        return (
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='copy-container'>
                        <h1>Welcome to Ken Obata's home page.</h1>
                        <h2>I'm currently working as a software developer co-op at D-Wave Systems in Burnaby BC.
                        I am also studying Computer Science & Mathematics at University of Victoria.
                        </h2>
                    </div>
                    <div className='lesson-container'>
                        <h3>Here is information about Me and my products.</h3>
                        {lessonList.map((lessonItem) => {
                            return (
                                <Lesson
                                    name={lessonItem.name}
                                    image={lessonItem.image}
                                    introduction={lessonItem.introduction}
                                    url={lessonItem.URL}
                                    sourcecode={lessonItem.sourcecode}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
