import { useState } from "react";
import { useForm } from "react-hook-form";
import { PlusIcon } from "@heroicons/react/solid";

const AddProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    // You can submit form data to a backend API here
    console.log(data);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register({ required: true })}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register({ required: true })}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register({ required: true })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageUpload}
          className="hidden"
          ref={register({ required: true })}
        />
        <label
          htmlFor="image"
          className="cursor-pointer flex items-center justify-center w-full h-16 bg-gray-200 border-dashed border-2 border-gray-400 rounded-md"
        >
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Product"
              className="max-h-full max-w-full"
            />
          ) : (
            <div>
              <PlusIcon className="h-6 w-6 text-gray-400" />
              <p className="text-gray-400">Upload Image</p>
            </div>
          )}
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        <PlusIcon className="h-6 w-6 mr-2" />
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
