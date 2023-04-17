import React from 'react';

type ProfileStatusPropsType = {
  status: string
}
type ProfileLocalStateType = {}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileLocalStateType> {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    debugger
    console.log('this:', this);
    this.setState({
      editMode: true
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
  };

  render() {
    return (
      <div>
        {
          !this.state.editMode &&
            <div>
              <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>
        }
        {
          this.state.editMode &&
            <div>
              <input autoFocus={true} defaultValue={this.props.status} onBlur={this.deActivateEditMode}></input>
            </div>
        }


      </div>

    );
  }
};

export default ProfileStatus;