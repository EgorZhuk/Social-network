import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}
type ProfileLocalStateType = {
  editMode: boolean,
  status: string | null
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileLocalStateType> {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusCange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileLocalStateType>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode &&
            <div>
              <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
            </div>
        }
        {
          this.state.editMode &&
            <div>
              <input onChange={(event) => this.onStatusCange(event)} autoFocus={true} defaultValue={this.state.status}
                     onBlur={this.deActivateEditMode}></input>
            </div>
        }


      </div>

    );
  }
};

export default ProfileStatus;