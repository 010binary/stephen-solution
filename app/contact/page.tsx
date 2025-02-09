import React from "react";

const page = () => {
  return (
    <div>
      page
      <>
        <div id="form">
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" required />
            </div>
            <div>
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    </div>
  );
};

export default page;
