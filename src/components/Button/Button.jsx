export const Button = (props) => {
  const { title, handleClick } = props;
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-black text-white p-3 px-20 mt-4 font-bold"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
