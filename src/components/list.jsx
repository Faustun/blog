import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG_URL } from '../utils/config.js';

const getList = props => {
    return props.data.map(item => {
        return (
            <div className="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6" key={item._id}>
                <div className="card" onClick={() => props.onHistoryPush(item._id)}>
                    <div className="cover" style={{ background: `url('${BASE_IMG_URL}${item.cover}') rgb(204, 204, 204)` }}></div>
                    <div className="title">{item.title}</div>
                    <div className="foot">
                        <span>{item.createdAt}</span>
                        <span className="division">/</span>
                        <span>{item.type}</span>
                    </div>
                </div>
                <style jsx>{`
                    .card {
                            position: relative;
                            height: 0;
                            padding-top: 80%;
                            cursor: pointer;
                        }
                        .cover {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 75%;
                            height: calc(100% - 60px);
                            background-size: cover !important;
                            background-position: 50% !important;
                        }
                        .title {
                            position: absolute;
                            bottom: 20px;
                            width: 100%;
                            height: 40px;
                            line-height: 56px;
                            box-sizing: border-box;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                        }
                        .title:hover {
                            color: #6190e8;
                        }
                        
                        .foot {
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 20px;
                            line-height: 20px;
                            font-size: 12px;
                            color: #555;
                        }
                        
                        .division {
                            margin-left: 5px;
                            margin-right: 5px;
                        }
                    `}</style>
            </div>
        )
    })
}

const List = props => (
    <div className="grid">
        <div className="el-row">
            {getList(props)}
        </div>
        <style jsx>{`
            .grid {
                width: 100%;
                margin: auto;
            }
        `}</style>
    </div>
)

List.propTypes = {
    data: PropTypes.array.isRequired,
    onHistoryPush: PropTypes.func,
}

export default List;