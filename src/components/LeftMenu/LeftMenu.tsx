import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CommentIcon from '@mui/icons-material/Comment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';

export default function LeftMenu() {
    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }
    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon icon-green rotate-n-15">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Sports</div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Analytics
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/map`}>
                        <LocationOnIcon />
                        <i className="fas fa-fw fa-maplocation"></i>
                        <span>MapLocation</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/teams`}>
                        <GroupsIcon />
                        <i className="fas fa-fw fa-teams"></i>
                        <span>Teams</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/players`}>
                        <PersonSearchIcon />
                        <i className="fas fa-fw fa-players"></i>
                        <span>Players</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/statistics`}>
                        <AutoGraphIcon />
                        <i className="fas fa-fw fa-statistics"></i>
                        <span>Statistics</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/comments`}>
                        <CommentIcon />
                        <i className="fas fa-fw fa-comments"></i>
                        <span>Comments</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/editor`}>
                    <VideoSettingsIcon />
                    <i className="fas fa-fw fa-videoeditor"></i>
                    <span>VideoEditor</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Videos
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/upload`}>
                        <CloudUploadIcon />
                        <i className="fas fa-fw fa-comments"></i>
                        <span>Upload</span>
                    </Link>
                </li>


                {/*<div className="sidebar-heading">
                    Admin
                </div>


                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>*/}

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    )
}