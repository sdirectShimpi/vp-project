import React from "react";
import "./NotFound.css";
const PageNotFound = () => {
  return (
    <>
      <body>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>Oops!</h1>
            </div> <br />
            <h2>404 - Page not found</h2>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <a href="/login">Go To Homepage</a>
          </div>
        </div>
      </body>
    </>
  );
};

export default PageNotFound;
