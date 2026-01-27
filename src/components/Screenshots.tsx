const screenshots = [
  {
    src: '/images/screenshots/02-appointment-board.png',
    title: 'Appointment Board',
    description: 'Visual scheduling with drag-and-drop at a glance',
  },
  {
    src: '/images/screenshots/03-guest-management.png',
    title: 'Customer Management',
    description: 'Complete customer profiles with one-click history lookup',
  },
  {
    src: '/images/screenshots/04-employee-management.png',
    title: 'Employee Center',
    description: 'Unified management of staff info, scheduling, and performance',
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clean and intuitive interface design that makes complex management simple and efficient
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
