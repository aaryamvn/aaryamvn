export const DmMeButton = () => {
  function clickHandler() {
    // copy DISCORD_ID to clipboard
    // notify user
  }

  return (
    <button
      className="h-[3rem] w-[10rem] bg-accent text-white rounded-full hover:opacity-[0.8] font__poppins font-semibold"
      onClick={clickHandler}
    >
      {"DM Me!"}
    </button>
  );
};
