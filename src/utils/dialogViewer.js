import { Modal } from 'antd';

export const info = (title, content, onOk) => {
    Modal.info({
        title: title,
        content: content,
        onOk,
    });
}

export const success = (title, content) => {
    Modal.success({
        title: title,
        content: content,
    });
}

export const error = (title, content) => {
    Modal.error({
        title: title,
        content: content,
    });
}

export const warning = (title, content) => {
    Modal.warning({
        title: title,
        content: content,
    });
}

export const showConfirm = (title, content, ok) => {
    Modal.confirm({
        title: title,
        content: content,
        onOk() {
            ok();
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

export const showDeleteConfirm = (title, content) => {
    Modal.confirm({
        title: title,
        content: content,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}