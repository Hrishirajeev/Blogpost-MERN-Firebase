
import React from "react";
import { useNavigate } from "react-router-dom";

import HeroImage from "../assets/i1.png";
import ProjectWebsite from "../assets/i2.png";
import ProjectDashboard from "../assets/i3.png";
import BlogImage from "../assets/i4.png";
import ProjectWorkspace from "../assets/i5.png";

import Footer from "./common/Footer";

function Home() {
  var navigate = useNavigate();

  var projects = [
    {
      image: ProjectWebsite,
      title: "Creative Website",
      category: "Web Design & Development"
    },
    {
      image: ProjectDashboard,
      title: "Analytics Dashboard",
      category: "Frontend Development"
    },
    {
      image: ProjectWorkspace,
      title: "Creative Workspace",
      category: "Digital Experience"
    }
  ];

  var skills = [
    { name: "HTML5", symbol: "5", color: "#E76F35" },
    { name: "CSS3", symbol: "3", color: "#2878C7" },
    { name: "JavaScript", symbol: "JS", color: "#C5A52D" },
    { name: "React", symbol: "⚛", color: "#399DB5" },
    { name: "Node.js", symbol: "JS", color: "#63965A" },
    { name: "Express.js", symbol: "EX", color: "#303D35" },
    { name: "MongoDB", symbol: "M", color: "#4C956C" },
    { name: "Firebase", symbol: "F", color: "#E5A52B" },
    { name: "GitHub", symbol: "GH", color: "#303D35" }
  ];

  return (
    <div className="bg-[#faf9f6] text-[#303d35]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-[#a17c5b] uppercase tracking-[4px] text-sm mb-6">
            Developer · Creator · Writer
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Ideas become
            <br />
            <span className="italic text-[#a17c5b]">
              experiences.
            </span>
          </h1>

          <p className="text-[#74776e] text-lg leading-8 mt-8 max-w-lg">
            Welcome to my little corner of the internet.
            I build digital experiences, explore technology
            and share what I learn along the way.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">

            <button
              onClick={function () {
                navigate("/blogs");
              }}
              className="bg-[#303d35] text-white px-7 py-3 rounded-full hover:bg-[#526456]"
            >
              Explore stories →
            </button>

            <button
              onClick={function () {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="border border-[#b9b9aa] px-7 py-3 rounded-full hover:bg-[#eeece4]"
            >
              View my work
            </button>

          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Creative developer workspace"
            className="w-full h-[350px] md:h-[480px] object-cover rounded-t-[180px] rounded-b-2xl shadow-lg"
          />

          <p className="text-right text-sm text-[#8a887d] mt-3">
            A space for ideas and creativity.
          </p>
        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="px-6 md:px-16 py-20 bg-[#efeee7]">

        <div className="max-w-4xl">

          <p className="text-[#a17c5b] uppercase tracking-[3px] text-sm mb-5">
            A little introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Curious about technology.
            <br />
            Passionate about creating.
          </h2>

          <p className="text-[#74776e] text-lg leading-8 mt-7 max-w-2xl">
            I enjoy learning how things work and turning ideas
            into practical projects. From frontend interfaces
            to backend development, every project gives me
            something new to explore.
          </p>

        </div>

      </section>


      {/* TECHNOLOGY SECTION */}
      <section className="px-6 md:px-16 py-20">

        <p className="text-[#a17c5b] uppercase tracking-[3px] text-sm mb-5">
          My technologies
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Tools behind my work.
        </h2>

        <p className="text-[#74776e] mb-10 max-w-xl">
          Technologies and tools I use to build,
          develop and bring digital ideas to life.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

          {skills.map(function (skill) {
            return (
              <div
                key={skill.name}
                className="bg-white border border-[#e8e4da] rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div
                  className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.symbol}
                </div>

                <h3 className="font-medium text-[#303d35]">
                  {skill.name}
                </h3>

              </div>
            );
          })}

        </div>

      </section>


      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="px-6 md:px-16 py-20 bg-[#efeee7]"
      >

        <div className="flex flex-wrap justify-between items-end mb-12 gap-4">

          <div>

            <p className="text-[#a17c5b] uppercase tracking-[3px] text-sm mb-4">
              Selected work
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              Things I've created.
            </h2>

          </div>

          <span className="text-[#89877c]">
            A collection of projects
          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map(function (project) {
            return (

              <div key={project.title} className="group">

                <div className="overflow-hidden rounded-xl bg-white">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <p className="text-[#a17c5b] text-sm mt-5">
                  {project.category}
                </p>

                <h3 className="text-2xl font-serif mt-2">
                  {project.title}
                </h3>

              </div>

            );
          })}

        </div>

      </section>


      {/* BLOG SECTION */}
      <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src={BlogImage}
          alt="Journal and creative writing workspace"
          className="w-full h-[320px] md:h-[400px] object-cover rounded-2xl"
        />

        <div>

          <p className="text-[#a17c5b] uppercase tracking-[3px] text-sm mb-5">
            Notes from my journey
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Words, thoughts
            <br />
            <span className="italic text-[#a17c5b]">
              and discoveries.
            </span>
          </h2>

          <p className="text-[#74776e] leading-8 mt-6">
            Read about technology, development, projects
            and lessons learned along the way.
          </p>

          <button
            onClick={function () {
              navigate("/blogs");
            }}
            className="mt-8 border-b-2 border-[#a17c5b] pb-2 text-[#303d35] hover:text-[#a17c5b]"
          >
            Discover the blog →
          </button>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;
