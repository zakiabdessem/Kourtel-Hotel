import React from "react";


function Contact() {
  return (
    <div className="flex flex-col p-5 justify-center items-center w-full">
      <div className="flex justify-start items-center w-2/3">
        <div className="flex flex-col p-3 w-1/2">
          <label className="font-mulish mb-1" htmlFor="name">
            Fullname
          </label>
          <input
            className="p-2 border-[1px] border-gray-200 rounded-none focus:border-transparent"
            name="name"
            type="text"
            placeholder="e.g John Becker"
          />
        </div>

        <div className="flex flex-col p-3 w-1/2">
          <label className="font-mulish mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 border-[1px] border-gray-200 rounded-none focus:border-transparent"
            name="email"
            type="email"
            placeholder="johnbecker@gmail.com"
          />
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-start w-2/3 p-3">
        <label className="font-mulish mb-1" htmlFor="name">
          Message
        </label>
        <textarea
          className="w-full h-40 p-2 rounded-none resize-none border-[1px] border-gray-200 focus:border-transparent"
          name="message"
          placeholder="Message"></textarea>
      </div>

      <button
        type="button"
        className="p-3 ml-2 text-white bg-primary hover:bg-primary focus:outline-none font-medium text-sm rounded-3xl">
        Send
      </button>
    </div>
  );
}

export default Contact;
