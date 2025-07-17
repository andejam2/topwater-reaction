"use client";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted", data);
    alert("Thank you for your submission.");
    e.target.reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-black text-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-2 rounded bg-white text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-odgreen hover:bg-green-800 text white py-2 px-4 rounded font-bold"
        >
          Submit
        </button>
      </form>

    </div>
  );
}
