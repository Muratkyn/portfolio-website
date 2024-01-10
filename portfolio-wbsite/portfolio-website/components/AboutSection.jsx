"use client";
import React, {useState, useTransition} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [ 
    {
        title: "Skills",
        id: "skills",
        content : (
            <ul className="list-disc pl-2">
                <li>React, Vue</li>
                <li>NextJs</li>
                <li>Javascript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS(Tailwind, Bootstrap, Sass)</li>
                <li>Git, GitHub, GitLab</li>
            </ul>
        )

    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Plandy · Internship (2022-2023)</li>
                <p>-Technical Skills-</p>
                <li>Javascript, Typescript, HTML, CSS (styled components)</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Ant Design</li>
                <li>Strapi (CMS)</li>
                <li>Git, Gitlab, GitHub</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        }); 
    };
  return (
    <section className="text-white lg:mt-28" id="about">
    <div className="grid md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-4 sm:py-16 xl:px-28">
            <Image
                alt='mkdev'
                src="/images/mkdev.png"
                width={520}
                height={520}
                className='shadow-3xl rounded-md'
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full  ">
                <h2 className="text-3xl font-bold text-white mb-4 mt-0 ">About Me</h2>
                <p className="text-base lg:text-lg">
                    I am a Frontend Web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Next.js, TypeScript, HTML, CSS, Git and GitHub.
                    I am a quick learner and I am always looking to expand my knowledge and skill 
                    set.  I am a team player and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                            {" "}
                            Skills {""}
                    </TabButton> 
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {" "}
                            Experience {""}
                    </TabButton>             
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((item) => item.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection