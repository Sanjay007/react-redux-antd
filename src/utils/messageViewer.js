
import { message } from 'antd';
import { Logger } from './';

export const success = (text) => {
    Logger.log(`Sucess message received: ${text}`);
    message.success(text);
};

export const error = (text) => {
    Logger.log(`Error message Received: ${text}`);
    message.error(text);
};

export const warning = (text) => {
    Logger.log(`Warning message Received: ${text}`);
    message.warning(text);
};
