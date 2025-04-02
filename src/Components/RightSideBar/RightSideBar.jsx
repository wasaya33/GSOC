import React from 'react'

const RightSideBar = () => {
  const organizations = [
    {
      name: "3DTK",
      tagline: "The 3D Toolkit",
      fullName: "The 3D Toolkit",
      category: "Science and medicine",
      description: "The 3D Toolkit provides algorithms and methods to process 3D point clouds",
      years: ["2018"],
      technologies: ["c", "c++", "ros", "opencv", "cmake", "1 more"]
    },
    {
      name: "52north",
      tagline: "exploring horizons",
      fullName: "52°North Spatial Information Research GmbH",
      category: "Science and medicine",
      description: "Innovative ideas & technologies in geoinformatics",
      years: ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      technologies: ["javascript", "java", "web services", "ogc standards", "web", "6 more"]
    },
    {
      name: "AFLplusplus",
      tagline: "Security",
      fullName: "State of the art fuzzing for better security",
      years: ["2025", "2024", "2023", "2022", "2021", "2020"],
      technologies: ["c", "c++", "ltvrn", "fuzzing", "qemu", "3 more"]
    }
  ];

  return (
    <div className='w-full lg:w-[75%] p-4'>
      <div className="mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg 
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Organizations participating in GSoC 2025 have been announced. View them in the official site <a href="#" className="text-blue-500 hover:underline">here</a>.
      </div>

      <div className="space-y-6">
        {organizations.map((org, index) => (
          <div 
            key={index} 
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div className="font-bold text-lg">{org.name}</div>
              <div className="text-sm text-gray-500 mt-0.5">{org.tagline}</div>
            </div>
            
            {org.fullName && (
              <div className="text-sm text-gray-700 mt-1">{org.fullName}</div>
            )}
            
            {org.category && (
              <div className="text-xs text-gray-500 mt-1">{org.category}</div>
            )}
            
            <div className="text-sm text-gray-700 mt-2">{org.description}</div>
            
            <div className="flex flex-wrap gap-1 mt-3">
              {org.years.map((year, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                >
                  {year}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-1 mt-3">
              {org.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        504 results
      </div>
    </div>
  )
}

export default RightSideBar