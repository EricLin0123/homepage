import React from "react";

const YourComponent = () => {
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "200px", // Adjust the width as needed
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    overflowY: "auto", // Enable scrolling for the sidebar
  };

  const contentStyle = {
    flexGrow: "1",
    padding: "20px",
    marginLeft: "220px", // Adjust the margin to accommodate the sidebar width
    // Additional styles for the main content
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        {/* Sidebar content */}
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          {/* Add more sidebar content as needed */}
        </ul>
      </div>
      <div style={contentStyle}>
        {/* Main content */}
        <p>
          gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg<br></br>gg
          <br></br>gg
        </p>
        {/* Add more main content as needed */}
      </div>
    </div>
  );
};

export default YourComponent;
