import React from 'react'

export default function DescriptionBox({label,description}) {
  document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.descriptionBox');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class when element enters the viewport
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible
  
    observer.observe(target); // Start observing the target element
  });
  return (
    <div className='descriptionBox p-4 border-b border-[#434343]'>
        <div className='flex justify-between pb-4'>
            <div className='px-3 py-1 rounded-full bg-[#c9c9c9] text-black'><h4>{label}</h4></div>
        </div>
        <div>
            <h4>
            {description}
            </h4>
        </div>
    </div>
  )
}