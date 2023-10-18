"use client";
import { useEffect, useState } from "react";
import useUsersApi from "@api/Users";
import UserItem from "@ui/UserList/UserItem";

const page = () => {
  const [followers, setFollowers] = useState([]);
 const [step, setStep] =useState(1)
 const [pbtn, psetBtn] =useState(false)
 const [nbtn, nsetBtn] = useState(false);


  useEffect(() => {

    if(step<=1){
    psetBtn(true)

    }
    useUsersApi.paginateFollowers(step).then((res) => {
   
      if(res.status == 200){
          setFollowers(res?.data);
          nsetBtn(false)
      }
      
    });
  }, [step]);

const next=()=>{
  setStep(step+1)
  nsetBtn(true)
  psetBtn(false)
}
const prev=()=>{
  setStep(step-1)
  psetBtn(true)
}

  return (
    <div className="p-2">
      <ul>
        {
          followers?.length ? followers?.map((user)=>{
            return
            <li>
              <UserItem user={user} />
            </li>
          }): <h1>NOT FOUND!</h1>
        }
      </ul>

      <div className="flex items-center gap-[50px]">
        <button disabled ={pbtn} className="border border-gray-700 py-2 px-4 rounded-md " onClick={()=> prev()}>prev</button>
        <button disabled ={nbtn} className="border border-gray-700 py-2 px-4 rounded-md " onClick={()=>next()}>next</button>
      </div>
    </div>
  );
};

export default page;
