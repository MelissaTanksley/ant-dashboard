import React, { Component } from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd';
import axios from 'axios';
import './forms.css';
class UploadInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    }
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        console.log(info)
        this.setState({ fileList: info.fileList })
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload name='file'
                    action='http://46.249.53.111:8080/salesxl/api/v2.0/upload/image'
                    listType="picture-card"
                    fileList={fileList}
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                    name='image'
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                {this.state.file && <img src={this.state.file} alt="" style={{ width: 200, height: 200 }} />}
            </div >
        )
    }
}

export default UploadInput;