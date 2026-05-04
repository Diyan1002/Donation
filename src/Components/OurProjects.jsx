import React from "react";

// Importing images from assets
import kafalatProgramImg from "../assets/1.jpeg";
import virtualBloodBankImg from "../assets/2.jpeg";
import disasterReliefImg from "../assets/3.jpeg";

const projects = [
  {
    title: "Kafalat Program",
    description:
      "Monthly financial support and ration distribution for orphans and needy families.",
    imageUrl: kafalatProgramImg, // Imported image from assets
  },
  {
    title: "Virtual Blood Bank",
    description:
      "Connecting blood donors with patients in emergency situations 24/7.",
    imageUrl: virtualBloodBankImg, // Imported image from assets
  },
  {
    title: "Job Bank",
    description:
      "Helping unemployed individuals find suitable jobs and career opportunities.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60", // Image from the net
  },
  {
    title: "Rozgar Scheme",
    description:
      "Creating small business setups for deserving individuals to earn livelihood.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60", // Image from the net
  },
  {
    title: "Online Quran Academy",
    description:
      "Providing online Quran teaching with Tajweed for students worldwide.",
    imageUrl:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=60", // Image from the net
  },
  {
    title: "Winter Relief",
    description:
      "Distribution of blankets, jackets and heaters for cold affected families.",
    imageUrl:
      "https://images.unsplash.com/photo-1608889175638-5f8b4c9b8a9d?auto=format&fit=crop&w=800&q=60", // Image from the net
  },
  {
    title: "Disaster Relief",
    description:
      "Emergency aid and rehabilitation for flood and disaster affected people.",
    imageUrl: disasterReliefImg, // Imported image from assets
  },
  {
    title: "Special Person Program",
    description:
      "Support and empowerment for disabled persons through care and tools.",
    imageUrl:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60", // Image from the net
  },
];

const OurProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-14 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-[#39206d] mb-4">
          Our Welfare Projects
        </h2>
        <p className="text-gray-600 text-lg">
          We are dedicated to helping humanity through different welfare programs that bring real change in society.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
          >
            {/* Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[230px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white z-10">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button className="bg-white text-[#39206d] px-4 py-2 rounded-full font-semibold shadow">
                Donate Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurProjects;