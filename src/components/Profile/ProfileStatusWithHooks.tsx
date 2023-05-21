import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}
type ProfileLocalStateType = {
  editMode: boolean,
  status: string | null
}

const ProfileStatusWithHooks = (props: PropsType) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditModeHandler = () => {
    setEditMode(true);
  };
  const deactivateEditModeHandler = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {
        !editMode &&
          <div>
            <span onDoubleClick={activateEditModeHandler}>{status}</span>
          </div>
      }
      {
        editMode &&
          <div>
            <input autoFocus={true} value={status} onBlur={deactivateEditModeHandler} onChange={(e) => {
              onStatusChange(e);
            }}>
            </input>
          </div>
      }


    </div>

  );
};


export default ProfileStatusWithHooks;