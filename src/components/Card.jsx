import React, { useEffect } from "react";

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping == "users" || grouping == "priority" ? (
            statusMapping[id] == "Todo" ? (
              <img src="./assets/icons/To-do.svg" id="todo" />
            ) : statusMapping[id] == "In progress" ? (
              <img src="./assets/icons/in-progress.svg" id="progress" />
            ) : statusMapping[id] == "Backlog" ? (
              <img src="./assets/icons/Backlog.svg" id="backlog" />
            ) : statusMapping[id] == "Done" ? (
              <img src="./assets/icons/Done.svg" id="done" />
            ) : (
              <img src="./assets/icons/Canceled.svg" id="cancel" />
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping != "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={"./assets/icons/avatar.svg"}
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping != "priority" ? (
          <div className="feature-container">
            {priority == "0" ? (
              <img src="./assets/icons/No-Priority.svg" />
            ) : priority == "1" ? (
              <img src="./assets/icons/Low-Priority.svg" />
            ) : priority == "2" ? (
              <img src="./assets/icons/Medium-Priority.svg" />
            ) : priority == "3" ? (
              <img src="./assets/icons/High-Priority.svg" />
            ) : (
              <img src="./assets/icons/Urgent-Priority-colour.svg" />
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
