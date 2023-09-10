import React from 'react';

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode = (e: any) => {
        const {getUserStatusTC} = this.props
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = (e: any) => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}>editmode deactivated</span></div>
            }
            {this.state.editMode &&
                <div><input onBlur={this.deactivateEditMode} value={"activated"} autoFocus/></div>
            }

        </>
    }
};

export default ProfileStatus;

type ProfileStatusPropsType = {
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void


}