const Footer = () => {
    return (
      <footer className="p-4 bg-primary text-white">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <img src="/logo.png" alt="Home-Grown Logo" className="w-6 h-6 mb-2" />
            <p className="text-sm">&copy; {new Date().getFullYear()} Home-Grown</p>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  