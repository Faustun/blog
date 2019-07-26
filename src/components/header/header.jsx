import React from 'react';
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import './header.scss';


const oddEvent = (match, location) => {
    if (!match) {
        return false;
    }
    return match.isExact;
}

const HaderComponent = props => (
    <div className="header">
        <div className="grid">
            <div className="logo"></div>
            <span className="toggle" onClick={props.onToggle}>
                <i className="iconfont icon-ego-menu"></i>
            </span>
            <div className={classNames("main", { expand: props.expand })}>
                <div className="inner">
                    <div className="nav">
                        <ul className="list">
                            <li className="item">
                                <NavLink to="/" isActive={oddEvent}>首页</NavLink>
                            </li>
                            {/* <li className="item">
                                <NavLink to="/about" isActive={oddEvent}>关于我们</NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <div className="search active">
                        <span className="search-ico">
                            <i className="iconfont icon-sousuo"></i>
                        </span>
                        <div className="search-form show">
                            <input className="search-ipt" onKeyDown={props.onSearch} value={props.value} onChange={props.onChange} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HaderComponent;