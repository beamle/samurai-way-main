import React, {ChangeEvent, RefObject} from 'react';

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = (e: any) => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = (e: any) => {
        const {updateUserStatusTC} = this.props
        this.setState({
            editMode: false
        })
        updateUserStatusTC(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:any , prevState: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div><span onDoubleClick={this.activateEditMode}>{this.state.status || '---'}</span></div>
            }
            {this.state.editMode &&
                <div><input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus/></div>
            }

        </>
    }
};





export default ProfileStatus;

type ProfileStatusPropsType = {
    userId: number
    status: string
    updateUserStatusTC: (status: string) => void


}