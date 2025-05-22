
import React from 'react';

const Certifications = () => {
  const certificates = [
    {
      title: "Machine Learning: A to Z",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering machine learning concepts, algorithms and practical implementations.",
      link: "https://drive.google.com/file/d/1P9b7MmQd4f6Iz88Vudk7Ri1_wMLiG2nK/view?usp=drive_link"
    },
    {
      title: "Data Structures and OOPs with C++",
      issuer: "Udemy",
      date: "2022",
      description: "In-depth study of data structures implementation and object-oriented programming principles using C++.",
      link: "https://drive.google.com/file/d/1fkEXGkyBYCS159HCGjn9EbCTh_j8RVLe/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-navy p-6 rounded-md border border-slate-dark/20 hover:border-teal/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-light">{cert.title}</h3>
                  <span className="text-teal font-mono text-sm">{cert.date}</span>
                </div>
                
                <p className="text-slate mb-2 text-sm">Issued by: {cert.issuer}</p>
                <p className="text-slate mb-6">{cert.description}</p>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto text-center bg-navy-light text-sm px-3 py-2 rounded-md border border-teal/30 text-teal hover:bg-teal/5 transition-all inline-block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
