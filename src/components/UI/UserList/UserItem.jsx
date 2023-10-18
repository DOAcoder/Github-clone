

const userItem = ({user: {login, avatar_url,html_url}}) => {
  return (
    <>
      <div className="p-4 border-border-gray-300 flex items-center justify-between">
        <a href={html_url} target="_blank" className="flex items-center gap-x-3">
          <img src={avatar_url} className="w-[50px] h-[50px] rounded-full" alt="user avatar" />
          <p className="text-gray-400">{login}</p>
        </a>
        <button className="border py-2 px-4 rounded-lg duration-200 hover:bg-slate-400 cursor-pointer ">
          Follow
        </button>
      </div>
    </>
  );
};

export default userItem;