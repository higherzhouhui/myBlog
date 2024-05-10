import {EventEmitter} from 'events';


export const EventBus = new EventEmitter();

export enum EventTypes {
  SwitchTheme = 'event.SwitchTheme',
  SwitchBgStyle = 'event.SwitchBgStyle',
}


// 发送主题变化
export const switchTheme = (theme: any ) => {
  EventBus.emit(EventTypes.SwitchTheme, theme);
};

// 发送主题变化
export const switchBgStyle = (type: any ) => {
  EventBus.emit(EventTypes.SwitchBgStyle, type);
};
