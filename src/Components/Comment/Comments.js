import { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  let [userComments, setUserComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setUserComments((_) => response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="mt-10">
        <span className="fa">
          <i className="fas fa-comments text-6xl"></i>
        </span>
      </div>
      <div className="bg-slate-900 mt-1 w-2/4 rounded-lg shadow-2xl shadow-slate-700 border-gray-800 text-white text-center">
        {userComments.length &&
          userComments.map(({ email, body }, index) => (
            <div key={index} className="m-4 p-2">
              <p>
                <span className="fa pr-2">
                  <i className="fas fa-user text-lg"></i>
                </span>
                {email.split("@")[0]}
              </p>
              <p>
                <span className="fa pr-2">
                  <i className="fas fa-hand-point-right text-2xl"></i>
                </span>
                {body}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;
