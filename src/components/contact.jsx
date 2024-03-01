const Contact = () => {
  const scriptURL =
  'https://script.google.com/macros/s/AKfycbwhU7K5gIt5C9dlO97hmouAsElqSSWLnP3xe8hq4rP3F-jfzqT5CbNEouWEHXnzTxuI/exec';

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
    });

    console.log('Success!', response);
  } catch (error) {
    console.error('Error!', error.message);
  }
  document.getElementById("name").value=""
  document.getElementById("email").value=""
  document.getElementById("message").value=""
};
  return (
    <main className="h-[32rem] w-[50rem] bg-white flex item-center justify-center gap-12 rounded-md ml-[16rem]">
      <form
        onSubmit={handleSubmit}
        name="submit-to-google-sheet"
        className="flex item-center justify-center flex-col gap-4"
      >
        <div>
          Do you have any
          <span className="font-bold text-gray-700 text-lg "> Queries?</span>
        </div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="Name"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="Email"
          className="border-b-2 outline-none border-black p-2 bg-transparent mr-[-2rem] text-black"
        />
        <textarea
          className="border-b-2 outline-none border-black p-2 bg-transparent  text-black"
          name="Message"
          id="message"
          cols="30"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button
          type="submit"
          id="submit"
          className="bg-gray-700 text-white rounded-md w-[16rem] h-8 mr-[-2rem]"
        >
          Send
        </button>
      </form>
      <div>
        <img
          className="h-[29rem] w-96 mt-6 rounded-[8px]"
          src="https://assets.entrepreneur.com/content/3x2/2000/1680724941-GettyImages-1169112139.jpg?format=pjeg&auto=webp&crop=1:1"
          alt=""
        />
      </div>
    </main>
  );
};

export default Contact;
