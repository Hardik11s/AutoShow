import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const NewsletterForm = () => {

    const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://carretailerbackend.vercel.app/api/email/newsletter', {
        receiverEmail: email
      });
      toast.success('Newsletter Subscribed Successfully.');

    } catch (error) {
      toast.error('Failed to send email.');
    }
  };

  return (
    <div className="flex flex-col items-center w-screen text-center mx-auto my-2 p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
      <form method="post" className="w-full" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email...."
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-1/3 p-2 mb-4 border border-black rounded bg-zinc-200 text-black mr-2"
        />
        <input
          
          type="submit"
          value="Subscribe"
          className="inline-block bg-red-600 text-white py-2 px-8 rounded-md transition duration-500 hover:bg-red-500s cursor-pointer"
        />
      </form>
    </div>
  );
};

export default NewsletterForm;
