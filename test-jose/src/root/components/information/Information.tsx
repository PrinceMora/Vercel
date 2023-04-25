import React, { useState } from "react";

export interface InformationProps {
  name: string;
  lastName: string;
  email: string;
  tastes: string;
}
export function Information(props: InformationProps) {
  return (
    <div tabIndex={1}>
      <form action="">
        <div className="card">
          <img
            className="img-thumbnail"
            src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t39.30808-6/329539602_1133758127285843_4665986158086190813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9jGwDIHaXCMAX87RblK&_nc_ht=scontent.fsjo14-1.fna&oh=00_AfBjR3c1S2ZiP0k21_Y5vtLdyYwMpshMX2ponGZjxoZx8Q&oe=644B5157"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Name : {props.name}</h5>
            <h5 className="card-title">LasName : {props.lastName}</h5>
            <h5 className="card-title">Email : {props.email}</h5>
            <h5 className="card-title">Tastes : {props.tastes}</h5>
            <p className="card-text">
              Very friendly person, likes to help others competent I like to
              improve myself and be able to learn
            </p>
          </div>
          <button className="btn btn-outline-secondary">
            <a href="https://www.linkedin.com/in/jose-fallas-425bb3253/">
              Link
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Information;
