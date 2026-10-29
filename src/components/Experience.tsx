
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-navy">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-12 mt-10">
          {/* BTU Research Internship */}
          <div className="bg-navy-light p-6 rounded-md border border-slate-dark/20 hover:border-teal/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-light mb-2 lg:mb-0">Research Intern – Computer Vision</h3>
              <div className="flex items-center">
                <span className="text-slate">BTU Cottbus-Senftenberg</span>
                <span className="mx-3 text-slate-dark">|</span>
                <span className="text-slate font-mono">Aug 2026 – Present</span>
              </div>
            </div>
            <p className="text-slate mb-4">
              Building an automated pipeline to detect, count and classify nocturnal insects in
              high-resolution (10240×5760 px) light-trap images across three field sites.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate">
              <li>Fine-tuned a COCO-pretrained Faster R-CNN (ResNet-50 + FPN v2) in PyTorch, reaching up to 0.94 AP50 and F1 0.93 on held-out test frames.</li>
              <li>Showed that whole-frame inference beats tiled inference on all three sites while running 50× faster (0.1 s vs 5 s per frame).</li>
              <li>Designed a semi-automatic annotation workflow (pre-labels, tracking, CVAT correction) that produced 4,900+ verified boxes.</li>
              <li>Now building a 13-class species classifier and cross-site evaluation.</li>
            </ul>
          </div>

          {/* Plasmid Internship */}
          <div className="bg-navy-light p-6 rounded-md border border-slate-dark/20 hover:border-teal/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-light mb-2 lg:mb-0">Data Science Intern</h3>
              <div className="flex items-center">
                <span className="text-slate">Plasmid</span>
                <span className="mx-3 text-slate-dark">|</span>
                <span className="text-slate font-mono">Jun – Aug 2024 · Remote</span>
              </div>
            </div>

            <p className="text-slate mb-6">
              Built a product recommendation system for an online retailer using item-based collaborative
              filtering on 540k transactions, and analysed customer behaviour with Python, Pandas and Scikit-learn.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <a 
                href="https://drive.google.com/file/d/1vdFCQxFhVcwsGwpM1U5ojW6hF7MaSY5Y/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-dark text-sm px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/5 transition-all"
              >
                Internship Certificate
              </a>
              <a 
                href="https://drive.google.com/file/d/1vr5bkUrOmN5jp77ku0Dc8y3fEETi5Qmh/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-dark text-sm px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/5 transition-all"
              >
                Letter of Recommendation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
