import React from 'react'




const About = (props) => {


return (
    <>
        <div style={{color:props.mode==="dark"?'white':'black',background:props.mode==="dark"?'grey':'white'}} className='container mt-4 text-justify' >
            <header className="container ">
                <h1 className='text-4xl font-bold'>About Me - Web Developer</h1>

            </header>
            <div className="container">
                <h2>Hi, I'm MD TABRAIZ</h2>
                <p>I'm a passionate web developer with a strong background in creating modern, responsive, and user-friendly websites and web applications. My journey in web development began [mention how you started your journey], and I've been dedicated to honing my skills ever since.</p>

                <p>Here are some of the technologies and skills I specialize in:</p>
                <ul>

                    <li>HTML5, CSS3, JavaScript</li>
                    <li>Front-end frameworks like React and Angular</li>
                    <li>Back-end technologies like Node.js and Ruby on Rails</li>
                    <li>Database management with SQL and NoSQL databases</li>
                    <li>Version control with Git</li>
                </ul>

                <p>My goal is to create seamless and visually appealing digital experiences for clients and users. I'm always excited to take on new challenges and projects, so feel free to get in touch if you have a project in mind or just want to connect!</p>

                <p>You can contact me at [mdtabraiz6@gmail.com] or connect with me on <a href="[Your LinkedIn Profile]">LinkedIn</a> or <a href="[Your GitHub Profile]">GitHub</a>.</p>
            </div>
            
        </div>
    </>
)

}
export default About
