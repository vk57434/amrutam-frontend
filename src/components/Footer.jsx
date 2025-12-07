const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Amrutam. All rights reserved.</p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
