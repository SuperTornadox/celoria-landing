export default function Footer() {
  return (
    <footer className="bg-[#1f1b16] text-[#ccb99b] py-12 mt-8">
      <div className="section-shell">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[linear-gradient(145deg,#af7f35,#e0bf8f)]">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-white">Celoria AI</span>
            </div>
            <p className="text-[#ccb99b] max-w-md">
              Celoria AI is a smart business management system by Celoria Corp,
              dedicated to providing the most professional digital solutions for the nail industry.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#stats" className="hover:text-white transition">Statistics</a></li>
              <li><a href="#screenshots" className="hover:text-white transition">Product</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>71 University Place</li>
              <li>New York, NY 10003</li>
              <li>joey@celoria.ai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3a342c] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Celoria Corp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
