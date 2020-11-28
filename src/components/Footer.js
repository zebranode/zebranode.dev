import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                &copy; 2019 Brian Moore - All Rights Reserved
              </p>
              <p>
                Background photo by{" "}
                <a href="https://unsplash.com/@jeremythomasphoto">
                  Jeremy Thomas
                </a>{" "}
                on <a href="https://unsplash.com/">Unsplash</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
