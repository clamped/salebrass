import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>&copy; {new Date().getFullYear()} Sale Brass - All Rights Reserved</p>
          <p>Registered Charity No. 1156949</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
