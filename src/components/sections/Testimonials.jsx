import React from 'react'

export default function Testimonials() {
  return (
    <div><section class="bg-gray-100 py-12">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-semibold text-center mb-12">What People Are Saying</h2>
  
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* <!-- Testimonial 1 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-gray-600 italic mb-4">
            &quot;I was hesitant at first, but after seeing how my contribution helped a family in need, I was moved. This platform truly shows how small acts of kindness can change lives.&quot;
          </p>
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full mr-4" src="/avatar7.png" alt="User Image"/>
            <div>
              <p class="text-gray-900 font-semibold">Emily Johnson</p>
              <p class="text-gray-600 text-sm">Donor</p>
            </div>
          </div>
        </div>
  
        {/* <!-- Testimonial 2 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-gray-600 italic mb-4">
            &quot;Cleaning out my closet and donating old clothes was such a rewarding experience. Knowing they are helping people stay warm is amazing!&quot;
          </p>
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full mr-4" src="/avatar2.png" alt="User Image"/>
            <div>
              <p class="text-gray-900 font-semibold">Michael Adams</p>
              <p class="text-gray-600 text-sm">Donor</p>
            </div>
          </div>
        </div>
  
        {/* <!-- Testimonial 3 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-gray-600 italic mb-4">
          &quot;I donated some old furniture and electronics through this platform, and knowing they've found a new home brought me so much joy!&quot;
          </p>
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full mr-4" src="/avatar5.png" alt="User Image"/>
            <div>
              <p class="text-gray-900 font-semibold">Sarah Thompson</p>
              <p class="text-gray-600 text-sm">Donor</p>
            </div>
          </div>
        </div>
  
        {/* <!-- Testimonial 4 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-gray-600 italic mb-4">
            &quot;I was able to donate some money to support education programs. The platform is trustworthy, and I will continue contributing."&quot;
          </p>
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full mr-4" src="/avatar4.png" alt="User Image"/>
            <div>
              <p class="text-gray-900 font-semibold">David Chen</p>
              <p class="text-gray-600 text-sm">Donor</p>
            </div>
          </div>
        </div>
{/*   
        <!-- Testimonial 5 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <p class="text-gray-600 italic mb-4">
            `&quot;After losing my job, I received donated clothes and items. I am forever grateful for the kindness, and I hope to give back in the future.`&quot;
          </p>
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full mr-4" src="/avatar6.png" alt="User Image"/>
            <div>
              <p class="text-gray-900 font-semibold">Sophia Martinez</p>
              <p class="text-gray-600 text-sm">Recipient</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  
  </div>
  )
}
