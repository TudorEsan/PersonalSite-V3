import React from "react";

const Contact = () => {
  return (
    <div className="flex p-5 sm:p-10">
      <div className="flex flex-col w-1/2">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </div>
      <div className="flex-3 flex-col w-1/2">
        <form className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
